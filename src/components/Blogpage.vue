/* eslint-disable */
<template>
  <div class="blog">
    <!-- <main-navbar  :isSelected=4 /> -->
    <!-- <main-footer /> -->
    <div class="blog-container">
      <!-- <div class="test" style="background-color: red; height: 500px;">
        <img src="../assets/images/blog/calendar.svg" style="height: 42px; vertical-align: middle;">
        <span style="font-size: 42px; vertical-align: middle;">August 22, 2021</span>
      </div> -->
      <!-- <div class="card"> -->
      <!-- <router-link to="/article3" exact> -->
      <!-- <img src="../assets/images/blog/article3/article3.jpg" alt="" style="display: block; max-width: 100%"> -->
      <!-- <div class="text-block"> -->
      <!-- <p>Стратегии адаптации овнеров к низким -->
      <!-- рейтам в кризисном 2022 году</p> -->
      <!-- <p class="grey-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit non deserunt.
            </p> -->
      <!-- <p class="grey-50">2022 год для овнеров – время контроля расходов: посчитать, -->
      <!-- сколько гросса съедает толл, какие мили лучше брать, ведь много $ -->
      <!-- уходит на ремонт и техобслуживание траков, дизель -->
      <!-- <br> -->
      <!-- ... -->
      <!-- <br> -->
      <!-- </p> -->
      <!-- <p class="grey-75"> -->
      <!-- <img src="../assets/images/blog/calendar.svg" style="vertical-align: middle;"><span -->
      <!-- style="vertical-align: middle;">August 3, 2022</span> -->
      <!-- <span>&nbsp;&nbsp;&nbsp;</span> -->
      <!-- <img src="../assets/images/blog/clock.svg" style="vertical-align: middle;"><span -->
      <!-- style="vertical-align: middle;">4 min read</span> -->
      <!-- </p> -->
      <!-- </div> -->
      <!-- </router-link> -->
      <!-- </div> -->
      <!-- <div class="card"> -->
      <!-- <router-link to="/article2" exact> -->
      <!-- <img src="../assets/images/blog/article2/article2.jpg" alt="" style="display: block; max-width: 100%"> -->
      <!-- <div class="text-block"> -->
      <!-- <p>Почему диспетчеры не -->
      <!-- учитывают интересы овнеров?</p> -->
      <!-- <p class="grey-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit non deserunt.
            </p> -->
      <!-- <p class="grey-50">Как любому опытному овнер-оператору, находящемуся годами на дорогах и работающему со -->
      <!-- многими компаниями, вам скорее всего знаком диалог с диспетчером, давшим длинный груз со -->
      <!-- слабым рейтом в выходные дни... -->
      <!-- </p> -->
      <!-- <p class="grey-75"> -->
      <!-- <img src="../assets/images/blog/calendar.svg" style="vertical-align: middle;"><span -->
      <!-- style="vertical-align: middle;">July 28, 2022</span> -->
      <!-- <span>&nbsp;&nbsp;&nbsp;</span> -->
      <!-- <img src="../assets/images/blog/clock.svg" style="vertical-align: middle;"><span -->
      <!-- style="vertical-align: middle;">3 min read</span> -->
      <!-- </p> -->
      <!-- </div> -->
      <!-- </router-link> -->
      <div class="card">
        <router-link to="/article1" exact>
          <img src="../assets/images/blog/article1/article1.jpg" alt="" style="display: block; max-width: 100%">
          <div class="text-block">
            <p>Truck dispatching services not working for the OTR driver</p>
            <!-- <p class="grey-50">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit non deserunt.
              </p> -->
            <p class="grey-50">In the over-the-road trucking business, drivers rely on a truck dispatch service to keep
              them hauling loads that keep them earning. However, a new insight has uncovered that dispatch services are
              motivated by their compensation structures...
            </p>
            <p class="grey-75">
              <img src="../assets/images/blog/calendar.svg" style="vertical-align: middle;"><span
                style="vertical-align: middle;">September 25, 2021</span>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <img src="../assets/images/blog/clock.svg" style="vertical-align: middle;"><span
                style="vertical-align: middle;">4 min read</span>
            </p>
          </div>
        </router-link>
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
      h1.innerHTML = 'News, ideas and latest updates';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = '';
      let head = document.querySelector('#app-header');
      head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background');
      head.classList.add('blog-background1', 'header394');
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden', 'aboutus-background1');
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.innerHTML = 'News, ideas and latest <br> updates';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = '';
        let head = document.querySelector('#app-header');
        head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background');
        head.classList.add('blog-background1', 'header394');
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden');
      }
    }
  };
</script>
<style>
  .blog {
    background-color: #ECEEF2;
  }

  .container>h1 {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .blog-container {
    max-width: 1440px;
    padding: 15px 96px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /* Когда будет больше 1 карточки - вернуть на space-between */
    flex-wrap: wrap;
    text-align: left;
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
