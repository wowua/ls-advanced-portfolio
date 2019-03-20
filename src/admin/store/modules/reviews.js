import { generateStdError } from "@/helpers/errorHandler";
import { wrapIntoFormData } from "@/helpers/formData";

export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS_STATE: (state, reviews) => state.reviews = reviews
  },
  actions: {
    async addReview({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post("/reviews", data);

        console.log("resp", response.data);

        return response;
      } catch (error) {
        generateStdError(error);
      }
    },
    async fetchReviews({commit}) {
      try {
        const response = await this.$axios.get('/reviews/1')
        commit("SET_REVIEWS_STATE", response.data);
        return response;
      } catch (error) {
        generateStdError(error); 
      }
    }
  }
};
