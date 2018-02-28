import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthService from './services/auth'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

//Layouts
import LayoutHorizontal from './views/layouts/LayoutHorizontal.vue'
import LayoutLogin from './views/layouts/LayoutLogin.vue'
import LayoutFront from './views/layouts/LayoutFront.vue'

//Login : Auth
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

// Error : Not Found page
import NotFoundPage from './views/errors/404.vue'

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

/*
 |--------------------------------------------------------------------------
 | Vins Pages
 |--------------------------------------------------------------------------|
 */


import Welcome from './views/admin/vins/Welcome.vue'

Vue.use(VueRouter)

const routes = [


    /*
     |--------------------------------------------------------------------------
     | EuroSport Route File
     |--------------------------------------------------------------------------|
     */
     /*
     |--------------------------------------------------------------------------
     | Frontend Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/', component: LayoutFront,
        children: [
            {
                path: '/',
                component: Welcome,
                name: 'home'
            },
            // {
            //     path: '/schedule_results/:tournamentslug',
            //     component: FrontSchedule,
            //     name: 'front_schedule'
            // },

        ]
    },

   /* {
        path: '/', component: LayoutHorizontal,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                component: Welcome,
                name: 'welcome'
            },
        ]
    },*/

    // Admin Backend Routes For Tournaments
    {
        path: '/admin', component: LayoutHorizontal,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/',
                component: Welcome,
                name: 'welcome'
            }
        ]
    },



     /*
     |--------------------------------------------------------------------------
     | Auth & Registration Routes
     |--------------------------------------------------------------------------|
    */

    {
        path: '/', component: LayoutLogin,
        children: [
            {
                path: 'login/:status*',
                component: Login,
                name: 'login'
            },
            {
                path: 'register',
                component: Register,
                name: 'register'
            },
        ]
    },

    // DEFAULT ROUTE
    {   path: '*', component : NotFoundPage }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {

    // If the next route is requires user to be Logged IN
    if (to.matched.some(m => m.meta.requiresAuth)){

        return AuthService.check().then(authenticated => {
            if(!authenticated){
                return next({ path : '/login'})
            }

            return next()
        })
    }

    return next()
});

export default router