/* eslint-disable */
<template>
  <div class="contact">
    <!-- <main-navbar  :isSelected=5 /> -->
    <div class="contact_header">
      <div class="header-background">
      </div>
      <div class="video-container">
        <div class="video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yPXNs8l5WWA" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
      </div>
      <form ref="form" @submit.prevent="sendEmail">
        <div class="pc-number">Contact us at <span>(224) 228-4508</span> or complete the form below to learn more
          about our
          services and
          Special Offer.</div>
        <div class="mobile-number">Contact us at <br> <span>(224) 228-4508</span> <br> or complete the form below to
          learn more
          about our
          services and
          Special Offer.</div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="name" v-model="name" required placeholder=".">
            <span class="omrs-input-label">First name and Last name</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="company" v-model="company" placeholder=".">
            <span class="omrs-input-label not-required">Company</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="usdot" v-model="usdot" placeholder=".">
            <span class="omrs-input-label not-required">USDOT or MC</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="phone" v-model="phone" required placeholder=".">
            <span class="omrs-input-label">Phone</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="email" name="email" v-model="email" required placeholder=".">
            <span class="omrs-input-label">Email</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <input type="submit" class="submit_btn" value="Send">
        </div>

      </form>
    </div>
    <div class="popup-container popup-inactive">
      <div class="popup">
        <div class="popup-text">✔️Your message had been sent.</div>
        <button class="popup-ok" @click="togglePopup()">Close</button>
      </div>
    </div>
    <!-- <main-footer /> -->
  </div>
</template>
<script>
  /* eslint-disable */
  // import MainNavbar from './MainNavbar'
  // import MainFooter from './MainFooter'
  import emailjs from 'emailjs-com';
  export default {
    name: 'OfferPage',
    data() {
      return {
        name: '',
        company: '',
        usdot: '',
        phone: '',
        email: ''
      }
    },
    components: {
      // MainNavbar,
      // MainFooter,
    },
    mounted() {

    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      repaint() {
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden');
        let h1 = document.querySelector('#main-title');
        h1.textContent = 'Investors docs';
        let span = document.querySelector('#main-subtitle');
        // span.innerHTML = "Our investors' page featuring our documents, presentations<br>and something else.";
        let head = document.querySelector('#app-header');
        head.classList.remove('blog-background1', 'aboutus-background1');
        head.classList.add('investors-background1', 'header394');
      },
      sendEmail() {
        try {
          emailjs.sendForm('service_ohze1k6', 'template_7mjreo7', this.$refs.form, 'kzje1mOzOaxKTx4la', {
            name: this.name,
            company: this.company,
            usdot: this.usdot,
            phone: this.phone,
            email: this.email
          });
          this.togglePopup();

        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.name = ''
        this.company = ''
        this.usdot = ''
        this.phone = ''
        this.email = ''
      },
      togglePopup() {
        let popup = document.querySelector('.popup-container');
        popup.classList.toggle('popup-inactive');
      }
    }
  }
</script>
<style scoped>
  * {
    transition: 0.3s;
  }

  .contact_header {
    background-image: url("../assets/images/contact/bg_contact_slide_01_full.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .contact_header form {
    width: 30%;
    margin-left: 5%;
    margin-right: 1%;
    text-align: left;
    order: 1;
  }

  .contact_header form>div.pc-number {
    font-size: 28px;
    line-height: 40px;
    width: 80%;
    text-align: center;
  }

  .contact_header form>div.mobile-number {
    display: none;
  }

  .contact_header form>div>span {
    font-weight: bold;
    color: #b11720;
  }

  .video-container {
    width: 60%;
    min-width: 500px;
    /* margin: 0 auto; */
    margin-top: 7%;
    margin-bottom: 5%;
    margin-right: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 2;
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

  .popup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    overflow: hidden;
    overflow-y: auto;
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 30px 0;
    z-index: 999;
  }

  .popup {
    max-width: 500px;
    max-height: 500px;
    background-color: #dce1e7;
    opacity: 0.95;
    border: 1px solid #121212;
    font-size: 24px;
    padding: 2% 2%;
    text-align: center;
  }

  .popup-ok {
    background-color: #fff;
    height: 20%;
    width: 30%;
    font-size: 18px;
    padding: 1% 3%;
    border: 1px solid #121212;
    margin-top: 7%;
  }

  .popup-container.popup-inactive {
    display: none;
  }

  /* .not-required {
    font-size: 18px;
    margin-top: 10px;
  } */

  @media only screen and (max-width: 1100px) {
    .contact_header {
      height: 100%;
      padding: 150px 0%;
      flex-direction: column;
      display: flex;
      justify-content: space-around;
    }

    .contact_header form>div {
      text-align: center;
    }


    .contact_header form>div>span {
      font-weight: bold;
      color: #b11720;
    }

    .contact_header form {
      width: 90%;
      margin-left: 10%;
      margin-right: 10%;
      text-align: left;
      order: 2;
    }

    .contact_header form>div {
      font-size: 28px;
      line-height: 40px;
      width: 100%;
      text-align: center;
    }

    .video-container {
      width: 90%;
      min-width: 500px;
      /* margin: 0 auto; */
      margin-top: 0%;
      margin-bottom: 5%;
      margin-right: 5%;
      margin-left: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      order: 1;
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

    .popup-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      /* top: 50%;
      left: 50%; */

      width: 100%;
      height: 100%;
      text-align: center;
      z-index: 999;
    }

    .popup {
      background-color: #fff;
      opacity: 0.95;
      border: 1px solid #121212;
      font-size: 24px;
      padding: 2% 2%;
      text-align: center;
    }

    .popup-ok {
      background-color: #efefef;
      height: 70px;
      width: 50%;
      font-size: 24px;
      padding: 1% 3%;
      border: 1px solid #121212;
      margin-top: 7%;
      margin-bottom: 7%;
    }

    .popup-text {
      margin-top: 7%;
      font-size: 32px;
    }

    .popup-container.popup-inactive {
      display: none;
    }
  }

  @media only screen and (max-width: 767px) {
    .contact_header {
      height: auto;
      padding: 25% 0%;
      padding-bottom: 10%;
      flex-direction: column;
      display: flex;
      justify-content: space-around;
    }


    .contact_header form>div.mobile-number {
      display: block;
      font-size: 22px;
      line-height: 34px;
      width: 100%;
      text-align: center;
    }

    .contact_header form>div.pc-number {
      display: none;
    }

    .contact_header form>div>span {
      font-size: 24px;
      font-weight: bold;
      color: #b11720;
    }

    .contact_header form {
      width: 90%;
      margin-left: 10%;
      margin-right: 10%;
      text-align: left;
      order: 2;
    }

    .contact_header form>div {
      font-size: 24px;
      line-height: 36px;
      width: 100%;
      text-align: center;
    }

    .video-container {
      width: 90%;
      min-width: 300px;
      /* margin: 0 auto; */
      margin-top: 0%;
      margin-bottom: 5%;
      margin-right: 5%;
      margin-left: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      order: 1;
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

    .popup-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      left: 0;
      overflow: hidden;
      overflow-y: auto;
      /* width: 80%; */
      /* height: 100%;  */
      text-align: center;
      padding: 30px 0;
      z-index: 999;
    }

    .popup {
      opacity: 0.95;
      background-color: #fff;
      opacity: 0.95;
      border: 1px solid #121212;
      font-size: 22px;
      padding: 2% 2%;
      text-align: center;
      width: 90%;
    }

    .popup-ok {

      background-color: #efefef;
      height: 60px;
      width: 40%;
      font-size: 24px;
      padding: 1% 3%;
      border: 1px solid #121212;
      margin-top: 7%;
      margin-bottom: 7%;
    }

    .popup-text {
      margin-top: 7%;
      font-size: 32px;
    }

    .popup-container.popup-inactive {
      display: none;
    }
  }
</style>
