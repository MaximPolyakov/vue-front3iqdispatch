/* eslint-disable */
<template>
  <div class="scheduledemo">
    <!-- <main-navbar  :isSelected=4 />
    <main-footer /> -->
  </div>
</template>
<script>
/* eslint-disable */
import MainNavbar from './MainNavbar'
import MainFooter from './MainFooter'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
/* eslint-disable */
export default {
  name: "SheduleDemo",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      cookie_hide: false,
      isActive: 0
    };
  },
  components: {
    MainNavbar,
    MainFooter,
    VueSlickCarousel },
  mounted() {
  },
  methods: {
    
  }
};
</script>
<style scoped>
</style>
