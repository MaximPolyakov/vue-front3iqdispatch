/* eslint-disable */
<template>
  <div class="blog">
    <!-- <main-navbar  :isSelected=4 /> -->
    <!-- <main-footer /> -->
    <div class="blog-container">
      <p>
        IQHaulers has been built upon one key founding principle and with one clear goal in mind- to improve the
        professional lives of owner-operator drivers. Having worked as both an owner-operator and a dispatcher our
        Founding team saw first hand the inefficiencies and unethical environment that owner-operators have to face
        daily and how these inefficiencies hit profits, cause lost time and ultimately promote unsafe practices. We
        believe that just because something has been done a certain way for a long time that doesn’t make it right, and
        by leveraging our deep technical and development knowledge that’s exactly what IQHaulers is changing.
      </p>
      <br>
      <p>
        IQHaulers had built a proprietary, AI-enabled Dispatch Analytics Platform with a built-in Active Risk Management
        system. We use data and effective analytic tools to consider the numerous factors that impact load
        profitability. These factors include everything from traffic conditions, tolls, the type of terrain as well as
        the weather.
      </p>
      <br>
      <p>
        We understand that time is a cost just like any other and our Active Risk Management System takes
        everything into account to assess load profitability thereby enabling optimized dispatching.
      </p>
      <br>
      <p>
        Instead of being
        revenue-driven, IQHaulers empowers owner-operators to be profit-driven, to reduce insurance premiums by only
        paying for insurance on days they drive, and to be safer all at the same time through optimized dispatching.
      </p>
      <br>
      <p>
        Easy to adopt, IQHaulers fits seamlessly with an owner-operator's existing work pattern and style regardless of
        their desired working area or trip length. There for you every step of the way, IQHauler dispatchers are
        incentivized to help drivers optimize their time and maximize their profits by always being on hand to provide
        support 24 hours a day, every day.
      </p>
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
    name: "about",
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
      h1.innerHTML = 'About';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = '';
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden', 'blog-background');
      let head = document.querySelector('#app-header');
      head.classList.remove('blog-background1', 'investors-background1');
      head.classList.add('aboutus-background1', 'header394');
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.innerHTML = 'About';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = '';
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden', 'blog-background');
        let head = document.querySelector('#app-header');
        head.classList.remove('blog-background1', 'investors-background1');
        head.classList.add('aboutus-background1', 'header394');

      }
    }
  };
</script>
<style scoped>
  .blog {
    background-color: #ECEEF2;
  }

  .container>h1 {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
  }

  p {
    font-size: 18.5px;
    line-height: 28px;
    text-indent: 2em;
  }

  .blog-container {
    max-width: 1440px;
    padding: 40px 96px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: left;
    background-position-y: 56.6%;
  }

  .card {
    display: inline-block;
    width: 387px;
    height: 510px;
    margin: 13px;
    overflow: hidden;
    background-color: #FFF;
    box-shadow: 0 2px 6px #A7A7A7;
  }

  .card p:not(.grey-75) {
    text-align: left;
    padding: 9px 0;
  }

  .grey-50 {
    color: #6C6C6C;
  }

  .grey-75 {
    padding-top: 44px;
    color: #A9ADAF;
    text-align: left;
  }

  .grey-75 * {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }

  .grey-75>span {
    padding-left: 5px;
  }

  .text-block {
    padding: 7px 18px;
  }

  .text-block p:first-child {
    font-size: 18px;
    font-weight: 600;
  }

  .card>a {
    color: #160C3A;
  }

  @media(max-width: 1448px) {
    .blog-container {
      display: block;
      text-align: center;
    }

    .card {
      width: 310px;
    }
  }

  @media(max-width: 1367px) {
    .grey-75 {
      padding-top: 30px;
    }

    .card {
      width: 320px;
    }
  }

  @media(max-width: 1025px) {
    .blog-container {
      padding: 15px;
    }

    .card {
      display: block;
      margin: 0 auto 36px auto;
      width: 75%;
      height: auto;
    }

    .grey-75 {
      padding-top: 36px;
    }
  }

  @media(max-width: 577px) {
    .blog-container {
      padding: 16px;
    }

    .home-invisible>.container {
      padding: 14px;
    }

    .card {
      display: block;
      margin: 0 0 36px 0;
      width: 100%;
      height: auto;
    }

    .container.titles>#main-title {
      font-size: 24px;
      width: 75%;
      margin-top: 15%;
    }

    .header394 {
      height: 220px;
    }
  }
</style>