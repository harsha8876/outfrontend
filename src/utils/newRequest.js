import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://outback.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
