import axios from "axios";

const token = localStorage.getItem("token");

async function getUserPages(userId) {
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/pages`, {
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
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/${pageId}`, {
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
