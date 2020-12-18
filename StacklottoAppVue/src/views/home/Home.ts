import { Vue, Component } from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import Lotteries from "@/components/lotteries/Lotteries.vue";
import ResultChecker from "@/components/result-checker/ResultChecker.vue";

@Component({
    components: {
        VToolbar,
        VFooter,
        Lotteries,
        ResultChecker
    }
})
export default class Home extends Vue {
    readonly lottoFields = [
        {key: "winningNumbers", thClass: "thColor"},
        {key: "lottery", thClass: "thColor"},
        {key: "type", thClass: "thColor"},
        {key: "winners", thClass: "thColor"},
        {key: "amount", thClass: "thColor"},
        {key: "total", thClass: "thColor"},
        {key: "drawDate", thClass: "thColor"},
    ];

    lottoItems = [
        {winningNumbers: [1,2,3,4,5,6,7], lottery: "649", type: "Nil", winners: "", amount: "", total: "", drawDate: ""}
    ]

}