<template>
    <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1 ">Check Ticket</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/home">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>Check Ticket</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="text-center py-5">
            <b-row>
                <b-col class="text-center">
                    <h2 class="draw-3">Ticket Payment</h2>
                    <img class="my-4" :src="require(`../../assets/images/${image}.png`)" alt="">
                    <p class="draw-3 bold">Number of tickets selected: {{tickets.length}}</p>
                    <p class="draw-3 bold">Cost of ticket selection ₦{{(lottery.cost * tickets.length).toFixed(2)}}</p>
                    <p class="draw-3 bold">Available balance ₦{{(user.balance).toFixed(2)}}</p>
                    <b-alert variant="success" :show="playSuccess.length > 0">{{playSuccess}}</b-alert>
                    <b-alert variant="danger" :show="playError.length > 0">{{playError}}</b-alert>
                    <b-alert variant="info" :show="confirming">Please wait...</b-alert>
                    <b-button class="quick-play-btn mr-5" @click="callConfirmPlay" :disabled="confirming">Confirm & Play</b-button>
                    <b-button class="quick-play-btn red" @click="$router.back()">Cancel</b-button>
                </b-col>
            </b-row>
        </b-container>
        <v-footer/>
        <b-modal ref="modal" hide-footer hide-header class="text-center">
            <center>
                <i class="mdi mdi-check avatar cmn-btn"></i>
                <h2 class="draw-3 my-4">Ticket placed successfully</h2>
                <h3 class="draw-2 my-2">Your lotteries have been successfully placed.</h3>
                <b-button class="cmn-btn btn-lg" style="border-radius: 1px; color: white; font-size: 1.5em; display: block; width: 90%; " @click="$router.push('/lotteries')">Back to Lotteries</b-button>
            </center>
        </b-modal>
    </div>
</template>

<script src="./Checkout.ts"></script>

<style>
.avatar {
    font-size: 50px;
    color: white;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    width:70px;
    height: 70px;
}

</style>