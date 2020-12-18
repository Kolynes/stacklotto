import {Vue, Component, Prop} from "vue-property-decorator";
import VToolbar from "@/components/toolbar/Toolbar.vue";
import VFooter from "@/components/footer/Footer.vue";
import { namespace } from "vuex-class";

interface Game {
    info: string;
    numberOfKeys: number;
    initialKey: number;
    selection: number;
    types: {value: string; text: string}[] | null
}

const LotteryModule = namespace("LotteryModule")
const AccountsModule = namespace("AccountsModule")

@Component({
    components: {
        VToolbar,
        VFooter
    },
    async beforeRouteEnter(to, from, next) {
        next(async vm => {
            if(await (vm as Lottery).ping())
                (vm as Lottery).show = true;
            else (vm as Lottery).$router.replace(`/sign-in?e=Not Signed In&t=${to.path}`);
        });
    }
})
export default class Lottery extends Vue {
    @LotteryModule.State
    lottery!: ILottery;

    @LotteryModule.Mutation
    setTickets!: (payload: {value: number[][], type: {value?: string, text?: string}  | null, name: string, phone: string}) => void;

    @AccountsModule.State
    user!: IUser;

    @AccountsModule.Action
    ping!: () => Promise<boolean>;

    selectedType: {value?: string, text?: string} | null = null;
    selectedNumbers: number[] = [];
    tickets: number[][] = [];
    selectedNumberIndex: number = 0;
    numberOfQuickPlayTickets: number | null = null;
    show: boolean = false;
    phone: string = "";
    name: string = "";
    
    readonly games: Map<String, Game> = new Map();

    constructor() {
        super();
        this.games.set("Stacklotto 649", {
            info: "Select 6 numbers from 1 - 49 or choose quick pick", 
            numberOfKeys: 49, 
            initialKey: 1, 
            selection: 6,
            types: null,
        });
        this.games.set("Stacklotto 425", { 
            info: "Select 4 numbers from 1 - 25 or choose quick pick", 
            numberOfKeys: 25, 
            initialKey: 1, 
            selection: 4,
            types: null,
        });
        this.games.set("Lucky 5", {
            info: "Select 5 numbers from 1 - 42 or choose quick pick", 
            numberOfKeys: 42, 
            initialKey: 1, 
            selection: 5,
            types: null,
        });
        this.games.set("Match 4", {
            info: "Select 4 numbers from 0-9 or choose quick pick", 
            numberOfKeys: 10, 
            initialKey: 0, 
            selection: 4,
            types: [
                {value: "EO", text: "Exact Order"},
                {value: "AO", text: "Any Order"},
                {value: "XO", text: "Exact Order / Any Order"},
                {value: "2F", text: "2 Front Number Play"},
                {value: "2B", text: "2 Back Number Play"},
                {value: "2M", text: "2 Middle Number Play"},
            ],
        });
        this.games.set("Match 3", {
            info: "Select 3 numbers from 0 - 9 or choose quick pick", 
            numberOfKeys: 10,  
            initialKey: 0, 
            selection: 3,
            types: [
                {value: "EO", text: "Exact Order"},
                {value: "AO", text: "Any Order"},
                {value: "XO", text: "Exact Order / Any Order"},
                {value: "2F", text: "2 Front Number Play"},
                {value: "2B", text: "2 Back Number Play"},
            ],
        });
        this.games.set("Match 2", { 
            info: "Select 2 numbers from 0 - 9 or choose quick pick", 
            numberOfKeys: 10, 
            initialKey: 0, 
            selection: 2,
            types: [
                {value: "EO", text: "Exact Order"},
                {value: "AO", text: "Any Order"},
                {value: "XO", text: "Exact Order / Any Order"},
                {value: "F", text: "Front Number Play"},
                {value: "B", text: "Back Number Play"},
            ],
        });
    }

    get game(): Game {
        return this.games.get(this.lottery.name) as Game;
    } 

    get image(): string {
        return this.lottery.name
            .split("")
            .filter(char => char != " ")
            .join("")
            .toLowerCase();
    }

    isSelected(digit: number, index: number = -1): boolean {
        if(index == -1)
            return this.selectedNumbers.indexOf(digit) != -1;
        else return this.selectedNumbers[index] == digit;
    }

    get isFullTicket(): boolean {
        return this.selectedNumbers.every(element => element != -1)
    }

    get totalCost(): number {
        return this.lottery.cost * this.tickets.length;
    }

    get isAgent(): boolean {
        return (this.user as IAgent).status == "Confirmed"
    }

    selectNumber(digit: number, index: number = -1) {
        if(this.isSelected(digit, index)) {
            if(index == -1) {
                this.selectedNumbers = this.selectedNumbers.filter(element => element != digit);
                this.selectedNumbers.push(-1)
                this.selectedNumberIndex--;
            }
        }
        else {
            var temp = [...this.selectedNumbers];
            if(index == -1) {
                if(this.isFullTicket)
                    return
                temp[this.selectedNumberIndex] = digit;
                this.selectedNumberIndex++;
            }
            else temp[index] = digit;
            this.selectedNumbers = temp;
        }
    }

    addTicket() {
        this.tickets.push(this.selectedNumbers);
        this.selectedNumbers = [];
        this.selectedNumberIndex = 0;
        for(var i = 0; i < this.game.selection; i++) 
            this.selectedNumbers.push(-1);
    }

    removeTicket(index: number) {
        this.tickets = this.tickets.filter((element, i) => i != index);
    }

    randomizeTickets() {
        if(this.numberOfQuickPlayTickets as number > 0) {
            this.tickets = [];
            for(var i = 0; i < (this.numberOfQuickPlayTickets as number); i++) {
                var selectedNumbers: number[] = [];
                for(var x = 0; x < this.game.selection; x++) {
                    var randomNumber = Math.round(Math.random() * (this.game.numberOfKeys - this.game.initialKey));
                    if(this.lottery.name.startsWith("Match"))
                        while(selectedNumbers.indexOf(randomNumber) != -1)
                            randomNumber = Math.round(Math.random() * (this.game.numberOfKeys - this.game.initialKey));
                    selectedNumbers.push(randomNumber);
                }
                this.tickets.push(selectedNumbers);
            }
        }
    }

    play() {
        if(this.phone.length > 0 && this.name.length > 0) {
            this.setTickets({value: this.tickets, type: this.selectedType, phone: this.phone, name: this.name});
            this.$router.push("/checkout");
        }
    }

    mounted() {
        if(this.lottery == null)
            this.$router.replace("/lotteries")
        for(var i = 0; i < this.game.selection; i++) 
            this.selectedNumbers.push(-1);
        if(!this.isAgent) {
            this.phone = this.user.phone as string;
            this.name = `${this.user.firstName} ${this.user.lastName}`
        }
    } 
}