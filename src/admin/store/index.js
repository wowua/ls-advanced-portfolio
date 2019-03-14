import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from './modules/user'
import skills from './modules/skills'
import tooltips from './modules/tooltips'
import works from './modules/works'

export default new Vuex.Store({
  modules: {
    user, skills, tooltips, works
  }
});
