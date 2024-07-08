import axios from "axios";

const token = localStorage.getItem("token");

async function sendAlert(userId) {
  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/user/send-alert/${userId}`,
    {},
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
}

async function deleteUser(userId) {
  await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/admin-delete-user/${userId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export { sendAlert, deleteUser };
