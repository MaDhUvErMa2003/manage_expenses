import axios from "axios";

const api = axios.create({
  baseURL: "https://manage-expenses.onrender.com",
});

export default api;
