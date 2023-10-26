import axios from "axios";

const instance = axios.create({
	baseURL: "http://localhost:4800/api/",
	withCredentials: true,
});

export default instance;
