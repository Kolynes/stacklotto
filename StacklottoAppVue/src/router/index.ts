import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from "@/views/home/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {path: "/", component: Home, props: route => route.query},
  {path: "/lotteries", component: () => import("@/views/lotteries/Lotteries.vue"), props: route => route.query},
  {path: "/check-ticket", component: () => import("@/views/check-ticket/CheckTicket.vue"), props: route => route.query},
  {path: "/results", component: () => import("@/views/lottery-results/LotteryResults.vue"), props: route => route.query},
  {path: "/register", component: () => import("@/views/sign-up/SignUp.vue"), props: route => route.query},
  {path: "/sign-in", component: () => import("@/views/sign-in/SignIn.vue"), props: route => route.query},
  {path: "/faq", component: () => import("@/views/faq/Faq.vue"), props: route => route.query},
  {path: "/contact", component: () => import("@/views/contact/Contact.vue"), props: route => route.query},
  {path: "/lottery", component: () => import("@/views/lottery/Lottery.vue"), props: route => route.query},
  {path: "/checkout", component: () => import("@/views/checkout/Checkout.vue"), props: route => route.query},
  {path: "/forgot", component: () => import("@/views/forgot-password/ForgotPassword.vue"), props: route => route.query},
  {path: "/dashboard", redirect: "/dashboard/home", component: () => import("@/views/dashboard/Dashboard.vue"), props: route => route.query, children: [
    {path: "/dashboard/home", component: () => import("@/views/dashboard/home/Home.vue"), props: route => route.query},
    {path: "/dashboard/wallet", component: () => import("@/views/dashboard/wallet/Wallet.vue"), props: route => route.query},
    {path: "/dashboard/transactions", component: () => import("@/views/dashboard/transactions/Transactions.vue"), props: route => route.query},
    {path: "/dashboard/settings", component: () => import("@/views/dashboard/settings/Settings.vue"), props: route => route.query},
  ]},
  {path: "*", component: () => import("@/views/error-404/Error404.vue"), props: route => route.query},
]


const router = new VueRouter({
  mode: 'history',
  base: "/",
  routes
})

export default router
