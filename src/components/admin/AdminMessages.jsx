import React, { useState, useEffect } from "react";
import { useGetAdmins } from "./useGetAdmins";
import axios from "axios";
import { handleAddAdmin } from "./handleAddAdmin";
import Loader from "../Loader/Loader";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token") || undefined;

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${API_BASE_URL}/message/admin`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setMessages(data.data.messages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-4 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Users' messages</h2>
      {loading && !error && <Loader />}
      {error && <p className="mt-24 text-2xl text-red-700">Some Error Occured</p>}
      {!loading && !error && (
        <div>
          {messages?.map((message) => (
            <div key={message._id}>
              <div className="flex items-center">
                <div>
                  <label className="text-[#350E5C] text-xl ">Name</label>
                  <p className="text-[#350E5C] text-xl ">{message?.name}</p>
                </div>
                <div>
                  <label className="text-[#350E5C] text-xl ">Email</label>
                  <p className="text-[#350E5C] text-xl ">{message?.email}</p>
                </div>
                <div>
                  <label className="text-[#350E5C] text-xl ">Message</label>
                  <p className="text-[#350E5C] text-xl ">{message?.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
