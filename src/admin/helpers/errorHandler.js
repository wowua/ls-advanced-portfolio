export const generateStdError = errorObj => {
  throw new Error(errorObj.response.data.message);
};
