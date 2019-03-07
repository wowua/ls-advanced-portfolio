import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import axios from "axios";

import {
  setAuthHttpHeaderToAxios,
  getTokenFromLocalStorage
} from "../helpers/token";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: "http://localhost:8000"
});

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  const isPublicRoute = to.matched.some(record => record.meta.public);

  if (isPublicRoute === false) {
    setAuthHttpHeaderToAxios(guard, getTokenFromLocalStorage());
    guard
      .get("/user")
      .then(response => {
        // next();
      })
      .catch(error => {
        // router.replace("/login");
        localStorage.removeItem("token");
      });
  } else {
    // next();
  }

  next();
});
export default router;
