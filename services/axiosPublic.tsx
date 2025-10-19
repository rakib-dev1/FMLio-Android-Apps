import axios from "axios";
const axiosPublic = axios.create({
    baseURL:'https://server-maruf-ecom.vercel.app',
});

export default axiosPublic;