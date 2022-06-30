import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import User from "@/components/com/User.vue";
import Quanxian from "@/components/com/Quanxian.vue";
import Shangpin from "@/components/com/Shangpin.vue";
import Xitong from "@/components/com/Xitong.vue";
import Dingdan from "@/components/com/Dingdan.vue";
import Userinfo from "@/components/com/userinfo/Userinfo.vue";
Vue.use(Router);

const router = new Router({
    routes: [
        { path: "/", redirect: "/login" },
        { path: "/login", component: Login },
        { path: "/home", redirect: "/home/users" },
        {
            path: "/home",
            component: Home,
            children: [{
                    path: "users",
                    component: User,
                },
                { path: "quanxian", component: Quanxian },
                { path: "shangpin", component: Shangpin },
                { path: "xitong", component: Xitong },
                { path: "dingdan", component: Dingdan },
                { path: "userinfo:id", component: Userinfo, props: true },
            ],
        },
    ],
});

router.beforeEach(function(to, from, next) {
    if (
        to.path === "/home" ||
        to.path === "/home/users" ||
        to.path === "/home/dingdan" ||
        to.path === "/home/shangpin" ||
        to.path === "/home/xitong" ||
        to.path === "/home/quanxian"
    ) {
        const token = localStorage.getItem("token");
        if (token) {
            next();
        } else {
            next("/login");
        }
    } else {
        next();
    }
});

export default router;