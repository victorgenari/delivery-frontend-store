import axios from "axios";

const api = axios.create({
  baseURL: "https://delivery-repo-heroku.herokuapp.com"
});

export default api;