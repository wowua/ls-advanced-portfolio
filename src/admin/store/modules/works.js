export default {
  namespaced: true,
  actions: {
    async storeWork({ commit }, payload) {
      const data = wrapIntoFormData(payload);

      try {
        const response = await this.$axios.post("/works", data);

        return response;
      } catch (error) {
        // throw new Error(error.response.data.message);
      }
    }
  }
};

function wrapIntoFormData(plainObject) {
  const formData = new FormData();

  Object.keys(plainObject).forEach(key => {
    formData.append(key, plainObject[key]);
  });

  return formData;
}
