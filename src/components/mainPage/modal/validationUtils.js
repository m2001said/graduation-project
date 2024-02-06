export const validate = (email, password) => {
    if (!email || !password) {
      return "Both fields are required.";
    }
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return "Please enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    return ""; // No error if validation is successful
  };
  