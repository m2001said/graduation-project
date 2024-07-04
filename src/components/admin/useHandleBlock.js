import axios from "axios";

const API_BASE_URL = "https://websitebuilderbackend-production-716e.up.railway.app";
const token = localStorage.getItem("token");

async function blockUser(userId) {
  try {
    const res = await axios.put(
      `${API_BASE_URL}/user/block/${userId}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
  }
}
async function unBlockUser(userId) {
  try {
    await axios.put(
      `${API_BASE_URL}/user/unblock/${userId}`,
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return true;
  } catch (err) {
    console.log(err);
  }
}

export { blockUser, unBlockUser };
