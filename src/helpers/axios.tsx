import axios from "axios";

let axiosIntance = { ...axios };
axiosIntance.defaults.baseURL = "http://localhost:3000/";

export default axiosIntance;
