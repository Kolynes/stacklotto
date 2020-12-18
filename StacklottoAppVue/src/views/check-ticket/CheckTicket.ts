import {Vue, Component} from "vue-property-decorator";
import VResultChecker from "@/components/result-checker/ResultChecker.vue";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";

@Component({
    components: {
        VResultChecker,
        VToolbar,
        VFooter
    }
})
export default class CheckTicket extends Vue {

}