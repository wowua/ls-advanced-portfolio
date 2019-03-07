export const setTokenToLocalStorage = token => {
  localStorage.setItem("token", token);
};

export const getTokenFromLocalStorage = token => {
  return localStorage.getItem("token");
};

export const setAuthHttpHeaderToAxios = (axiosInstance, token) => {
  axiosInstance.defaults.headers["Authorization"] = `Bearer ${token}`;
};
