import React, { useState, useEffect } from "react";
import { useGetAdmins } from "./useGetAdmins";
import axios from "axios";
import { handleAddAdmin } from "./handleAddAdmin";
import Loader from "../Loader/Loader";
import { blockUser, unBlockUser } from "./useHandleBlock";
import { deleteUser, sendAlert, useDeleteUser } from "./userSendAlert";
import { Link } from "react-router-dom";
import { getUserPages } from "./useGetUserPages";
import i18next from "i18next";
import { deletePage, deletePages } from "./useDeletePages";

const token = localStorage.getItem("token") || undefined;

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blockUseLoading, setBlockUserLoading] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/admin-users?role=user&limit=10&offset=27`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUsers(data.data.users);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    const fetchPremium = async () => {
      try {
        setLoading(true);
        setError(false);
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/admin-users?sort=premium`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        const allUsers = [data.data.users, ...users];
        setUsers(...allUsers);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    fetchPremium();
  }, []);
  // const toggleStatus = (user._id) => {
  //   users[user._id].status = users[user._id].status === "active" ? "blocked" : "active";
  // };

  const language = i18next.language;

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
            <div className="w-1/6 text-[#350E5C] text-xl font-bold ml-2">Status</div>
          </div>
          {users?.map((user) => (
            <div key={user?._id}>
              <div className="flex items-center w-full gap-4">
                <div className="w-1/4 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Name</label> */}
                  <p className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{user?.email}</p>
                </div>
                <div className="w-1/6 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Email</label> */}
                  <p className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{user?.name}</p>
                </div>
                <div className="w-1/6 mb-2">
                  {/* <label className="text-[#350E5C] text-xl ">Role</label> */}
                  <p className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words">{user?.role}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between w-1/6 mb-2 border border-inherit rounded-lg shadow  max-w-full">
                  <p className="text-[#350E5C] p-2 break-words">{user?.status}</p>
                  <button
                    className="text-[#350E5C] font-semibold text-base bg-[#D095CF] py-1 px-1 rounded-lg transition-colors hover:bg-[#b963b8]"
                    onClick={async () => {
                      setBlockUserLoading(true);
                      const succeeded = user.status === "active" ? await blockUser(user?._id) : await unBlockUser(user?._id);
                      if (succeeded) setBlockUserLoading(false);
                    }}
                  >
                    {user.status === "active" ? (blockUseLoading ? "loading.." : "block") : blockUseLoading ? "loading..." : "Unblock"}
                  </button>
                </div>
                <div>
                  <button
                    className="text-[#FFFFFF] text-xs bg-[#350E5C] py-1 px-1 rounded-lg transition-colors hover:bg-[#350E5a]"
                    onClick={async () => {
                      setCurrentUserId(user?._id); // Set the current user ID
                      setPages(await getUserPages(user?._id));
                    }}
                  >
                    Get user pages
                  </button>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#D0342c] transition-colors duration-300 hover:text-[#f11d12] cursor-pointer"
                  viewBox="0 0 24 24"
                  onClick={() => sendAlert(user?._id)}
                >
                  <path
                    fill="currentColor"
                    d="M20 11q-.425 0-.712-.288T19 10t.288-.712T20 9t.713.288T21 10t-.288.713T20 11m-1-3V3h2v5zM9 12q-1.65 0-2.825-1.175T5 8t1.175-2.825T9 4t2.825 1.175T13 8t-1.175 2.825T9 12m-8 8v-2.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13t3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2V20z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 26 26"
                  className="w-5 h-6 text-[#350E5C] cursor-pointer"
                  onClick={async () => await deleteUser(user?._id)}
                >
                  <path
                    fill="currentColor"
                    d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
                  />
                </svg>
              </div>

              {currentUserId === user?._id && (
                <div className="text-[#350E5C] border border-inherit p-2 rounded-lg shadow max-w-full break-words mb-2">
                  {pages &&
                    pages?.pages?.map((page) => (
                      <div key={page._id} className="flex gap-5 ">
                        <p>{page?.templateInfo?.id}</p>
                        <p>{page?.templateInfo?.title}</p>
                        <p>{page?.templateInfo?.description}</p>
                        <Link to={`/${language}/admin-user-page/${user._id}/${page._id}`} className="cursor-pointer hover:text-[#f11d12]">
                          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M20.77 12c0-.359-.194-.594-.582-1.066C18.768 9.21 15.636 6 12 6c-3.636 0-6.768 3.21-8.188 4.934c-.388.472-.582.707-.582 1.066c0 .359.194.594.582 1.066C5.232 14.79 8.364 18 12 18c3.636 0 6.768-3.21 8.188-4.934c.388-.472.582-.707.582-1.066M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </Link>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 26 26"
                          className="w-4 h-5 text-[#350E5C] cursor-pointer"
                          onClick={() => deletePage(user?._id, page?._id)}
                        >
                          <path
                            fill="currentColor"
                            d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1zm2 2v12h2V10zm4 0v12h2V10zm4 0v12h2V10z"
                          />
                        </svg>
                        {/* <button onClick={() => deletePage(user?._id, page?._id)} className="text-[#350E5C] border border-inherit px-1 rounded-lg ml-2 mr-2">
                          Delete this page
                        </button> */}
                      </div>
                    ))}
                  {}
                  {pages && pages?.pages?.length > 0 && (
                    <button
                      onClick={() => deletePages(user?._id)}
                      className="text-[#350E5C] border border-inherit px-1 rounded-lg ml-2 mr-2 hover:bg-[#f11d12]"
                    >
                      Delete All Pages
                    </button>
                  )}
                  {pages?.pages?.length === 0 && <div>There is no pages for this user </div>}
                  <button onClick={() => setCurrentUserId(null)} className="text-[#350E5C] border border-inherit px-1 rounded-lg ml-2 mr-2">
                    Show less
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
