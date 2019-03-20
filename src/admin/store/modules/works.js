import { wrapIntoFormData } from "@/helpers/formData";
export default {
  namespaced: true,
  state: {
    works: [],
    currentWork: {}
  },
  mutations: {
    SET_WORKS: (state, works) => (state.works = works),
    ADD_WORK: (state, work) => state.works.push(work),
    REMOVE_WORK: (state, removedWorkId) => {
      state.works = state.works.filter(work => work.id !== removedWorkId);
    },
    SET_CURRENT_WORK: (state, updatedWorkId) => {
      state.currentWork = state.works.filter(
        work => work.id === updatedWorkId
      )[0];
    },
    UPDATE_WORK: (state, updatedWork) => {
      
      state.works = state.works.map(work =>
        work.id === updatedWork.id ? updatedWork : work
      );
    }
  },
  actions: {
    async storeWork({ commit }, payload) {
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post("/works", data);
        commit("ADD_WORK", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async fetchWorks({ commit }) {
      try {
        const response = await this.$axios.get(`/works/1`);
        commit("SET_WORKS", response.data);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    },
    async updateWork({ commit }, payload) {
      console.log('payload', payload);
      
      const data = wrapIntoFormData(payload);
      try {
        const response = await this.$axios.post(`/works/${payload.id}`, data);

        commit("UPDATE_WORK", response.data.work);

        return response;
      } catch (error) {
        console.log(error);
        
        throw new Error(error.response.data.message);
      }
    }
  }
};
