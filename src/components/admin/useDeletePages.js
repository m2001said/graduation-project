import axios from "axios";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

async function deletePages(userId) {
  try {
    await axios.delete(`${API_BASE_URL}/user/${userId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    console.log(err);
  }
}
async function deletePage(userId, pageId) {
  try {
    await axios.delete(`${API_BASE_URL}/user/${userId}/${pageId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { deletePage, deletePages };
