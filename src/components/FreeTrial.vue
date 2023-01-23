/* eslint-disable */
<template>
  <div class="contact">
    <!-- <main-navbar  :isSelected=5 /> -->
    <div class="contact_header">
      <form ref="form" @submit.prevent="sendEmail">

        <div class="omrs-input-group">
          <label for="" class="label-block">First Name:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="firstname" v-model="firstname" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Last Name:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="lastname" v-model="lastname" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Company:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="company" v-model="company" required placeholder=".">
            <!-- <span class="omrs-input-label company">Company</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">MC#:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="mc" v-model="mc" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Phone:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="phone" v-model="phone" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Email:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="email" v-model="email" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Number of dispatchers/users during trial period:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="usersnumber" v-model="usersnumber" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Number of trucks under dispatch during trial period:
          </label>
          <label class="omrs-input-underlined">
            <input type="text" name="trucksnumber" v-model="trucksnumber" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Desired date for trial start:
          </label>
          <label class="omrs-input-underlined">
            <input type="date" name="starttrialdate" v-model="starttrialdate" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="label-block">Live Load Finder demo requested:
          </label>
        </div>
        <select v-model="demorequested" type="text" name="demorequested" required>
          <option default>Yes</option>
          <option>No</option>
        </select>
        <div class="omrs-input-group">
          <label for="" class="label-block">If yes, date and time:
          </label>
          <label class="omrs-input-underlined">
            <input type="datetime-local" name="demorequesteddate" v-model="demorequesteddate" placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="label-block">Do you have account with DAT?
          </label>
        </div>
        <select v-model="dataccount" type="text" name="dataccount" required>
          <option default>Yes</option>
          <option>No</option>
        </select>
        <div class="omrs-input-group">
          <label class="label-block">Do you have account with Truckstop?
          </label>
        </div>
        <select v-model="truckstopaccount" type="text" name="truckstopaccount" required>
          <option default>Yes</option>
          <option>No</option>
        </select>
        <div class="omrs-input-group">
          <label for="" class="label-block">What is your company trailer type mix?
          </label>
          <label class="omrs-input-underlined">
            <input type="text" name="trailertype" v-model="trailertype" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>

        <p class="text-info">Important: Commencing the free trial requires setting up an API connection between
          IQDispatch and DAT and/or Truckstop loadboards. Setting up connections and your account takes about 3–5
          business days.
        </p>
        <!-- <div class="omrs-input-group">
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
        </div> -->
        <div class="omrs-input-group">
          <input type="submit" class="submit_btn schedule_btn" value="Submit Free Trial Request">
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
        firstname: '',
        lastname: '',
        company: '',
        mc: '',
        phone: '',
        email: '',
        usersnumber: '',
        trucksnumber: '',
        starttrialdate: '',
        demorequested: '',
        demorequesteddate: '',
        dataccount: '',
        truckstopaccount: '',
        trailertype: ''
      }
    },
    components: {
      // MainNavbar,
      // MainFooter,
    },
    mounted() {
      let h1 = document.querySelector('#main-title');
      h1.innerHTML = 'START 1 MONTH FREE TRIAL';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = '';
      let head = document.querySelector('#app-header');
      head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background',);
      head.classList.add('freetrial-background', 'header394');
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden', 'aboutus-background1');

      // document.querySelector('#main-title').textContent = '';
    },
    watch: {
      '$route': 'repaint'
    },
    methods: {
      sendEmail() {
        try {
          // let company = document.querySelector('.company');
          // company.removeAttribute("required");
          // let usdot = document.querySelector('.usdot');
          // company.removeAttribute("required");
          emailjs.sendForm('service_u53kdqj', 'template_9qp0fqv', this.$refs.form, 'oKo85HuhJM3ZA-fHx', {
            firstname: this.firstname,
            lastname: this.lastname,
            company: this.company,
            mc: this.mc,
            phone: this.phone,
            email: this.email,
            usersnumber: this.usersnumber,
            trucksnumber: this.trucksnumber,
            starttrialdate: this.starttrialdate,
            demorequested: this.demorequested,
            demorequesteddate: this.demorequesteddate,
            dataccount: this.dataccount,
            truckstopaccount: this.truckstopaccount,
            trailertype: this.trailertype,
          });
          this.togglePopup();

        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.firstname = ''
        this.lastname = ''
        this.company = ''
        this.mc = ''
        this.phone = ''
        this.email = ''
        this.usersnumber = ''
        this.trucksnumber = ''
        this.starttrialdate = ''
        // this.demorequested = ''
        this.demorequesteddate = ''
        // this.dataccount = ''
        // this.truckstopaccount = ''
        this.trailertype = ''
      },
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.innerHTML = 'START 1 MONTH FREE TRIAL';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = '';
        let head = document.querySelector('#app-header');
        head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background');
        head.classList.add('freetrial-background', 'header394');
        let text = document.querySelector('.home-invisible');
        text.classList.remove('dnone_ohidden');
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
    background-image: #eceef2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    width: 100%;
    height: 210vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .contact_header form {
    width: 50%;
    margin-top: 2%;
    margin-left: 10%;
    text-align: left;
  }

  .contact_header form>div.pc-number {
    font-size: 25px;
    line-height: 40px;
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

  .schedule_btn {
    width: 316px;
  }

  .label-block {
    display: flex;
    margin-bottom: 6px;
  }

  .textarea {
    width: 100%;
    height: 10vh;
  }

  .text-info {
    width: 80%;
    color: #003570;
    font-size: 20px;
    margin-top: 20px;
  }

  label {
    font-size: 18px;
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
      text-align: left;
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
