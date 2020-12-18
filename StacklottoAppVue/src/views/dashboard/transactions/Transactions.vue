<template>
    <div>
        <h2 class="draw-1 m-4">Transactions</h2>
        <b-form inline>
            <b-dropdown>
                <template v-slot:button-content>
                    <span style="display: inline-block;">{{selectedType.text}}</span>
                </template>
                <b-dropdown-item v-for="(type, index) in transactionTypes" :key="index" @click="selectedType = type" :active="selectedType.text == type.text">{{type.text}}</b-dropdown-item>
            </b-dropdown>
        </b-form>
        <b-alert variant="info" :show="loadingTransactions">Please Wait...</b-alert>
        <b-alert variant="danger" :show="loadTransactionsError.length > 0">{{loadTransactionsError}}</b-alert>
        <template v-if="filteredTransactions.length > 0">
            <b-card v-for="(transaction, index) in filteredTransactions" :key="index">
                <b-card-text>
                    <p class="md-3 float-right float-sm-none caption">#{{transaction.referenceNumber}}</p>
                    <p class="draw-3">{{transaction.type}}</p>
                    <p class="draw-2 bold">{{transaction.status}}</p>
                    <b-row>
                        <b-col cols="12" md="4">
                            <h3 class="draw-2 bold">Date</h3>
                            <p>{{datetime(transaction.date)}}</p>
                        </b-col>
                        <b-col cols="12" md="4">
                            <h3 class="draw-2 bold">Amount</h3>
                            <p>₦{{transaction.amount}}</p>
                        </b-col>
                        <b-col cols="12" md="4">
                            <h3 class="draw-2 bold">Details</h3>
                            <p>{{transaction.details}}</p>
                        </b-col>
                    </b-row>
                </b-card-text>
            </b-card>
        </template>
        <h2 class="draw-2 text-center" v-else>No transactions</h2>
    </div>
</template>

<script src="./Transactions.ts"></script>

<style>

</style>