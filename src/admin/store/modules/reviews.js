import { generateStdError } from "@/helpers/errorHandler";
import { wrapIntoFormData } from "@/helpers/formData";

export default {
  namespaced: true,
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
    }
  }
};
