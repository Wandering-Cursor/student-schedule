import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: "http://localhost:8000/api",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        timeout: 5000,
    }
)

apiClient.interceptors.request.use(
    (config) => {
        console.debug("Request was made with", config);
        return config;
    }
)


export default apiClient;
