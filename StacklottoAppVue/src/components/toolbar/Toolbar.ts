import {Vue, Component} from "vue-property-decorator";
import {namespace} from "vuex-class";

const AccountsModule = namespace("AccountsModule");

@Component
export default class Toolbar extends Vue {
    signingIn: boolean = false;
    username: string = "";
    password: string = "";

    @AccountsModule.State
    user!: IUser;

    @AccountsModule.Action
    signIn!: (payload: {username: string, password: string}) => Promise<IJsonResponse>;

    @AccountsModule.Action
    signOut!: () => Promise<IJsonResponse>;

    async callSignIn() {
        this.signingIn = true;
        var response = await this.signIn({
            username: this.username,
            password: this.password
        });
        this.signingIn = false;
        if(response.status)
            this.$router.push("/dashboard");
        else {
            this.$router.push(`/sign-in?u=${this.username}&e=${escape(response.error as string)}`)
            this.username = "";
            this.password = "";
        }
    }

    async callSignOut() {
        this.signingIn = true;
        await this.signOut();
        this.signingIn = false;
        this.$router.push("/")
    }
}