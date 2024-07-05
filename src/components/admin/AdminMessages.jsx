import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
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
        const response = await axios.get(`${API_BASE_URL}/message/admin`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setMessages(response.data.messages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="p-6 border-b-2 rounded-md border-[#BB5CB9]">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-12 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Users' messages</h2>
      {loading && !error && <Loader />}
      {error && <p className="mt-24 text-2xl text-red-700">Some Error Occured</p>}
      {!loading && !error && (
        <div className="mb-2">
          <div className="flex items-center gap-2 w-full ml-2 mb-4">
            <div className="w-1/4 text-[#350E5C] text-xl font-bold">Email</div>
            <div className="w-1/4 text-[#350E5C] text-xl font-bold ml-2">User name</div>
            <div className="w-5/12  text-[#350E5C] text-xl font-bold ml-2">Message</div>
          </div>
          <Swiper spaceBetween={30} pagination={pagination} modules={[Pagination]} className="mySwiper">
            {messages.length > 0 &&
              Array.from({ length: Math.ceil(messages.length / 7) }).map((_, index) => (
                <SwiperSlide key={index}>
                  {messages.slice(index * 7, index * 7 + 7).map((message) => (
                    <div key={message._id}>
                      <div className="flex items-center w-full gap-4">
                        <div className="w-1/4 mb-2">
                          <p className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{message?.email}</p>
                        </div>
                        <div className="w-1/4 mb-2">
                          <p className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{message?.name}</p>
                        </div>
                        <div className="w-5/12 mb-2">
                          <p className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{message?.message}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default AdminMessages;
