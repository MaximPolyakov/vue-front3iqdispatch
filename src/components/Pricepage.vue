/* eslint-disable */
<template>
  <div class="price">
    <!-- <main-navbar :isSelected = 3 />
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
export default {
  name: 'Price',
  data () {
    return {
      fadeShow: 0
    }
  },
  components: {
    MainNavbar,
    MainFooter,
    VueSlickCarousel
  },
  methods: {
  }
}
</script>

<style scoped>
</style>

