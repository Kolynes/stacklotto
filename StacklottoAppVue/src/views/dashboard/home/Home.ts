import {Vue, Component} from "vue-property-decorator";
import {namespace} from "vuex-class";
import { datetime } from '@/time';

const AccountsModule = namespace("AccountsModule")
const AffiliateModule = namespace("AffiliateModule")
const TransactionsModule = namespace("TransactionsModule")

@Component
export default class Home extends Vue {
    @AccountsModule.State
    user!: IUser;

    @AffiliateModule.State
    affiliate!: IAffiliate | null;

    @TransactionsModule.State
    transactions!: ITransaction[];

    get fullName(): string {
        return `${this.user.firstName} ${this.user.lastName}`
    }

    get balance(): string {
        return (this.user.balance as number).toFixed(2)
    }

    get referralCount(): number {
        return (this.affiliate as IAffiliate).referrals.length;
    }

    get isAffiliate(): boolean {
        return this.affiliate != null
    }

    get latestTransaction(): ITransaction {
        return this.transactions[0];
    }

    datetime = datetime;
    
    @TransactionsModule.Action
    loadTransactions!: () => Promise<IJsonResponse>

    mounted() {
        this.loadTransactions();
    }
}