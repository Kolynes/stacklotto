import {Vue, Component, Prop} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import VResultChecker from "@/components/result-checker/ResultChecker.vue";

@Component({
    components: {
        VToolbar,
        VFooter,
        VResultChecker
    }
})
export default class LotteryResults extends Vue {
    @Prop({type: String, default: "draws"})
    l!: string;

    readonly resultFields = [
        {key: "kind", thClass: "thColor"},
        {key: "winners", thClass: "thColor"},
        {key: "amount", thClass: "thColor"},
    ];

    resultItems = [
        {kind: "hello", winners: "649", amount: "23"}
    ]

    readonly drawFields = [
        {key: "drawDates", thClass: "thColor"},
        {key: "winners", thClass: "thColor"},
        {key: "selection", thClass: "thColor"},
        {key: "details", thClass: "thColor"},
    ];

    drawItems = [
        {drawDates: "hello", winners: "649", selection: [1,2,3], details: null}
    ]
} 