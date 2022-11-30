import Vue from 'vue'
import VueRouter from 'vue-router';
import HomePage from '@/components/HomePage'
import Loginpage from '@/components/Loginpage'
import Featurepage from '@/components/Featurepage'
import ContactPage from '@/components/ContactPage'
import Pricepage from '@/components/Pricepage'
import Blogpage from '@/components/Blogpage'
import ScheduleDemo from '@/components/ScheduleDemo'
import Investorspage from '@/components/Investorspage'
import InvestorsDocuments from '@/components/InvestorsDocuments'
import Article1 from '@/components/Article1'
import InvestorsPresentations from '@/components/InvestorsPresentations'
import AboutUs from '@/components/AboutUs'
import OfferPage from '@/components/OfferPage'
import Article2 from '@/components/Article2'
import Article3 from '@/components/Article3'
import Subscription1 from '@/components/Subscription1'


/* eslint-disable */
Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/loginpage',
        name: 'Loginpage',
        component: Loginpage
    },
    {
        path: '/featurepage',
        name: 'Featurepage',
        component: Featurepage
    },
    {
        path: '/contact_us',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/blogpage',
        name: 'Blogpage',
        component: Blogpage
    },
    {
        path: '/pricepage',
        name: 'Pricepage',
        component: Pricepage
    },
    {
        path: '/scheduledemo',
        name: 'ScheduleDemo',
        component: ScheduleDemo,
        beforeEnter(to, from, next) {
            window.location.href = "https://demodesk.com/book/iq-dispatch-team/demo";
        }
    },
    {
        path: '/investorspage',
        name: 'Investorspage',
        component: Investorspage
    },
    {
        path: '/investorsdocuments',
        name: 'InvestorsDocuments',
        component: InvestorsDocuments
    },
    {
        path: '/investorspresentations',
        name: 'InvestorsPresentations',
        component: InvestorsPresentations
    },
    {
        path: '/article1',
        name: 'Article1',
        component: Article1
    },
    {
        path: '/aboutus',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/testdocument',
        name: 'pdfViewer',
        component: AboutUs
    },
    {
        path: '/offer',
        name: 'OfferPage',
        component: OfferPage
    },
    {
      path: '/article2',
      name: 'Article2',
      component: Article2
    },
    {
      path: '/article3',
      name: 'Article3',
      component: Article3
    },
    {
      path: '/subscription',
      name: 'Subscription',
      component: Subscription1
    },
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})
