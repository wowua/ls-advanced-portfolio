import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import axios from "axios";
import store from "@/store";
import requests from "@/requests";

import {
  setAuthHttpHeaderToAxios,
  getToken,
  removeToken
} from "../helpers/token";

Vue.use(VueRouter);

const baseURL = requests.defaults.baseURL;

const guard = axios.create({
  baseURL
});

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);
  const isUserLogged = store.getters["user/userIsLogged"];

  if (isPublicRoute === false && isUserLogged === false) {
    setAuthHttpHeaderToAxios(guard, getToken());
    guard
      .get("/user")
      .then(response => {
        next();
        store.commit("user/SET_USER", response.data.user);
      })
      .catch(error => {
        router.replace("/login");
        removeToken();
      });
  } else {
    next();
  }
});
export default router;
