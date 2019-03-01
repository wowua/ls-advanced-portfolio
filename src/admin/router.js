import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import('./components/about.vue'),
    meta: {
      title: "Блок «Обо мне»"
    }
  },
  {
    path: "/works",
    component: () => import('./components/works.vue'),
    meta: {
      title: "Блок «Работы»"
    }
  }
];

const router = new VueRouter({ routes });

export default router;
