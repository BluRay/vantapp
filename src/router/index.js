import { createRouter,createWebHashHistory} from "vue-router";

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/home",
    name: "home",
    component: () => import('@/view/Home.vue')
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/view/Login.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})