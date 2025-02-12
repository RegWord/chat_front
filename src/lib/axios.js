import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-back-c8b6.onrender.com/api" : "/api",
  withCredentials: true,
});
