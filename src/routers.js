import Home from "./components/Home";
import Login from "./components/Login";
import Add from "./components/Add";
import Update from "./components/Update";
import { createRouter,createWebHistory} from "vue-router";

const routes = [

    {
        name:"Home",
        component: Home,
        path:"/home",
    },

    {
        name:"Login",
        component:Login,
        path:"/",
    },
    {
        name:"Add",
        component:Add,
        path:"/add",
    },

    {
        name:"Update",
        component:Update,
        path:"/update/:id",
    }


];

const router  = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;