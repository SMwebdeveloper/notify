import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// Pages
import Home from "@/pages/Home.vue"
import NotFound from "@/pages/404.vue"
import NotifyPage from "@/pages/NotifyPage.vue"


export default new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/notifyPage',
            name:'notifyPage',
            component:NotifyPage
        },
        {
            path:'*',
            name:'notFound',
            component:NotFound
        }
    ]
})