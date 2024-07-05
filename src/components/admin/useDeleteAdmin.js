import axios from "axios";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

async function deleteAdmin(adminId) {
  try {
    const res = await axios.delete(`${API_BASE_URL}/user/superadmin/${adminId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export default deleteAdmin;
