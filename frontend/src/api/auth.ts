import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API_URL}/register`, data,{
    headers: { "Content-Type": "application/json" },
  });
  return res.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await axios.post(`${API_URL}/login`, data, {
    headers: { "Content-Type": "application/json" },
  });
  return res.data;

};
