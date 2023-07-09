import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

export const sendEmail = (name, email, message) => {
  return instance.post("/send", { name, email, message });
};
