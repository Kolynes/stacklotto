<template>
    <div>
        <h2 class="draw-1 mb-4">My Wallet</h2>

        <b-row>
            <b-col>
                <b-card class="balance-card">
                    <b-card-text>
                        <h2 class="draw-3">Balance</h2>
                        <h1 class="draw-1">₦{{user.balance.toFixed(2)}}</h1>
                        <b-button class="cmn-btn m-2" style="color: white">Fund Wallet</b-button>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
                <h2 class="draw-3">Withdrawal</h2>
                <b-card class="balance-card">
                    <b-card-text>
                        <b-form @submit.prevent="withdraw">
                            <b-form-input placeholder="Enter amount to withdraw" v-model="amount" required type="number"/>
                            <b-alert variant="success" :show="withdrawSuccess.length > 0">{{withdrawSuccess}}</b-alert>
                            <b-alert variant="danger" :show="withdrawError.length > 0">{{withdrawError}}</b-alert>
                            <b-alert variant="info" :show="withdrawing">Please wait...</b-alert>
                            <b-button class="cmn-btn m-2" style=" color: white" type="submit" :disabled="withdrawing">Withdraw</b-button>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script src="./Wallet.ts"></script>