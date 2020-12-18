import {Vue, Component} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import FaqCard from "@/components/faq-card/FaqCard.vue";
import http from '@/plugins/http';

interface IClickableFaqGroup extends IFaqGroup {
    active: boolean;
}

@Component({
    components: {
        VToolbar,
        VFooter,
        FaqCard
    }
})
export default class Faq extends Vue {
    faqGroups: IClickableFaqGroup[] = [];
    faqs: IFaq[] = [];

    async loadFaqs() {
        if(this.faqGroups.length == 0)
            return;
        var response = await http.getJson("/faq/faqs/", {
            g: this.faqGroups.filter(faqGroup => faqGroup.active == true)[0]?.title 
        });
        if(response.status)
            this.faqs = response.data;
    }

    async loadFaqGroups() {
        var response = await http.getJson("/faq/groups/",);
        if(response.status) {
            this.faqGroups = response.data;
            if(this.faqGroups.length > 0)
                this.faqGroups[0].active = true
        }
    }

    async mounted() {
        await this.loadFaqGroups();
        await this.loadFaqs();
    }

}