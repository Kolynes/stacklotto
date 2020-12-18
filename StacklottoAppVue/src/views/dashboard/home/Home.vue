<template>
    <div>
        <b-row>
            <b-col cols="12" lg="4">
                <b-card class="mb-4">
                    <b-card-text>
                        <center>
                            <i class="mdi mdi-account-circle mb-0" style="font-size: 5em"></i>
                            <p class="draw-3 mb-1">{{fullName}}</p>
                            <p class="mb-1"><i class="mdi mdi-phone"></i>{{user.phone}}</p>
                            <p class="draw-2"><i class="mdi mdi-email"></i>{{user.email}}</p>
                            <b-button class="cmn-btn" style="color: white" @click="$router.push('/dashboard/settings')">Open Settings</b-button>
                        </center>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col>
                <b-row>
                    <b-col>
                        <b-card class="mb-4">
                            <b-card-text>
                                <h3 class="draw-2">My Wallet</h3>
                                <b-row align-v="center">
                                    <b-col>
                                        <i class="mdi mdi-wallet" style="font-size: 5em" />
                                    </b-col>
                                    <b-col>
                                        <h1 class="draw-1">₦{{balance}}</h1>
                                        <b-button class="cmn-btn" style="color: white" @click="$router.push('/dashboard/wallet')">Open Wallet</b-button>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col v-if="isAffiliate">
                        <b-card class="mb-4">
                            <b-card-text>
                                <h3 class="draw-2">Referrals</h3>
                                <b-row align-v="center">
                                    <b-col>
                                        <i class="mdi mdi-account-supervisor" style="font-size: 5em"></i>
                                    </b-col>
                                    <b-col>
                                        <h1 class="draw-1">{{referralCount}}</h1>
                                        <b-button class="cmn-btn" style="color: white" @click="$router.push('/dashboard/referrals')">Open Referrals</b-button>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>
                    </b-col>
                </b-row>
                <h2 class="draw-3 mt-2">Latest Transaction</h2>
                 <b-card v-if="latestTransaction">
                    <b-card-text>
                        <p class="md-3 float-right float-sm-none caption">#{{latestTransaction.referenceNumber}}</p>
                        <p class="draw-3">{{latestTransaction.type}}</p>
                        <p class="draw-2 bold">{{latestTransaction.status}}</p>
                        <b-row>
                            <b-col cols="12" md="4">
                                <h3 class="draw-2 bold">Date</h3>
                                <p>{{datetime(latestTransaction.date)}}</p>
                            </b-col>
                            <b-col cols="12" md="4">
                                <h3 class="draw-2 bold">Amount</h3>
                                <p>₦{{latestTransaction.amount}}</p>
                            </b-col>
                            <b-col cols="12" md="4">
                                <h3 class="draw-2 bold">Details</h3>
                                <p>{{latestTransaction.details}}</p>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
                <p class="text-center draw-2 bold" v-else>No transactions</p>
                <center>
                    <b-button class="cmn-btn" style="color: white" @click="$router.push('/dashboard/transactions')">Open Transactions</b-button>
                </center>
            </b-col>
        </b-row>
    </div>
</template>

<script src="./Home.ts"></script>

<style>

</style>