import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//GET the COMPONENTS
import SearchMovies from "@/components/SearchMovies";
import FavoriteMovies from "@/components/FavoriteMovies";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "SearchMovies",
      component: SearchMovies
    },
    {
      path: "/favorites",
      name: "FavoriteMovies",
      component: FavoriteMovies
    }
  ]
});
