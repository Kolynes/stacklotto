import {Vue, Component} from "vue-property-decorator";
import http from '@/plugins/http';
import { duration } from '@/time';
import { namespace } from "vuex-class";

const LotteryModule = namespace("LotteryModule")

@Component
export default class Lotteries extends Vue {
    lotteries: ILottery[] = [];
    lotteriesLoadError: string = "";
    lotteriesLoading: boolean = false;

    @LotteryModule.Mutation
    setLottery!: (value: ILottery | null) => void

    getImage(lottery: ILottery): string {
        return lottery.name
            .split("")
            .filter(char => char != " ")
            .join("")
            .toLowerCase();
    }

    getDuration(lottery: ILottery): string[] {
        var temp = duration(lottery.drawDate - new Date().getTime());
        return temp.map(digit => digit < 10? `0${digit}` : `${digit}`);
    }

    playLottery(lottery: ILottery) {
        this.setLottery(lottery);
        this.$router.push("/lottery");
    }

    async getLotteries() {
        this.lotteriesLoadError = ""
        try {
            this.lotteriesLoading = true;
            var response = await http.getJson("/lotteries/get/");
            this.lotteriesLoading = false;
            if(response.status)
                this.lotteries = response.data
            else this.lotteriesLoadError = response.error as string;
        } catch(error) {
            console.error(error);
            this.lotteriesLoadError = "Failed to load lotteries";
            this.lotteriesLoading = false;
        }
    }

    mounted() {
        this.getLotteries();
        setInterval(() => this.$forceUpdate(), 1000)
    }

}