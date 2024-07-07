import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const token = localStorage.getItem("token");

function AdminUserPage() {
  const { pageId } = useParams();
  const { userId } = useParams();

  const [page, setPage] = useState([]);
  useEffect(() => {
    const getPage = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/${pageId}`, {
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
