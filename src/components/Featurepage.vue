/* eslint-disable */
<template>
  <div class="feature">
    <!-- <main-navbar :isSelected = 2 /> -->
    <!-- header html code start -->
    <!-- section1 html code end -->
    <!-- <main-footer /> -->
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

export default {
  name: 'Featurepage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      maxi_clicked: true,
      lite_clicked: false,
      isShow: 0,
      plus_clicked: false,
      isShow: 0
    }
  },
  components: {
    MainNavbar,
    MainFooter,
    VueSlickCarousel },
}
</script>
<style>
</style>