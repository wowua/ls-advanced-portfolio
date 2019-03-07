export default {
  namespaced: true,
  actions: {
    async loginUser(store, user) {
      try {
        const response = await this.$axios.post('/login', user);
        return response
      } catch (e) {
        throw new Error(e.response.data.message);
      }
           
    }
  }
} 