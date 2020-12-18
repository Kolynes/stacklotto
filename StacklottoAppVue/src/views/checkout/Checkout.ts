import {Vue, Component} from "vue-property-decorator";
import {namespace} from "vuex-class";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import http from '@/plugins/http';

const LotteryModule = namespace("LotteryModule");
const AccountsModule = namespace("AccountsModule");

@Component({
    components: {
        VToolbar,
        VFooter
    }
})
export default class Checkout extends Vue {    
    @AccountsModule.State
    user!: IUser;
    
    @LotteryModule.State
    tickets!: number[][];

    @LotteryModule.State
    selectedType!: {text: string, value: string};

    @LotteryModule.State
    lottery!: ILottery;

    @LotteryModule.Action
    confirmPlay!: () => Promise<IJsonResponse>;

    playSuccess: string = "";
    playError: string = "";
    confirming: boolean = false;

    get image(): string {
        return this.lottery.name
            .split("")
            .filter(char => char != " ")
            .join("")
            .toLowerCase();
    }

    async callConfirmPlay() {
        this.playError = ""
        this.confirming = true;
        var response = await this.confirmPlay();
        this.confirming = false;
        if(response.status)
            (this.$refs["modal"] as any).show();
        else this.playError = response.error as string
    }
}