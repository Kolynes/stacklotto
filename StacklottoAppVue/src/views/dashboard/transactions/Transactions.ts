import {Vue, Component} from "vue-property-decorator";
import {datetime} from "@/time";
import {namespace} from "vuex-class";

const TransactionsModule = namespace("TransactionsModule");

@Component
export default class Transactions extends Vue {
    readonly transactionTypes = [
        {text: "All", value: ""},
        {text: "Wallet Funded", value: "Wallet Funded"},
        {text: "Buy Ticket", value: "Buy Ticket"},
        {text: "Withdrawal", value: "Withdrawal"},
    ];

    selectedType: {text?: string, value?: string} = {text: "All", value: ""};
    loadingTransactions: boolean = false;
    loadTransactionsError: string = "";

    @TransactionsModule.State
    transactions!: ITransaction[];

    datetime = datetime;

    @TransactionsModule.Action
    loadTransactions!: () => Promise<IJsonResponse>; 

    get filteredTransactions() {
        return this.transactions.filter((transaction: ITransaction) => transaction.type.includes(this.selectedType.value as string))
    }

    async callLoadTransactions() {
        try {
            this.loadingTransactions = true;
            var response = await this.loadTransactions();
            this.loadingTransactions = false;
            if(!response.status)
                this.loadTransactionsError = response.error as string;
        } catch(error) {
            console.error(error);
            this.loadingTransactions = false;
            this.loadTransactionsError = "Failed to reach server";
        }
    }

    mounted() {
        this.callLoadTransactions();
    }
}