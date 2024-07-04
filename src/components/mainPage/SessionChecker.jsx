import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshTokenAsync } from "../../features/auth/authSlice";

const sessionDuration = 45 * 60 * 1000;

const SessionChecker = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = () => {
      const loginTime = localStorage.getItem("loginTime");
      if (loginTime) {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - parseInt(loginTime, 10);
        if (elapsedTime > sessionDuration) {
          dispatch(refreshTokenAsync())
            .then(() => {
              localStorage.setItem("loginTime", currentTime.toString());
              console.log("Token refreshed");
            })
            .catch((error) => {
              console.error("Failed to refresh token:", error);
            });
        } else {
          const remainingTime = sessionDuration - elapsedTime;
          console.log(`Session valid for ${Math.round(remainingTime / 1000)} seconds.`);
        }
      }
    };

    const interval = setInterval(checkSession, 4 *60 * 1000);
    checkSession(); // when component mounts

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return null;
};

export default SessionChecker;
