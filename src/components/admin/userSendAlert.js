import axios from "axios";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

async function sendAlert(userId) {
  await axios.post(
    `${API_BASE_URL}/user/send-alert/${userId}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

async function deleteUser(userId) {
  await axios.delete(`${API_BASE_URL}/user/admin-delete-user/${userId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export { sendAlert, deleteUser };
