/* eslint-disable */
<template>
  <div class="investors">
    <!-- <main-navbar  :isSelected=4 /> -->
    <!-- <main-footer /> -->
    <div class="container pad-40">
      <!-- <div class="main-image">
        <img src="../assets/images/investors/title-img.jpg" style="width: 100%; ">
        <br>
        <br>
      </div> -->
      <div class="block">
        <div class="row">
          <div class="col-6">
            <div class="title">
              <span>All Presentations</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
          </div>
          <div class="col-6"></div>
          <div class="documents-1-column col-6">
            <div class="document">
              <a href="../assets/documents/test.pdf" download><img src="../assets/images/investors/download.svg"
                  alt=""></a>
              <a href=""><img src="../assets/images/investors/pdf.svg" alt=""></a>
              <a href="../assets/documents/test.pdf" target="_blank">Sales schemes and calculations for the 4th
                quarter.pdf</a>
            </div>
          </div>
          <div class="documents-2-column col-6">
            <div class="document">
              <a href="../assets/documents/test.pdf" download><img src="../assets/images/investors/download.svg"
                  alt=""></a>
              <a href=""><img src="../assets/images/investors/pdf.svg" alt=""></a>
              <a href="../assets/documents/test.pdf" target="_blank">Sales schemes and calculations for the 4th
                quarter.pdf</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable */
  // import MainNavbar from './MainNavbar'
  // import MainFooter from './MainFooter'
  // import VueSlickCarousel from 'vue-slick-carousel'
  // import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  // import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  /* eslint-disable */
  export default {
    name: "Blog",
    data() {
      return {
        msg: "Welcome to Your Vue.js App",
        cookie_hide: false,
        isActive: 0
      };
    },
    components: {
      // MainNavbar,
      // MainFooter,
      // VueSlickCarousel 
    },
    mounted() {
      let h1 = document.querySelector('#main-title');
      h1.textContent = 'Investors text';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = "Our investors' page featuring our documents, presentations<br>and something else.";
      let head = document.querySelector('#app-header');
      head.classList.remove('blog-background1', 'aboutus-background1');
      head.classList.add('investors-background1', 'header394');
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden');
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.textContent = 'Investors text';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = "Our investors' page featuring our documents, presentations<br>and something else.";
        let head = document.querySelector('#app-header');
        head.classList.remove('blog-background1', 'aboutus-background1');
        head.classList.add('investors-background1', 'header394');
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden');
      }
    }
  };
</script>
<style>
  .document a {
    color: #160C3A;
  }

  .block {
    padding: 0 106px;
  }

  .col-6 p {
    padding: 20px 0;
  }

  .title {
    height: 40px;
    display: inline-block;
  }

  .title span {
    font-size: 28px;
    line-height: 40px;
    font-weight: 600;
  }

  .title img {
    height: 75%;
    line-height: 40px;
  }

  @media(max-width: 1100px) {
    .block {
      padding: 15px 48px;
    }

    .pad-40 {
      padding-top: 0;
    }
  }

  @media(max-width: 577px) {
    .block {
      padding: 16px;
    }

    .main-image {
      display: none;
    }

    .pad-40 {
      padding: 3px 0 32px 0;
    }

    .container>h1 {
      font-size: 24px;
      width: 75%;
      margin-top: 15%;
    }

    .header394 {
      height: 220px;
    }

    .home-invisible>.container {
      padding: 14px;
    }
  }
</style>

<style scoped>
  .pad-40 {
    padding-bottom: 40px;
  }

  .title {
    margin-top: 0;
  }

  @media(max-width: 1100px) {
    .pad-40 {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media(max-width: 577px) {
    .pad-40 {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
</style>