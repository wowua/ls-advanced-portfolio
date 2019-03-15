export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORKS: (state, works) => state.works = works 
  },
  actions: {
    async storeWork({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post("/works", data);

        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async fetchWorks({commit}) {
      try {
        const response = await this.$axios.get(`/works/1`);
        commit('SET_WORKS', response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message); 
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
