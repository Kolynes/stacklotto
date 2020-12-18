import Vuex from "vuex";
import Vue from 'vue';

import AccountsModule from "./AccountsModule";
import TransactionsModule from "./TransactionsModule";
import AffiliateModule from "./AffiliateModule";
import LotteryModule from "./LotteryModule";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { 
        AccountsModule,
        TransactionsModule,
        AffiliateModule,
        LotteryModule
    }
});