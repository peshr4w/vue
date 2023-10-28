import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/counter";
const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: () =>
                import ("../views/Home.vue"),
            meta: {
                middleware: 'auth'
            }
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import ("../views/Login.vue"),
            meta: {
                middleware: "guest",
                title: "Login",
            },
        },
        {
            path: "/profile",
            name: "profile",
            component: () =>
                import ("../views/Profile.vue"),
            meta: {
                middleware: "guest",
                title: "profile",
            },
        },
        {
            path: "/signup",
            name: "signup",
            component: () =>
                import ("../views/Signup.vue"),
            meta: {
                middleware: "guest",
                title: "Signup",
            },
        },
    ],

});


router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    // authStore.auth()
    console.log(authStore.authenticated)
    if (to.meta.middleware == 'guest') {
        if (authStore.authenticated) {
            next({ name: 'home' })
        }
        next()
    } else {
        if (authStore.authenticated) {
            next()
        } else {
            next({ name: 'login' })
        }
    }
})

export default router;