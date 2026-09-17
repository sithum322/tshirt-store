import axios from "axios";

const API = axios.create({
  baseURL: "http://18.142.91.203:30502/api",
});

export default API;