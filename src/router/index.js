import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import titleControlle from "../utils/titleControlle";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history'
})
router.afterEach((to,form) => {
  if(to.meta.title) {
    titleControlle.setRouterTitle(to.meta.title)
  }
})
export default router