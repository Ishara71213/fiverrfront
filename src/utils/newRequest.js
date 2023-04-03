import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-testapi.onrender.com/api/",
  // baseURL: "http://localhost:8800/api/",
  withCredentials: true,
  crossSite: "none",
  crossDomain: true,
});

export default newRequest;
