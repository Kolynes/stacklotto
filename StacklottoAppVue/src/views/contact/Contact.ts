import {Vue, Component} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import http from '@/plugins/http';

@Component({
    components: {
        VToolbar,
        VFooter
    }
})
export default class Contant extends Vue {
    firstName: string = "";
    lastName: string = "";
    phone: string = "";
    email: string = "";
    message: string = "";
    savingContact: boolean = false;
    error: string = "";
    success: string = "";
    
    async saveContact() {
        this.success = "";
        this.error = "";
        try {
            this.savingContact = true;
            var response = await http.getJson("/contact/save/", {
                first_name: this.firstName.trim(),
                last_name: this.lastName.trim(),
                emial: this.email.trim(),
                phone: this.phone.trim(),
                message: this.message.trim()
            }, "POST");
            this.savingContact = false;
            if(response.status) {
                this.phone = "";
                this.success = "Successful, your message will be tended to shortly."
            }
            else this.error = response.error as string;
        } catch(error) {
            console.log(error);
            this.error = "Failed to reach server";
            this.savingContact = false;
        }
    }
}   