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
export default class SignUp extends Vue {
    @Prop({type: String})
    code!: string;

    firstName: string = "";
    lastName: string = "";
    username: string = "";
    email: string = "";
    phone: string = "";
    password: string = "";
    confirmPassword: string = "";
    error: string = "";
    signingUp: boolean = false;

    @AccountsModule.Action
    signUp!: (payload: {firstName: string, lastName: string, username: string, phone: string, email: string, password: string, code: string}) => Promise<IJsonResponse>;

    async callSignUp() {
        if(this.password != this.confirmPassword) {
            this.error = "Passwords do not match";
            return;
        }
        this.signingUp = true;
        var response = await this.signUp({
            firstName: this.firstName, 
            lastName: this.lastName,
            username: this.username, 
            phone: this.phone, 
            email: this.email, 
            password: this.password,
            code: this.code
        });
        this.signingUp = false;
        if(response.status)
            this.$router.push("/dashboard")
        else this.error = response.error as string;
    }
}