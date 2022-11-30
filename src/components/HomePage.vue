/* eslint-disable */
<template>
  <div class="hello">
    <!-- <main-navbar :isSelected="1" /> -->
    <div id="scrollView1" class="carousel-wrap" data-aos="fade-up">
      <div class="carousel">
        <VueSlickCarousel v-bind="settings" ref="carousel">
          <div class="col">
            <div class="cols1">
              <div class="c1_title">
                <h1>A virtual trucking company built to benefit owner&#8209;operators through AI&#8209;empowered,
                  profit&#8209;optimized
                  dispatching.</h1>
                <!-- <h1>
                  Our high-tech solution for optimized dispatching.
                </h1> -->
                <!-- <h3>
                  Improve net profits by up to<br />$500-$1000+ per truck per
                  month
                </h3> -->
                <div>
                  <a class="schedule_btn" href="https://demodesk.com/book/iq-dispatch-team/demo"
                    target="_blank">Schedule a Demo</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="cols2">
              <div class="c1_title">
                <h1>Intelligent dispatching avoids bad weather and difficult terrain thus reducing accidents, driving
                  stress, and insurance premiums.</h1>
                <!-- <h1>
                  With our Active Risk Management System integrated into Dispatch Decisions Platform.
                </h1> -->
              </div>
            </div>
          </div>
          <div class="col">
            <div class="cols3">
              <div class="c1_title">
                <h1>IQDispatch introduces low&#8209;cost usage&#8209;based commercial insurance to
                  owner&#8209;operators.
                </h1>
                <h1>
                  Pay only for the days you run.
                </h1>
                <!-- <h1>
                  Never again pay premiums when you do not run for as little as one day.
                </h1> -->
              </div>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
    <!-- <div class="homeheader">
      <div id="myVideo">
        <iframe src="https://www.youtube.com/embed/HzsoG7A5kzk" title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </div> -->
    <!-- <main-footer /> -->
  </div>
</template>
<script>
  /* eslint-disable */
  import MainNavbar from "./MainNavbar";
  import MainFooter from "./MainFooter";
  import VueSlickCarousel from "vue-slick-carousel";
  import "vue-slick-carousel/dist/vue-slick-carousel.css";
  // optional style for arrows & dots
  import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
  import vueStarRate from "vue-js-star-rating";
  /* eslint-disable */
  export default {
    name: "HelloWorld",
    data() {
      return {
        fadeShow1: 1,
        msg: "Welcome to Your Vue.js App",
        cookie_hide: false,
        isPlay: true,
        isActive: 0,
        isShow: 1,
        first_slide: false,
        settings: {
          dots: true,
          edgeFriction: 0.35,
          infinite: false,
          speed: 300,
          autoplay: true,
          autoplaySpeed: 4500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
        },
      };
    },
    components: {
      MainNavbar,
      MainFooter,
      VueSlickCarousel,
      vueStarRate,
    },
    mounted() {
      this.play_fnc();
      document.querySelector('#main-title').textContent = '';
    },
    methods: {
      play_fnc() {
        setTimeout(this.play_status, 500);
      },
      play_status() {
        var video = this.$refs.video;
        if (video.paused) {
          this.isPlay = true;
        } else {
          this.isPlay = false;
        }
        this.play_fnc();
      },
      el_video() {
        var video = this.$refs.video;
        video.pause();
      },
      scroll_view() {
        for (var i = 1; i < 8; i++) {
          let scroll_div =
            scroll_div + document.getElementById("scrollView" + i).clientHeight;
        }
        console.log(scroll_div);
        window.scrollTo(0, scroll_div);
      },
      Play() {
        var video = this.$refs.video;
        video.play();
        this.isPlay = false;
      },
    },
  };
</script>
<style>
  .b-none {
    background: none !important;
  }

  .homeheader {
    /* position: relative; */
    margin: 32px auto;
    max-width: 82%;
  }

  #myVideo {
    position: relative;
    padding-bottom: 56.25%;
    margin: 0 auto;
    height: 0;
    overflow: hidden;
  }

  #myVideo iframe {
    position: absolute;
    /* object-fit: cover; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 0;
    outline-width: 0;
  }

  .triangle-right {
    width: 0;
    height: 0;
    margin-left: 1vw;
    border-top: 3vw solid transparent;
    border-left: 6vw solid #b11720;
    border-bottom: 3vw solid transparent;
    transition: 0.3s;
  }

  .triangle-right:hover {
    border-top: 2vw solid transparent;
    border-left: 4vw solid #b11720;
    border-bottom: 2vw solid transparent;
  }

  @media only screen and (max-width: 1100px) {
    .homeheader {
      /* position: relative; */
      margin: 16px 48px;
      max-width: 100%;
    }

    #myVideo {
      position: relative;
      padding-bottom: 56.25%;
      /* margin: 16px 48px;  */
      height: 0;
      overflow: hidden;
    }

    #myVideo iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-width: 0;
      outline-width: 0;
    }

    .cols3>.c1_title {
      width: 80%;
      /* margin-left: 10%; */
      padding-top: 130px;
      text-align: left;
    }
  }

  .slick-dots li button:before {
    opacity: 0.5;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
  }

  .slick-dots.custom-dot-class>li:first-child {
    display: none;
  }
</style>
<style scoped>
  .carousel-wrap {
    background-color: #fafafa;
  }

  .carousel {
    position: relative;
    width: 100%;
  }

  .carousel-prev-btn,
  .carousel-next-btn {
    position: absolute;
    top: 50%;
    cursor: pointer;
    font-size: 14px;
    transform: translateY(-50%);
  }

  .carousel-prev-btn>img,
  .carousel-next-btn>img {
    width: 30px;
    height: 30px;
  }

  .carousel-prev-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 53, 112, 0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 5%;
    transition: 0.5s;
  }

  .carousel-prev-btn:hover {
    background-color: rgba(0, 53, 112, 1);
  }

  .carousel-next-btn {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 53, 112, 0.5);
    display: flex;
    justify-content: space-around;
    align-items: center;
    right: 5%;
    transition: 0.5s;
  }

  .carousel-card {
    background-color: #166fb0;
    padding: 40px 40px;
  }

  .carousel-title {
    color: #fff;
    text-align: left;
    margin: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: #ffffff;
  }

  .carousel-text {
    color: #fff;
    text-align: left;
    margin: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 28px;
    color: #ffffff;
  }

  .carousel-card {
    text-align: left;
  }

  .carousel img:first-child {
    margin-left: 3px;
  }

  .carousel img+img {
    margin-left: -65%;
    width: 160%;
  }

  .carousel .col-5,
  .carousel .col-7,
  .carousel .col-6 {
    display: flex;
    align-items: center;
  }

  .carousel .carousel-card img {
    width: 40px;
    height: 40px;
    margin-top: 20px;
  }

  .carousel-wrap .slide-link {
    padding: 0 20px;
    cursor: pointer;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
    text-transform: uppercase;
    transition: color 0.3s;
  }

  .carousel-wrap .slide-link:hover {
    color: #1f97ef;
  }

  .carousel-wrap .slide-link.isActive {
    color: #1f97ef;
  }

  .carousel-link {
    display: none;
  }

  .back-blue-2 {
    background-color: #0e4975;
  }

  .back-blue-3 {
    background-color: #4786b5;
  }

  .back-blue-4 {
    background-color: #314a5c;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }

  .col {
    height: 100vh;
  }

  .cols1 {
    background-image: url("../assets/images/home/bg_index_slide_01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .cols2 {
    background-image: url("../assets/images/home/bg_index_slide_02.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cols3 {
    background-image: url("../assets/images/home/bg_index_slide_03.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    /* background-position: center; */
    background-position-y: center;
    background-position-x: 10%;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cols4 {
    background-image: url("../assets/images/home/bg_index_slide_04_full.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: 50%;
    background-position-y: 60%;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .c1_title>h1,
  h3 {
    margin: 0.9em 0;
  }

  .cols1 .c1_title {
    /* width: 750px; */
    width: 800px;
    margin-left: 15%;
  }

  .cols1 .c1_title>h1 {
    margin: 0.5em 0;
  }

  .c1_title {
    width: 730px;
    margin-left: 10%;
    margin-right: 7%;
    text-align: center;
  }

  .c1_title>div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 82px;
  }

  .cols2>.c1_title {
    margin-top: -20%;
    margin-left: 20%;
    margin-right: 20%;
    width: 140%;
    text-align: center;
  }

  .cols3>.c1_title {
    width: 40%;
    margin-right: 48%;
    margin-top: -8%;
    /* padding-top: 130px; */
    text-align: left;
  }


  @media only screen and (max-width: 1100px) and (orientation: portrait) {
    .cols2 {
      background-image: url("../assets/images/home/bg_mobile_2.jpg");
      background-position: bottom;
    }

    .cols3 {
      background-image: url("../assets/images/home/bg_mobile_3.jpg");
      background-position-y: 75%;

    }

    .carousel-card {
      background-color: transparent;
      color: #181818;
      padding: 10px 10px;
    }

    .carousel-title {
      color: #1f97ef;
      text-align: center;
      font-size: 14px;
    }

    .carousel-text {
      color: #181818;
      text-align: center;
      font-size: 12px;
    }

    .carousel {
      position: relative;
      width: 100%;
    }

    .carousel .col-6 {
      justify-content: center;
    }

    .carousel-prev-btn {
      display: none !important;
    }

    .carousel-next-btn {
      display: none !important;
    }

    .carousel .col-6:last-child {
      margin-top: -50px;
    }

    .carousel img+img {
      width: 200%;
      margin-left: 0;
    }

    .carousel .carousel-prev-btn>img,
    .carousel .carousel-next-btn>img {
      display: block;
    }

    .carousel-prev-btn {
      left: 0;
      top: 30%;
    }

    .carousel-next-btn {
      right: 0;
      top: 30%;
    }

    .custom-dot-class li {
      padding: 20px 10px;
    }

    .home_header {
      padding: 5% 5% 15vw 5%;
      padding-top: 130px;
    }

    .card_des strong {
      text-transform: none;
    }

    .icons {
      display: none;
    }

    .card_des {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
    }

    .card_des strong {
      font-size: 35px;
      line-height: 1.3;
    }

    .card_des small {
      font-size: 20px;
      line-height: 1.3;
    }

    .btn {
      padding: 10px 30px;
      font-size: 12px;
      line-height: 14px;
    }

    .card_imgb {
      display: block;
    }

    .card_img {
      display: none;
    }
  }

  @media only screen and (max-width: 1100px) and (orientation: portrait) {
    .cols1 {
      background-position: center;
    }

    .c1_title {
      width: 100%;
      margin: 0;
      text-align: center;
      margin-top: -10%;
    }

    .c1_title>div {
      margin-top: 0;
    }

    .cols1 .c1_title {
      width: 100%;
      margin: 0;
    }

    .cols2>.c1_title {
      margin-left: 10%;
      margin-right: 7%;
    }

    .cols3>.c1_title {
      text-align: center;
      margin-top: -25%;
      margin-left: 10%;
      margin-right: 7%;
    }

    .schedule_btn {
      font-size: 16px;
      margin-top: 6%;
    }

    .col {
      height: auto;
    }

    .cols1,
    .cols2,
    .cols3,
    .cols4 {
      padding: 150px 10% 100px 10%;
      height: 65vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .cols2>.c1_title>h1:first-child {
      margin-top: -40px;
    }

    .cols3>.c1_title>h1:first-child {
      margin-top: -70px;
    }
  }

  @media only screen and (max-width: 767px) {

    .cols1,
    .cols2,
    .cols3,
    .cols4 {
      height: 500px;
    }

    #myVideo {
      margin: 0 auto;
      height: 100%;
      width: 100%;
    }

    .cols3 {
      background-image: url("../assets/images/home/bg_index_slide_03.jpg");
      background-position-x: right;
    }

    .schedule_btn {
      margin-top: 10%;
    }

  }

  @media only screen and (max-width: 428px) {

    .cols1,
    .cols2,
    .cols3,
    .cols4 {
      height: 500px;
    }

    .homeheader {
      /* position: relative; */
      margin: 0 auto;
      max-width: 100%;
    }

    #myVideo {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
    }

    #myVideo iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-width: 0;
      outline-width: 0;
      /* transform: scale(1.04); */
    }

    .cols1 {
      background-position-x: 55%;
    }

    .cols3 {
      background-image: url("../assets/images/home/bg_mobile_3.jpg");
      background-position: center;
    }

    .cols2 {
      background-image: url("../assets/images/home/bg_mobile_2.jpg");
      background-position-x: left;
    }

    .cols3>.c1_title {
      text-align: center;
      padding-top: 0%;
      margin-top: -10%;
      margin-left: 10%;
      margin-right: 7%;
      width: 90%;
    }

    .cols2>.c1_title {
      margin-left: 10%;
      margin-top: -20%;
      width: 90%;
    }
  }

  @media only screen and (max-width: 1100px) and (orientation: landscape) {
    .c1_title {
      margin-left: 12%;
    }

    .cols3>.c1_title {
      width: 80%;
    }

    .cols3 {
      background-position-x: 50%;
      background-position-y: -40%;

    }

    .cols3>.c1_title>h1:first-child {
      margin-top: 8%;
    }

    .cols1 {
      background-position-x: 70%;
    }

    .cols1 .c1_title {
      /* width: 750px; */
      width: 740px;
    }

    .homeheader {
      /* position: relative; */
      margin: 16px 48px;
      max-width: 100%;
    }

    #myVideo {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 0;
      /* margin: 16px 48px;  */
      height: 0;
      overflow: hidden;
    }

    #myVideo iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-width: 0;
      outline-width: 0;
    }

    .schedule_btn {
      margin-top: 5%;
    }
  }

  @media only screen and (max-height: 428px) and (max-width: 1100px) {
    .cols3 {
      background-image: url("../assets/images/home/bg_index_slide_03.jpg");
      ;
    }

    .cols3>.c1_title {
      text-align: left;
      /* padding-top: 0%; */
      /* margin-top: 0; */
      width: 85%;
    }

    .cols3>.c1_title {
      width: 50%;
      margin-top: 0;
      margin-right: 40%;

    }

    .cols3>.c1_title>h1:first-child {
      margin-top: -10%;
    }

    .cols2>.c1_title {
      width: 100%;
      /* margin-right: 10%; */
    }

    .cols2>.c1_title h1 {
      text-align: center;
    }

    .cols1>.c1_title {
      width: 730px;
    }

    .c1_title>h1 {
      font-size: 25px;
    }
  }

  /* @media only screen and (min-width: 1101px) */
</style>
