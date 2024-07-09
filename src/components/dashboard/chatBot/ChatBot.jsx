import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { addMessage, clearMessages } from "../../../features/messages/messagesSlice";
import { useSelector, useDispatch } from "react-redux";
import askAi from "../../../assets/images/ask-ai.svg";
import closeIcon from "../../../assets/images/close.svg"; // Assume you have a close icon
import "./chat-bot.css";

const ChatBot = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const messages = useSelector((state) => state.messages);
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClearMessages = () => {
    dispatch(clearMessages());
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: "user" };
      dispatch(addMessage(userMessage));
      setInput("");
      setError(null);
      setLoading(true);

      try {
        const response = await axios.post(`${process.env.REACT_APP_AI_URL}/regenerate-text`, {
          text: input,
        });

        const aiMessage = { text: response.data.regenerated_text, sender: "ai" };
        dispatch(addMessage(aiMessage));
      } catch (error) {
        console.error("Error sending message to AI:", error);
        setError("Error sending message to AI. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button className="flex items-center gap-4 linear text-white px-6 py-1 rounded-full" onClick={handleToggle}>
          <p className="text-lg"> Ask AI</p>
          <img className="w-9" src={askAi} alt="ask ai" />
        </button>
      ) : (
        <div className="chat-bot-container">
          <div className="chat-bot-header">
            <button className="close-button" onClick={handleToggle}>
              <img src={closeIcon} alt="close" />
            </button>
            <div className="flex gap-2">
              <p className="chat-bot-title">ask AI</p>
              <img className="chat-bot-icon" src={askAi} alt="ask ai" />
            </div>
          </div>
          <div className="chat-bot-body flex-1 overflow-y-auto mb-4 ">
            {messages.map((message, index) => (
              <div key={index} className={`mb-2 p-2 rounded text-black ${message.sender === "user" ? "bg-gray-100 self-end" : "bg-purple-100 self-start"}`}>
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef}></div>
            {loading && (
              <div className="my-6">
                <Loader />
              </div>
            )}
            {error && <div className="mb-2 p-2 bg-red-100 text-red-700 rounded">{error}</div>}
          </div>
          <div className="chat-bot-footer">
            <input
              type="text"
              className="chat-bot-input flex-1 border rounded-l-lg p-2 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="write what you need ..."
            />
            <button className="chat-bot-send-button pt-2 rounded-r-lg" onClick={handleSend}>
              Ask
            </button>
          </div>
          <button className="text-purple-800 p-2 font-semibold" onClick={handleClearMessages}>
            Clear Messages
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
