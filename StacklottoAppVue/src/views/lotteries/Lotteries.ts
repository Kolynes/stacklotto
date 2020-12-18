import {Vue, Component} from "vue-property-decorator";

import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import VLotteries from "@/components/lotteries/Lotteries.vue";

@Component({
    components: {
        VToolbar,
        VFooter,
        VLotteries,
    }
})
export default class Lotteries extends Vue {

}