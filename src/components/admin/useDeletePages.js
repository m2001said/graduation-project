import axios from "axios";

const token = localStorage.getItem("token");

async function deletePages(userId) {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}`, {
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
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/user/${userId}/${pageId}`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export { deletePage, deletePages };
