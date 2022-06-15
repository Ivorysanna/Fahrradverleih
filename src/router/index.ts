import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/views/HomeView.vue"),
        },
        {
            path: "/HowItWorks",
            name: "HowItWorks",
            component: () => import("@/views/HowItWorksView.vue"),
        },
        {
            path: "/Bicycles",
            name: "Bicycles",
            component: () => import("@/views/BicyclesView.vue"),
        },
        {
            path: "/RentABike",
            name: "RentABike",
            component: () => import("@/views/RentABikeView.vue"),
        },
        {
            path: "/About",
            name: "About",
            component: () => import("@/views/AboutView.vue"),
        },
    ],
});

export default router;
