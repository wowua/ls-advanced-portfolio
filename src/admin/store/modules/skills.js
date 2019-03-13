export default {
  namespaced: true,
  state: {
    skills: [],
    categories: []
  },
  mutations: {
    SET_SKILLS_CATEGORIES: (state, skills) => (state.categories = skills),
    SET_SKILLS_STATE: (state, skills) => (state.skills = skills)
  },
  actions: {
    async storeSkillsGroup(store, categoryName) {
      try {
        const response = await this.$axios.post("/categories", categoryName);

        return response;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get("/categories");
        commit("SET_SKILLS_CATEGORIES", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await this.$axios.get("/skills/1");
        commit('SET_SKILLS_STATE', response.data)
        return response;
      } catch (error) {
        throw new Error(error.response.data.error);
      }
    }
  }
};
