import {VuexModule, Module, Mutation, Action} from "vuex-module-decorators";
import http from '@/plugins/http';

@Module({namespaced: true})
export default class AffiliateModule extends VuexModule {
    affiliate: IAffiliate | null = null; 

    @Mutation
    setAffiliate(value: IAffiliate | null) {
        this.affiliate = value;
    }

    @Action
    async loadAffiliate(): Promise<IJsonResponse> {
        try {
            var response = await http.getJson("/affiliates/get/");
            if(response.status)
                this.context.commit("setAffiliate", response.data)
            return response;
        } catch(error) {
            console.log(error);
            return {status: false, error: "Failed to reach server"}
        }
    }
}