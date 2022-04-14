import axios from "axios";

const api = axios.create({
  baseURL: "https://deliveryljg.herokuapp.com"
});

export default api;
