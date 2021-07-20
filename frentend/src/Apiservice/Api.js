import axios from "axios";
const apiBaseUrl = "http://localhost:3001";

export const loginApi = (data) => {
    return axios.post(`${apiBaseUrl}/user/login`, data);
};

export const signupApi = (data) => {
    return axios.post(`${apiBaseUrl}/user/`, data);
};

export const getChartApi = () => {
    return axios.get(`${apiBaseUrl}/chart/`);
};