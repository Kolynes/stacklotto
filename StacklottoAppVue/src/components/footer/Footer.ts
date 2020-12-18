import { Vue, Component } from "vue-property-decorator";
import http from '@/plugins/http';

@Component
export default class Footer extends Vue {
    email: string = "";
    subscribing: boolean = false;
    success: string = "";
    error: string = "";

    async subscribe() {
        try {
            this.subscribing = true;
            var response = await http.getJson("/news/subscribe/", {
                email: this.email.trim()
            }, "POST");
            this.subscribing = false;
            if(response.status)
                this.success = "Subscription Successful";
        } catch {
            this.error = "Failed to reach server"
        }
    }
}