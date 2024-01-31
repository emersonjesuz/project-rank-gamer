import axios from "axios";

const apiRank = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
  headers: { "Contente-Type": "application/json" },
});

export default apiRank;
