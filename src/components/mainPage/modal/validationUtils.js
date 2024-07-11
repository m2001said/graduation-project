export const validate = (type, name, email, password) => {
 if (type === "createAccount") {
   if (!name.trim()) {
     return "Name is required";
   } else if (name.trim().length < 6) {
     return "Name must be at least 6 characters long";
   }
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

  return "";
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
