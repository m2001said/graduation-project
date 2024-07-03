import React, { useState, useEffect } from "react";
import { useGetAdmins } from "./useGetAdmins";
import axios from "axios";
import { handleAddAdmin } from "./handleAddAdmin";
import Loader from "../Loader/Loader";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token") || undefined;

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${API_BASE_URL}/user/admin-users?sort=user`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(data);
        setUsers(data.data.users);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchPremium = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${API_BASE_URL}/user/admin-users?sort=premium`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(data);
        setUsers([data.data.users, ...users]);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    fetchPremium();
  }, []);
  console.log(users);
    // const toggleStatus = (user._id) => {
    //   users[user._id].status = users[user._id].status === "active" ? "blocked" : "active";
    // };


  return (
    <div className="p-6 border rounded-md shadow-md">
      <h2 className="text-2xl font-bold text-[#BB5CB9] mb-4 mt-12 border-b-4 border-[#BB5CB9] w-fit pb-1">Users' Accounts</h2>
      {loading && !error && <Loader />}
      {error && <p className="mt-24 text-2xl text-red-700">Some Error Occured</p>}
      {!loading && !error && (
        <div>
          <div className="flex items-center gap-2 w-full ml-2 mb-4">
            <div className="w-1/4 text-[#350E5C] text-xl font-bold">Email</div>
            <div className="w-1/6 text-[#350E5C] text-xl font-bold ml-2">User name</div>
            <div className="w-1/6 text-[#350E5C] text-xl font-bold ml-2">Role</div>
            <div className="w-1/6  text-[#350E5C] text-xl font-bold ml-2">Status</div>
          </div>
          {users?.map((user) => (
            <div key={user._id}>
              <div className="flex items-center w-full gap-4">
                <div className="w-1/4 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Name</label> */}
                  <p className="text-[#350E5C] border border-inherit text-base p-2 rounded-lg shadow ">{user?.email}</p>
                </div>
                <div className="w-1/6 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Email</label> */}
                  <p className="text-[#350E5C] border border-inherit text-base p-2 rounded-lg shadow ">{user?.name}</p>
                </div>
                <div className="w-1/6 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Role</label> */}
                  <p className="text-[#350E5C] border border-inherit text-base p-2 rounded-lg shadow ">{user?.role}</p>
                </div>
                <div className="flex items-center justify-between w-1/6 mb-2 border border-inherit rounded-lg shadow ">
                  <p className="text-[#350E5C]  text-base p-2">{user?.status}</p>
                  <button
                    onClick={() => {}}
                    className="text-[#350E5C] font-semibold text-base bg-[#D095CF] py-1 px-1 rounded-lg transition-colors hover:bg-[#b963b8]"
                  >
                    {user.status === "active" ? "block" : "Unblock"}
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {}}
                    className="text-[#FFFFFF] font-semibold text-base bg-[#000000] py-1 px-1 rounded-lg transition-colors hover:bg-[#350E5a]"
                  >
                    Get user pages
                  </button>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" className="w-5 h-6 text-[#350E5C] cursor-pointer">
                  <path
                    fill="currentColor"
                    d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
