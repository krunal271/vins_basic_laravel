<template>
    <div class="template-container">
        <header class="site-header">
            <div class="container">
                <a href="#" class="brand-main">
                    <img src="/assets/img/logo-deskk.png" id="logo-desk" alt="NABH Logo" class="hidden-sm-down">
                    <img src="/assets/img/logo-mobile.png" id="logo-mobile" alt="NABH Logo" class="hidden-md-up">
                </a>

                <ul class="action-list">
                  <li>
                   <router-link to="/login">Admin Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </header> 
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <site-footer></site-footer>
    </div>
</template>

<script type="text/babel">
import SiteFooter from './partials/SiteFooter.vue'

export default {
        components : {
             SiteFooter
        }
    }
</script>