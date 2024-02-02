import axios from "axios";

const apiRank = axios.create({
  baseURL: "https://distinct-lingerie-crow.cyclic.app",
  timeout: 10000,
  headers: { "Contente-Type": "application/json" },
});

export default apiRank;
