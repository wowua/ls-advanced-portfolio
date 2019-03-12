export default {
  namespaced: true,
  state: {
    skills: []
  },
  actions: {
    async storeSkillsGroup(store, categoryName) {
      try {
        const response = await this.$axios.post('/categories', categoryName)

        return response
      } catch (error) {
        throw new Error(error.response.data);
      }
    }
  }
}