/* eslint-disable */
<template>
  <div class="investors">
    <!-- <main-navbar  :isSelected=4 /> -->
    <!-- <main-footer /> -->
    <div class="container pad-40">
      <!-- <div class="main-image">
        <img src="../assets/images/investors/title-img.jpg" style="width: 100%; ">
      </div> -->
      <div class="block">
        <!-- <div class="col-12">
          <div class="title">
            <img src="../assets/images/investors/group.svg">
            <router-link to="/investorsdocuments" exact><a class="router_link_class"> Founders Intro</a>
            </router-link>
          </div>
          <div class="video-container">
            <div class="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xQfaaFb7A7s"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            </div>
          </div> -->
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p> -->
      </div>

      <div class="col-12">
        <div class="title">
          <img src="../assets/images/investors/group.svg">
          <a class="router_link_class"> Load Finder Demo (5 min)
          </a>
          <!-- <router-link to="/investorsdocuments" exact><a class="router_link_class"> MVP Demo (60 sec)</a>
          </router-link> -->
        </div>
        <div class="video-container">
          <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xK_bVMxiaQQ"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
        </div>
        <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p> -->
      </div>


      <!-- <div class="col-6"></div>
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
          </div> -->

    </div>


    <!-- <div class="block">
        <div class="row">
          <div class="col-6">
            <div class="title">
              <img src="../assets/images/investors/group.svg">
              <router-link to="/investorspresentations" exact><a class="router_link_class"> Presentations</a>
              </router-link>
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


      <div class="block">
        <div class="row">
          <div class="col-6">
            <div class="title">
              <img src="../assets/images/investors/group.svg">
              <router-link to="/investorsdocuments" exact><a class="router_link_class"> Something Else</a></router-link>
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
      </div> -->
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
    name: "Investors",
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
      h1.textContent = 'Demo';
      let span = document.querySelector('#main-subtitle');
      // span.innerHTML = "Our investors' page featuring our documents, presentations<br>and something else.";
      let head = document.querySelector('#app-header');
      head.classList.remove('blog-background1', 'aboutus-background1', 'subscription-background');
      head.classList.add('aboutus-background1', 'header394');
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden');
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.textContent = 'Investors docs';
        let span = document.querySelector('#main-subtitle');
        // span.innerHTML = "Our investors' page featuring our documents, presentations<br>and something else.";
        let head = document.querySelector('#app-header');
        head.classList.remove('blog-background1', 'aboutus-background1', 'subscription-background');
        head.classList.add('investors-background1', 'header394');
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden');
      },
    }
  };
</script>
<style>
  .document a {
    color: #160C3A;
  }

  #main-subtitle {
    /* display: block; */
    margin-top: 24px;
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
    /* margin-top: 40px;   */
    margin-bottom: 12px;
  }

  .title span {
    font-size: 28px;
    line-height: 40px;
  }

  .title img {
    height: 30px;
    /* было 100% */
    line-height: 30px;
  }

  .router_link_class {
    font-size: 21px;
    line-height: 40px;
    font-weight: 600;
    color: #160C3A;
  }

  .router_link_class:hover {
    color: #160C3A;
  }

  .main-image {
    padding: 0 106px;
  }

  .video-container {
    width: 100%;
    min-width: 500px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video {
    position: relative;
    width: 100%;
    padding-top: 56.25%;
  }

  .video iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .require_pass {
    margin-top: 8px;
    font-size: 16px;
  }

  .require_pass>a {
    font-size: 16px;
    color: #160C3A;
  }

  #masschallenge {
    margin-top: 8px;
  }

  @media(max-width: 1100px) {
    .block {
      padding: 0 48px;
    }

    .main-image {
      padding: 40px 48px 0;
    }
  }

  @media(max-width: 577px) {
    .title {
      margin-top: 0;
    }

    .block {
      padding: 16px;
    }

    .main-image {
      display: none;
    }

    .pad-40 {
      padding: 3px 0 32px 0;
    }

    .home-invisible>.container {
      padding: 14px;
    }

    .container>h1 {
      font-size: 24px;
      width: 75%;
      margin-top: 15%;
    }

    .header394 {
      height: 220px;
    }
  }
</style>

<style scoped>
  .pad-40 {
    padding-bottom: 40px;
  }

  .col-12:not(:last-child) {
    margin-bottom: 24px;
  }

  @media(max-width: 1100px) {
    .pad-40 {
      padding-top: 0;
      padding-bottom: 40px;
    }

    @media(max-width: 577px) {
      .pad-40 {
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
</style>
