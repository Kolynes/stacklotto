import {VuexModule, Module, Mutation, Action} from "vuex-module-decorators";
import http from '@/plugins/http';

@Module({namespaced: true})
export default class Transactions extends VuexModule {
    transactions: ITransaction[] | null = [];

    @Mutation
    setTransactions(value: ITransaction[] | null) {
        this.transactions = value;
    }

    @Action
    async loadTransactions(): Promise<IJsonResponse> {
        try {
            var response = await http.getJson("/transactions/load/");
            if(response.status)
                this.context.commit("setTransactions", response.data);
            return response;
        } catch(error) {
            console.log(error);
            return {status: false, error: "Failed to reach server"}
        }
    }

}