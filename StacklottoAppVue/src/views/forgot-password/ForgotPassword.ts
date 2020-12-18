import {Vue, Component} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";

@Component({
    components: {
        VToolbar,
        VFooter
    }
})
export default class ForgotPassword extends Vue {
    step: number = 1;

    email: string = "";
    sendingVerificationCode: boolean = false;
    sendVerificationCodeError: string = "";

    code: string = "";
    verifyingCode: boolean = false;
    verifyCodeError: string = "";
    
    newPassword: string = "";
    confirmPassword: string = "";
    resettingPassword: boolean = false;
    resetPasswordError: string = "";


    async sendVerificationCode() {

    }

    async verifyCode(){

    }

    async resetPassword() {

    }
}