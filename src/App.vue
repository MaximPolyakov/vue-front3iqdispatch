<template>
  <div id="app">
    <div id="app-header">
      <main-navbar class="nav_fixed" />
      <div class="home-invisible dnone_ohidden">
        <div class="container titles">
          <h1 id="main-title">Our news, ideas and latest updates</h1>
          <span id="main-subtitle"></span>
        </div>
      </div>
    </div>
    <router-view :key="$route.fullPath"></router-view>
    <main-footer />
  </div>
</template>

<script>
  import MainNavbar from './components/MainNavbar'
  import MainFooter from './components/MainFooter'
  export default {
    name: 'App',
    components: {
      MainNavbar,
      MainFooter
    },
    mounted() {

    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let head = document.querySelector('#app-header');
        head.classList.remove('blog-background1', 'header394');
        let text = document.querySelector('.home-invisible');
        text.classList.add('dnone_ohidden');
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900');
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900');
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #160C3A;
    background-color: #ECEEF2;
    /* color: #2c3e50; */
    position: relative;
    z-index: 1;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
    height: 100%;
  }

  div {
    position: relative;
  }

  img {
    overflow: hidden;
  }

  /*h1 {
	overflow: hidden;
}*/
  main-navbar {
    display: block;
  }

  .container {
    max-width: 1440px;
    padding: 15px 96px;
    margin: 0 auto;
  }

  .container.titles {
    max-width: 1440px;
    padding: 15px 96px;
    margin: 0;
  }

  .container.titles>#main-title {
    font-size: 40px;
    font-weight: 900;
    text-transform: uppercase;
  }

  .pad-40 {
    padding: 40px 0;
  }

  .blog-background1 {
    background-image: url('assets/images/blog/blog.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 86%;
  }

  .aboutus-background1 {
    background-image: url('assets/images/aboutus/aboutus1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 42%;
  }

  .investors-background1 {
    background-image: url('assets/images/investors/investors1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 79.2%;
  }

  .subscription-background {
    background-image: url('assets/images/subscription/subscription.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 79.2%;
  }

  .nav_fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2000;
  }

  .dnone_ohidden {
    display: none;
    overflow: hidden;
  }

  .header394 {
    height: 240px;
    display: flex;
    align-items: center;
  }

  .home-invisible {
    width: 100%;
  }

  @media(max-width: 1100px) {
    .container.titles {
      max-width: 1440px;
      padding: 48px;
      margin: 0;
    }

    .header394 {
      height: 330px;
      display: flex;
      align-items: center;
    }
  }

  @media(max-width: 577px) {
    .blog-background1 {
      background-image: url('assets/images/blog/blog2222.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    .container.titles {
      max-width: 1440px;
      padding: 15px;
      margin: 0;
    }

    .header394 {
      height: 190px;
      display: flex;
      align-items: center;
    }

    .container.titles>#main-title {
      font-size: 24px;
      width: 75%;
      margin-top: 15%;
    }
  }
</style>
