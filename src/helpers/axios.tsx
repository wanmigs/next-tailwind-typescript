import getConfig from "next/config";
import axios from "axios";

const {
  publicRuntimeConfig: { API_URL }, // Available both client and server side
} = getConfig();

let axiosIntance = { ...axios };

axiosIntance.defaults.baseURL = API_URL || "http://localhost:3000";

export default axiosIntance;
