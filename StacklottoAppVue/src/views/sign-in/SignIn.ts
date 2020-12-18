import {Vue, Component, Prop} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import {namespace} from "vuex-class";

const AccountsModule = namespace("AccountsModule");

@Component({
    components: {
        VToolbar,
        VFooter
    }
})
export default class SignIn extends Vue {
    @Prop({type: String, default: ""})
    u!: string;

    @Prop({type: String, default: ""})
    e!: string;

    @Prop({type: String, default: "/dashboard"})
    t!: string;

    username: string = "";
    password: string = "";
    error: string = "";
    signingIn: boolean = false;

    @AccountsModule.Action
    signIn!: (payload: {username: string, password: string}) => Promise<IJsonResponse>;

    async callSignIn() {
        this.signingIn = true;
        var response = await this.signIn({
            username: this.username,
            password: this.password
        });
        this.signingIn = false;
        if(response.status)
            this.$router.push(this.t);
        else this.error = response.error as string;
    }

    mounted() {
        this.username = this.u;
        this.error = this.e;
    }
}