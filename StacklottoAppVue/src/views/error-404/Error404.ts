import {Vue, Component} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";

@Component({
    components: {
        VToolbar,
        VFooter
    }
})
export default class Error404 extends Vue {

}