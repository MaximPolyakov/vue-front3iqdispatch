/* eslint-disable */
<template>
  <div class="contact">
    <!-- <main-navbar  :isSelected=5 /> -->
    <div class="contact_header">
      <form ref="form" @submit.prevent="sendEmail">
        <div class="pc-number">Sales business hours 9AM-4PM CST Monday-Friday. <br> Contact us directly at <span>(312)
            340-5457</span> or
          complete the form below and a IQDispatch
          representative will be in touch with you shortly.</div>
        <div class="mobile-number">Sales business hours 8AM-5PM CST Monday-Friday Contact us directly at <br> <span>
            (608) 400-6112</span> or
          complete the form below and a IQDispatch
          representative will be in touch with you shortly.</div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="name" v-model="name" required placeholder=".">
            <span class="omrs-input-label">First name and Last name</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="company" v-model="company" placeholder=".">
            <span class="omrs-input-label company">Company</span>
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="omrs-input-underlined">
            <input type="text" name="usdot" v-model="usdot" placeholder=".">
            <span class="omrs-input-label usdot">USDOT or MC</span>
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
          <input type="submit" class="submit_btn schedule_btn" value="Send">
        </div>
        <div class="popup-container popup-inactive">
          <div class="popup">
            <div class="popup-text">✔️Your message had been sent.</div>
            <button class="popup-ok" @click="togglePopup()">Close</button>
          </div>
        </div>
      </form>
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
    name: 'Contactpage',
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
      let h1 = document.querySelector('#main-title');
      h1.innerHTML = 'CONTACTS';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = '';
      let head = document.querySelector('#app-header');
      head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background', 'blog-background1');
      head.classList.add('contacts-background', 'header394');
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden', 'aboutus-background1');
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      sendEmail() {
        try {
          let company = document.querySelector('.company');
          company.removeAttribute("required");
          let usdot = document.querySelector('.usdot');
          company.removeAttribute("required");
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
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.innerHTML = 'CONTACTS';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = '';
        let head = document.querySelector('#app-header');
        head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background', 'blog-background1');
        head.classList.add('contacts-background', 'header394');
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden', 'aboutus-background1');
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
    background-image: #ECEEF2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    width: 100%;
    height: 91vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .contact_header form {
    width: 60%;
    padding-left: 10%;
    margin-top: 3.5%;
    /* margin-left: 10%; */
    text-align: left;
  }

  .contact_header form>div.pc-number {
    width: 80%;
    font-size: 24px;
    line-height: 36px;
  }

  .contact_header form>div.mobile-number {
    display: none;
  }

  .contact_header form>div>span {
    font-weight: bold;
    color: #b11720;
  }


  .popup-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    text-align: center;
    z-index: 999;
  }

  .popup {
    max-width: 500px;
    max-height: 500px;
    background-color: #fff;
    border: 1px solid #121212;
    font-size: 24px;
    padding: 2% 2%;
    text-align: center;
  }

  .popup-ok {
    height: 20%;
    width: 30%;
    font-size: 18px;
    padding: 1% 3%;
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
      height: 100vh;
      padding: 150px 0%;
      flex-direction: column;
      display: flex;
      justify-content: space-around;
    }

    .contact_header form>div {
      text-align: center;

    }

    .contact_header form {
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
      padding-left: 0;
      text-align: left;
    }

    .contact_header form>div.pc-number {
      width: 100%;
    }
  }

  @media only screen and (max-width: 767px) {
    .contact_header {
      height: auto;
      padding: 150px 0%;
      flex-direction: column;
      display: flex;
      justify-content: space-around;
    }

    .contact_header form>div.mobile-number {
      display: block;
      font-size: 22px;
      line-height: 40px;
    }

    .contact_header form>div.pc-number {
      display: none;
    }

    .contact_header form>div>span {
      font-size: 24px;
      font-weight: bold;
      color: #b11720;
    }
  }
</style>
