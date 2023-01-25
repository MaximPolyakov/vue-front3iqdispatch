/* eslint-disable */
<template>
  <div class="contact">
    <!-- <main-navbar  :isSelected=5 /> -->
    <div class="contact_header">
      <form ref="form" @submit.prevent="sendEmail">

        <div class="omrs-input-group">
          <label for="" class="label-block">Name:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="name" v-model="name" required placeholder=".">
            <!-- <span class="omrs-input-label">Name</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label for="" class="label-block">Company:</label>
          <label class="omrs-input-underlined">
            <input type="text" name="company" v-model="company" placeholder=".">
            <!-- <span class="omrs-input-label company">Company</span> -->
          </label>
        </div>
        <div class="omrs-input-group">
          <label class="label-block">
            Issue description:
            <!-- <span class="omrs-input-label usdot">Issue description</span> -->
          </label>
          <textarea class="textarea" type="text" name="issue" v-model="issue" required placeholder="."></textarea>
        </div>
        <label class="label-block urgency"> Urgency level:</label>
        <select v-model="urgency" type="text" name="urgency" required>
          <option>Low</option>
          <option>Medium</option>
          <option>Urgent</option>
          <option>Critical</option>
        </select>
        <div class="omrs-input-group">
          <label class="label-block">Attach screenshots or files:</label>
          <div class="attach-wrapper">
            <input type="file" name="my_file" multiple>
            <input type="submit" value="Attach" class="attach-button">
          </div>
        </div>

        <p class="text-info">Alternatively, you can send a support request to support@iqdispatch.us. Our technical team
          will address
          your
          issue as soon as possible, including after hours and on Saturdays, excluding Sundays and holidays.
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
          <input type="submit" class="submit_btn schedule_btn" value="Submit Tech Support Ticket">
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
        issue: '',
        urgency: '',
        my_file: ''
      }
    },
    components: {
      // MainNavbar,
      // MainFooter,
    },
    mounted() {
      let h1 = document.querySelector('#main-title');
      h1.innerHTML = 'TECH SUPPORT';
      let span = document.querySelector('#main-subtitle');
      span.innerHTML = '';
      let head = document.querySelector('#app-header');
      head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background', 'blog-background1', 'freetrial-background');
      head.classList.add('contacts-background', 'header394');
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
          let company = document.querySelector('.company');
          company.removeAttribute("required");
          let usdot = document.querySelector('.usdot');
          company.removeAttribute("required");
          emailjs.sendForm('service_691neco', 'template_flyxfqo', this.$refs.form, 'kzje1mOzOaxKTx4la', {
            name: this.name,
            company: this.company,
            issue: this.issue,
            urgency: this.urgency,
            my_file: this.my_file
          });
          this.togglePopup();

        } catch (error) {
          console.log({ error });
        }
        // Reset form field
        this.name = ''
        this.company = ''
        this.issue = ''
        this.urgency = ''
        this.my_file = ''
      },
      repaint() {
        let h1 = document.querySelector('#main-title');
        h1.innerHTML = 'TECH SUPPORT';
        let span = document.querySelector('#main-subtitle');
        span.innerHTML = '';
        let head = document.querySelector('#app-header');
        head.classList.remove('aboutus-background1', 'investors-background1', 'subscription-background', 'blog-background1', 'freetrial-background');
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
    background-image: #eceef2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: left;
    width: 100%;
    height: 98vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .contact_header form {
    width: 40%;
    margin-top: 1%;
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
    font-size: 18px;
  }

  .attach-wrapper {
    display: flex;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    border: #121212 1px solid;
    margin-bottom: 20px;
    /* position: relative; */
  }

  .attach-wrapper>input {
    display: flex;
  }

  .attach-wrapper>.attach-button {
    display: flex;
    height: 50%;
  }

  .urgency {
    margin-top: 18px;
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
