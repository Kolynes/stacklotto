import http from "@/plugins/http";
import {VuexModule, Module, Action, Mutation} from "vuex-module-decorators";

@Module({namespaced: true})
export default class Auth extends VuexModule {
    user: IUser | null = null;

    @Mutation
    setUser(value: IUser | null) {
        this.user = value;
    }

    @Action
    async signIn(payload: {username: string, password: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson("/accounts/sign-in/", {
                username: payload.username.trim(),
                password: payload.password
            }, "POST");
        } catch(error) {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async signUp(payload: {firstName: string, lastName: string, username: string, phone: string, email: string, password: string, code: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson(`/accounts/sign-up/?code=${payload.code}`, {
                first_name: `${payload.firstName[0].toUpperCase()}${payload.firstName.substring(1)}`.trim(),
                last_name: `${payload.lastName[0].toUpperCase()}${payload.lastName.substring(1)}`.trim(),
                username: payload.username.trim(),
                phone: payload.phone.trim(),
                email: payload.email.trim(),
                password: payload.password,
            }, "POST");
        } catch(error) {
            console.log(error);
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async ping(): Promise<boolean> {
        try {
            var response = await http.getJson("/accounts/ping/");
            this.context.commit("setUser", response.data);
            return response.status;
        } catch {
            return false;
        }
    }

    @Action
    async sendVerificationCode(payload: {username: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson("/accounts/send-verification-code/", {
                username: payload.username.trim()
            }, "POST");
        } catch {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async verifyCode(payload: {username: string, code: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson("/accounts/verify-code/", {
                username: payload.username.trim(),
                code: payload.code.trim()
            }, "POST");
        } catch {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async resetPassword(payload: {username: string, code: string, password: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson("/accounts/reset-password/", {
                username: payload.username.trim(),
                code: payload.code.trim(),
                new_pasword: payload.password
            }, "POST");
        } catch {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async changePassword(payload: {oldPassword: string, newPassword: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson("/accounts/change_password/", {
                old_password: payload.oldPassword,
                new_pasword: payload.newPassword
            }, "POST");
        } catch {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async authenticateUser(payload: {password: string}): Promise<IJsonResponse> {
        try {
            return await http.getJson("/accounts/authenticate-user/", {
                password: payload.password
            }, "POST");
        } catch {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async editBankDetails(payload: {bankName: string, bankAccountName: string, bankAccountNumber: string}): Promise<IJsonResponse> {
        try { 
            var response = await http.getJson("/accounts/edit_bank_details/", {
                bank_name: payload.bankName,
                bank_account_name: payload.bankAccountName,
                bank_account_number: payload.bankAccountNumber,
            }, "POST");
            if(response.status) {
                this.context.dispatch("ping");
            }
            return response;
        } catch {
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async changeName(payload: {firstName: string, lastName: string}): Promise<IJsonResponse> {
        try { 
            var response = await http.getJson("/accounts/change_name/", {
                first_name: payload.firstName,
                last_name: payload.lastName,
            }, "POST");
           if(response.status) {
                this.context.dispatch("ping");
            }
            return response;
        } catch(error) {
            console.log(error)
            return {status: false, error: "Failed to reach server"}
        }
    }

    @Action
    async signOut(): Promise<IJsonResponse> {
        try {
            var response = await http.getJson("/accounts/sign-out/");
            if(response.status)
                this.context.commit("setUser", null);
            return response;
        } catch {
            return {status: false, error: "Failed to reach server"};
        }
    }
}
