/* eslint-disable */
<template>
  <div class="article">
    <!-- <main-navbar  :isSelected=4 /> -->
    <!-- <main-footer /> -->
    <div class="article-container">
      <p class="publishing-date">August 22, 2021</p>
      <h2>Truck Dispatching Services Not Working for the Over-the-road Driver<span class="dot-title">.</span></h2>
      <p class="subtitle">A fat wallet is the only motivator<span class="dot-subtitle">.</span></p>
      <p>In the over-the-road trucking business, drivers rely on a truck dispatch service to keep them hauling loads that keep them earning. However, a new insight has uncovered that dispatch services are motivated by their compensation structures and quickly moving from one owner-operators needs to the next. This results in drivers taking loads they would usually pass on, spending more time away from home, and earning less because the dispatcher is not giving them the time they deserve.</p>
    
      <div class="article-title-image">
        <img src="../assets/images/blog/article1/article1-2.jpg" alt="">
      </div>
      <p>This is the way business has been conducted in the trucking industry for years. In the end, dispatchers feel drivers are paid too much, and drivers know they are leaving money on the table. How does this happen?
      </p>
      <p>
        Dispatchers are overworked. They are responsible for managing the loads for five to sometimes more than ten trucks at one time. Their days consist of communicating with drivers, monitoring several different online load boards, negotiating better rates with brokers, calling shippers to verify appointments, resolving the daily issues, researching the current marketing conditions, and the list can go on and on. And dispatchers do this simultaneously. 
      </p>
      <p>
        While working in this high-stress environment, they are also in a commission-based compensation model, where they are paid a flat fee per load booked, a percentage of the gross revenue of the load, and given an incentive for the quality of their work. At no point is the owner-operated considered in their compensation model, leaving the dispatch service in control of the driver’s wallet.
      </p>
      <p>
        A truck dispatch service focused on gross revenue seeks to have as many trucks on the road as possible. The problem that arises is spending a lot of time looking for the best load for their needs; they have little interest in the overall profitability of the load.
      </p>
      <p>
        A load offered to the owner-operator that has high gross does not always equal high profits. The owner-operator is responsible for the costs of fuel, tolls, and equipment wear. As a result, a $3,000 load gross is excellent for the truck dispatch service but may only make the owner-operator $2,000 in profit after tolls, extra fuels costs for driving in the mountains, and maintenance. Sometimes a driver has to take a multi-day load and stay away from home longer to make up for profits that are lost.
      </p>
      <div class="article-video-container">
        <div class="article-video">
          <iframe width="826" height="466" src="https://www.youtube.com/embed/rifDJFLIXAM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <h3>
        How can this process, which has been accepted for years, be changed? 
      </h3>
      <div class="list">
        <ul>
          <li>It starts with the dispatch service. Freeing up the dispatcher to focus on more profitable loads for the owner-operator will ensure a better relationship between the driver and the truck dispatch service.</li>
          <li>Consider profitability more than gross. Examining the overall rate per mile after tolls and being transparent with the driver will eliminate unpleasant surprises after the trip is completed.</li>
          <li>Better route planning. Driving through mountains and cities with traffic results in more fuel consumption and wear and tear on the truck. While this is sometimes unavoidable, if the dispatcher considered these variables, the loads would also have higher profits for the owner-operator.</li>
          <li>Spending less time searching for the best loads. Knowing when the most profitable loads are available and connecting with the broker in a single click will reduce time and ensure the driver has the maximum profit. The dispatch service has the truck on the road quickly.</li>
          <li>Having a tool that enables the dispatch service to operate a more driver-centric business and less focused on their overall ability to make money.</li>
        </ul>
      </div>
      <p>
        There is now a solution that addresses these concerns and is flipping the script on how business has always been done. Driver profits are the primary concern with software tools that measure overall load profitability, market conditions, route planning that considers external factors like weather, terrain, tolls, and more, and a sophisticated system that monitors several load boards simultaneously that alerts the dispatch service when a specific load matching criteria that matters to the owner-operator is available.
      </p>
      <p>
        IQHaulers knows these challenges first-hand is setting out to disrupt the status quo by putting the interests of the owner-operators first, enabling them to make more profits, and loading them with loads that are not just high gross for the dispatch service. The IQHaulers proprietary software system gives a deeper dive into the loads available and helps dispatchers make decisions based on various factors.
      </p>
      <p>
        Switching to IQHaulers will allow drivers to drive less and increase their profits by 10-20%. Making the change to IQHaulers is easy and doesn’t require the owner-operator to adjust their preferred areas or distances they are driving today. Drivers will also have live support and a dedicated dispatcher who only handles five trucks.
      </p>
      <p>
        It’s time to turn the trucking industry on its head and focus on the needs of the owner-operator. IQHaulers is designed by truckers for truckers and is opening the road to more profits.
      </p>
      <p class="last-paragraph">
        To learn more about IQHaulers and see our propriety software in action, click here to speak to one of our professionals and set up your demo time and question and answer session.
      </p>
      <a class="schedule_btn last-item-of-article" href="https://demodesk.com/book/iq-dispatch-team/demo" target="_blank" >Schedule a Demo</a>
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
    h1.innerHTML = 'News, ideas and latest <br> updates';
    let span = document.querySelector('#main-subtitle');
    span.innerHTML = '';
    let head = document.querySelector('#app-header');
    head.classList.add('blog-background1', 'header394');
    let text = document.querySelector('.home-invisible');
    text.classList.remove('dnone_ohidden');
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
      head.classList.add('blog-background1', 'header394');
      let text = document.querySelector('.home-invisible');
      text.classList.remove('dnone_ohidden');
    }
  }
};
</script>
<style>
.article {
  background-color: #ECEEF2;
}
.container > h1 {
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
}
.article-title-image {
  text-align: center;
  margin: 0 auto;
}
.article-title-image > img{
  max-width: 100%;
  max-height: 100%;
  padding: 40px 0 0 0;
}
.article-container {
  max-width: 1440px;
  padding: 15px 307px 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
}
.publishing-date {
  font-size: 16px;
  color: #273238;
  opacity: 40%;
  padding-top: 78px;
}
.article-container > h2 {
  color: #243238;
  font-size: 44px;
  font-weight: 700;
  padding: 40px 0 0 0;
  text-align: left !important;
}
.dot-title {
  color: #004DA3;
}
.article-container > .subtitle {
  color: #004DA3;
  font-size: 28px;
  font-weight: 700;
  padding: 20px 0 10px 0;
}
.dot-subtitle {
  color: #243238;
}
.article-container > p {
  font-size: 18px;
  color: #273238;
  padding: 37px 0 0 0;
}
.article-container > .last-paragraph {
  padding-bottom: 50px;
}
.article-container > img {
  padding: 40px 96px;
}
.article-container > h3 {
  font-size: 28px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  color: #004DA3;
  padding: 64px 30px 33px;
}
.list {
  padding: 0 30px;
}
.list > ul {
  font-size: 18px;
  list-style: none;
}
.list > ul > li::before {
  content: "•"; 
  color: #004DA3;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}
.list > ul > li {
  padding-left: 10px;
  padding-bottom: 16px;
}
.article-video-container{
  width: 100%;
  margin: 0 auto;
}
.article-video {
  position: relative;
  padding-bottom: 56.25%; 
  margin: 0 auto;
  height: 0;
  overflow: hidden;
}
.article-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline-width: 0;
  /* transform: scale(1.04); */
  /* /* } */
}

.schedule_btn {
  margin: 0px auto 50px;
}
@media(max-width: 1448px){
.article-container {
  display: block;
  text-align: justify;
}}

.article-video-container{
  margin-top: 53px;
}
.article-video {
  position: relative;
  padding-bottom: 56.25%; 
  padding-top: 0;
  height: 0;
  overflow: hidden;
  }
.article-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline-width: 0;
  /* transform: scale(1.04); */
  /* /* } */
}
@media(max-width: 1025px){
.article-container > .publishing-date {
  padding-top: 48px;
}
.article-container {
  padding: 48px;
  padding-top: 0;
}
.article-title-image > img{
  padding: 37px 0 0 0;
}
.article-video {
  position: relative;
  padding-bottom: 56.25%; 
  padding-top: 0;
  height: 0;
  overflow: hidden;
  margin-top: 53px;
  }
.article-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-width: 0;
  outline-width: 0;
  /* transform: scale(1.04); */
  /* /* } */
}
.schedule_btn {
  margin: 0px auto;
}
}
@media(max-width: 577px){
.article-container {
  padding: 15px 15px 30px;
}
.article-container > .publishing-date {
  padding-top: 18px;
}
.container > h1 {
  font-size: 24px;
  width: 75%;
  margin-top: 15%;
}
.article-container > h2 {
  color: #243238;
  font-size: 26px;
  font-weight: 700;
  padding: 30px 0 0 0;
  text-align: left !important;
}
.article-container > .subtitle {
  color: #004DA3;
  font-size: 20px;
  font-weight: 700;
  padding: 14px 0 10px 0;
}
.article-container > p {
  font-size: 18px;
  color: #273238;
  padding: 20px 0 0 0;
}
.article-title-image > img{
  max-width: 100%;
  max-height: 100%;
  padding: 15px 0 0 0;
}
.article-video-container{
  margin-top: 0;
}
.article-video {
  margin-top: 32px;
  position: relative;
  padding-top: 0; 
  height: 0;
  overflow: hidden;
}
.article-video iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; 
  border-width: 0;
  outline-width: 0; 
}
.article-container > h3 {
  font-size: 22px;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;
  color: #004DA3;
  padding: 34px 30px 22px;
}
.list {
  padding: 0 14px;
}
.article-container > .last-paragraph {
  padding-bottom: 30px;
}
.schedule_btn {
  margin: 0 auto;
}
}
</style>
