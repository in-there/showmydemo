import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("./views/Home.vue")
    },
    {
        path:"/slider",
        name:"Slider",
        component:()=>import("./views/Slider.vue")
    },
    {
        path:"/drop",
        name:"Drop",
        component:()=>import("./views/Drop.vue")
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;