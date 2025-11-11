import axios from "axios";
const useAxiosPublic = axios.create({
    baseURL:'https://fmlio-server.onrender.com',
});

export default useAxiosPublic;