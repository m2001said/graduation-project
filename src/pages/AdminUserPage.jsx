import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

function AdminUserPage() {
  const { pageId } = useParams();
  const { userId } = useParams();
  //   console.log(pageId);
  //   console.log(userId);

  const [page, setPage] = useState([]);
  useEffect(() => {
    const getPage = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/user/${userId}/${pageId}`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(res.data);
        setPage(res.data.page);
      } catch (err) {
        console.log(err);
      }
    };
    getPage();
  }, []);

  return <div>AdminUserPage</div>;
}

export default AdminUserPage;
