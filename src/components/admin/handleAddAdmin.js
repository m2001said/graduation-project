import axios from "axios";

const handleAddAdmin = async (name, email, password) => {
  const token = localStorage.getItem("token"); // Ensure token is parsed from JSON
  console.log(name, email, password);
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/user/admin-new-user`,
      {
        name: name,
        email: email,
        password: password,
        role: "admin",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`, // Template literal for clarity
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to add admin:", error);
  }
};

export { handleAddAdmin };
