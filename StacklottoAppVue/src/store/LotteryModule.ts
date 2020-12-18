import {VuexModule, Module, Mutation, Action} from "vuex-module-decorators";
import http from '@/plugins/http';

@Module({namespaced: true})
export default class LotteryModule extends VuexModule {
    lottery: ILottery | null = null;
    tickets: number[][] = [];
    selectedType: {value?: string, text?: string} | null = null;
    phone: string = "";
    name: string = "";

    @Mutation
    setTickets(payload: {value: number[][], type: {value?: string, text?: string} | null, name: string, phone: string}) {
        this.tickets = payload.value;
        this.selectedType = payload.type;
        this.name = payload.name;
        this.phone = payload.phone;
    }

    @Mutation
    setLottery(value: ILottery | null) {
        this.lottery = value;
    }

    @Action
    async confirmPlay(): Promise<IJsonResponse> {
        try {
            var response = await http.getJson("/transactions/buy/", {
                tickets: JSON.stringify(this.tickets),
                type: this.selectedType? this.selectedType.value : null,
                lottery: this.lottery?.id,
                phone: this.phone,
                name: this.name
            }, "POST");
            // if(response.status) {
            //     this.context.commit("setTickets", {value: [], type: null});
            //     this.context.commit("setLottery", null);
            // }
            return response;
        } catch(error) {
            console.error(error)
            return {status: false, error: "Failed to reach server"}
        }
    }
}