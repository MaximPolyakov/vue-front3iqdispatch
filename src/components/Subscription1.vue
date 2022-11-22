/* eslint-disable */
<template>
  <div class="blog">
    <!-- <main-navbar  :isSelected=4 /> -->
    <!-- <main-footer /> -->
    <div class="stripe-wrapper">
      <stripe-pricing-table pricing-table-id="prctbl_1M75EiFR5NOKXB0lfnObBPqI"
        publishable-key="pk_live_51M3PXpFR5NOKXB0lMEscvdzT4rRBR8zIxNkWuiqKMKM63Nrm9EAGXGzYvZ43ph0cLVeBdDKdSurd0MNNtStAk1gF00KN2ipprr">
      </stripe-pricing-table>
    </div>
    <div class="blog-container">

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
    name: "Subscription1",
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
      h1.innerHTML = 'Subscriptions';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = '';
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden', 'blog-background');
      let head = document.querySelector('#app-header');
      head.classList.remove('blog-background1', 'investors-background1');
      head.classList.add('subscription-background', 'header394');
      const insertScript = document.createElement('script');
      insertScript.setAttribute('src', 'https://js.stripe.com/v3/pricing-table.js');
      document.body.appendChild(insertScript);
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.innerHTML = 'Subscriptions';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = '';
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden', 'blog-background');
        let head = document.querySelector('#app-header');
        head.classList.remove('blog-background1', 'investors-background1');
        head.classList.add('subscription-background', 'header394');
        const insertScript = document.createElement('script');
        insertScript.setAttribute('src', 'https://js.stripe.com/v3/pricing-table.js');
        document.body.appendChild(insertScript);
      }
    }
  };
</script>
<style scoped>
  .blog {
    background-color: #ECEEF2;
  }

  .stripe-wrapper {
    margin-top: 40px;
    /* min-width: 600px; */
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
    padding: 10px 96px;
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
