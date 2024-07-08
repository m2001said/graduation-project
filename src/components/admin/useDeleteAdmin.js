import axios from "axios";

const token = localStorage.getItem("token");

async function deleteAdmin(adminId) {
  try {
    const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/superadmin/${adminId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export default deleteAdmin;
