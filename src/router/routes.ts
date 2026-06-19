import Home from "@/views/home.vue";
import About from "@/views/about.vue";
import Project from "@/views/project.vue";

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
    // Catch-all 404 must be last.
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/NotFoundView.vue"),
  },
];
