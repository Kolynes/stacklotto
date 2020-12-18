import {Vue, Component} from "vue-property-decorator";
import {namespace} from "vuex-class";

const AccountsModule = namespace("AccountsModule");

@Component
export default class Settings extends Vue {
    changingName: boolean = false;
    changingPassword: boolean = false;
    editingBankDetails: boolean = false;

    changePasswordSuccess: string = "";
    changePasswordError: string = "";

    changeNameSuccess: string = "";
    changeNameError: string = "";

    editBankDetailsSuccess: string = "";
    editBankDetailsError: string = "";

    firstName: string = "";
    lastName: string = "";

    newPassword: string = "";
    oldPassword: string = "";
    confirmPassword: string = "";

    bankAccountName: string = "";
    bankName: string = "";
    bankAccountNumber: string = "";

    @AccountsModule.State
    user!: IUser;

    @AccountsModule.Action
    changePassword!: (payload: {oldPassword: string, newPassword: string}) => Promise<IJsonResponse>;

    @AccountsModule.Action
    editBankDetails!: (payload: {bankName: string, bankAccountName: string, bankAccountNumber: string}) => Promise<IJsonResponse>;

    @AccountsModule.Action
    changeName!: (payload: {firstName: string, lastName: string}) => Promise<IJsonResponse>;

    async callChangePassword() {
        this.changePasswordError = "";
        this.changePasswordSuccess = "";
        this.changingPassword = true;
        var response = await this.changePassword({oldPassword: this.oldPassword, newPassword: this.newPassword});
        this.changingPassword = false;
        if(response.status)
            this.changePasswordSuccess = "Password Changed";
        else this.changePasswordError = response.error as string;
    }

    async callChangeName() {
        this.changeNameError = "";
        this.changeNameSuccess = "";
        this.changingName = true;
        var response = await this.changeName({firstName: this.firstName, lastName: this.lastName});
        this.changingName = false;
        if(response.status)
            this.changeNameSuccess = "Name Changed";
        else this.changeNameError = response.error as string;
    }

    async callEditBankDetails() {
        this.editBankDetailsError = "";
        this.editBankDetailsSuccess = "";
        this.changingName = true;
        var response = await this.editBankDetails({bankAccountName: this.bankAccountName, bankAccountNumber: this.bankAccountNumber, bankName: this.bankName});
        this.changingName = false;
        if(response.status)
            this.editBankDetailsSuccess = "Bank Details Changed";
        else this.editBankDetailsError = response.error as string;
    }

    mounted() {
        this.firstName = this.user.firstName as string;
        this.lastName = this.user.lastName as string;
        this.bankAccountName = this.user.bankAccountName as string;
        this.bankAccountNumber = this.user.bankAccountNumber as string;
        this.bankName = this.user.bankName as string;
    }
}