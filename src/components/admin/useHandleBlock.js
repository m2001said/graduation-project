import axios from "axios";

const token = localStorage.getItem("token");

async function blockUser(userId) {
  try {
    const res = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/user/block/${userId}`,
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
      `${process.env.REACT_APP_BACKEND_URL}/user/unblock/${userId}`,
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
