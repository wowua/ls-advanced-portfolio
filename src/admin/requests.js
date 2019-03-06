import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

// const token = localStorage.getItem("token");
// if (token) {
//   axios.defaults.headers["Authorization"] = `Bearer ${token}`;
// }

// axios.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     const originalRequest = error.config;

//     if (error.response.status === 401) {
//       return axios.post("/refreshToken").then(response => {
//         const token = response.data.token;
//         localStorage.setItem("token", token);

//         axios.defaults.headers["Authorization"] = `Bearer ${token}`;
//         originalRequest.headers["Authorization"] = `Bearer ${token}`;

//         return axios(originalRequest);
//       });
//     }
//     return Promise.reject(error);
//   }
// );

export default axios;
