import apiClient from "./client";

function getCSRFToken() {
    return apiClient.get("/csrf/").then((response) => {
        return response.data;
    });
}

export { getCSRFToken };