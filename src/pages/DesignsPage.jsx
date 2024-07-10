import React, { useEffect, useState } from "react";
import DesignsContainer from "./../components/designsPage/sections/DesignsContainer";
import { useDispatch } from "react-redux";
import { updateUser } from "../features/auth/authSlice";

const DesignsPage = () => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);

    // Extract the user parameter and parse it as JSON
    const userParam = urlParams.get("user");
    if (userParam) {
      try {
        const userObject = JSON.parse(userParam);
        setUser(userObject);
      } catch (error) {
        console.error("Failed to parse user parameter:", error);
      }
    }

    // Extract the accessToken parameter
    const token = urlParams.get("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  useEffect(() => {
    if (user && accessToken) {
      // console.log(user, "..", accessToken);
      localStorage.setItem("token", accessToken);
      dispatch(updateUser(user));
    }
  }, [user, accessToken]);

  return <DesignsContainer />;
};

export default DesignsPage;
