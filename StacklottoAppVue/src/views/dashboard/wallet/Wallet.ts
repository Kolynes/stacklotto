import {Vue, Component} from "vue-property-decorator";
import {namespace} from "vuex-class";
import http from '@/plugins/http';

const AccountsModule = namespace("AccountsModule");

@Component
export default class Wallet extends Vue {

    @AccountsModule.State
    user!: IUser;

    amount: number | null = null;
    withdrawError: string = "";
    withdrawSuccess: string = "";
    withdrawing: boolean = false

    async withdraw() {
        if(this.amount as number < 0)
            this.withdrawError = "Amount is negative"
        else if(this.amount as number > (this.user.balance as number))
            this.withdrawError = "Insufficient funds"
        else try {
            this.withdrawing = true;
            var response = await http.getJson("/transactions/withdraw/", {
                amount: this.amount as number
            }, "POST");
            this.withdrawing = false;
            if(response.status)
                this.withdrawSuccess = "Successful! Your withdrawal is now pending";
            else this.withdrawError = response.error as string;
        } catch(error) {
            console.error(error);
            this.withdrawing = false;
            this.withdrawError = "Failed to reach server"
        }
    }
}