import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/your---cart/us-central1/api", // THe API URL(CLOUD)
});

export default instance;
