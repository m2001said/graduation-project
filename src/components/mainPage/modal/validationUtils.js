export const validate = (name, email, password) => {
  if (!name.trim()) {
    return "Name is required";
  }
  
  if (!email.trim()) {
    return "Email is required";
  } else if (!isValidEmail(email)) {
    return "Invalid email format";
  }
  
  if (!password.trim()) {
    return "Password is required";
  } else if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  
  return ""; // No validation errors
};

const isValidEmail = (email) => {
  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
