import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Project from "@/views/Project.vue";
import NotFoundView from "@/views/NotFoundView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/projects",
    name: "projects",
    component: Project,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFoundView,
  },
];