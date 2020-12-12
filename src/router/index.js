import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

 

// 重复点击路由，控制台抛错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "built-year",
          component: () => import("../views/BuiltYear.vue"),
        },
        {
          path: "built-usage",
          component: () => import("../views/BuiltUsage.vue"),
        },
        {
          path: "built-height",
          component: () => import("../views/BuiltHeight.vue"),
        },
      ],
    },
    { path: "/login", component: Login },
  ],
});

export default router;
