import axios from "axios";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

async function getUserPages(userId) {
  try {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/pages`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
async function getUserPage(userId, pageId) {
  try {
    const res = await axios.get(`${API_BASE_URL}/user/${userId}/${pageId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
}

export { getUserPages, getUserPage };
