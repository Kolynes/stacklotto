import {Vue, Component} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import {namespace} from "vuex-class";

const AccountsModule = namespace("AccountsModule");
const AffiliateModule = namespace("AffiliateModule");

@Component({
    components: {
        VToolbar
    },
    async beforeRouteEnter(to, from, next) {
        next(async vm => {
            if(await (vm as Dashboard).ping())
                (vm as Dashboard).show = true;
            else vm.$router.replace(`/sign-in?e=Not Signed In&t=${to.path}`);
        });
    }
})
export default class Dashboard extends Vue {
    readonly sidebarLinks = [
        {icon: "mdi mdi-home", click: () => this.$router.push("/dashboard/home"), route: "/dashboard/home"},
        {icon: "mdi mdi-wallet", click: () => this.$router.push("/dashboard/wallet"), route: "/dashboard/wallet"},
        {icon: "mdi mdi-credit-card", click: () => this.$router.push("/dashboard/transactions"), route: "/dashboard/transactions"},
        {icon: "mdi mdi-settings", click: () => this.$router.push("/dashboard/settings"), route: "/dashboard/settings"}
    ]

    show: boolean = false;

    @AccountsModule.Action
    ping!: () => Promise<boolean>;

    @AffiliateModule.Action
    loadAffiliate!: () => Promise<IJsonResponse>
    
    isActive(route: string): boolean {
        return this.$route.path.includes(route);
    }

    mounted() {
        this.loadAffiliate();
    }
}
