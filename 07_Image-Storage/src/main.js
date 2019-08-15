import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App"
import store from "./store"
import AuthHandler from "./components/AuthHandler"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/oauth2/callback", component: AuthHandler }
    ]
})

new Vue({
    router: router,
    store,
    render: h => h(App)
}).$mount("#app")