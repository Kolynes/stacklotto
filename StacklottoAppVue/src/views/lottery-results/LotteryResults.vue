<template>
    <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1">Latest Lottery Result</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/home">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>Latest Lottery Result</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="text-center py-5">
            <img style="width: 150px" :src="require(`../../assets/images/${l}.png`)" v-if="l != 'draws'" alt="" class="py-4">
            <h1 class="draw-1 pb-5" v-if="l != 'draws'">Latest Lottery Result</h1>
            <h1 class="draw-1 pb-5" v-else>You have 10 Draws</h1>
            <center>
                <b-card class="draw-card" v-if="l != 'draws'">
                    <b-card-text>
                        <b-row align-v="center">
                            <b-col>
                                <div class="counter blue">
                                    <i class="mdi mdi-arrow-left" aria-hidden="true"/>
                                </div>
                            </b-col>
                            <b-col cols="12" lg="8" class="my-3">
                                <h2 class="draw-3">Draw Date: Jan. 8, 2020</h2>
                                <div class="numbers my-4">
                                    <div class="counter my-2" v-for="i in 7" :key="i">2</div>
                                    <div class="counter blue">2</div>
                                </div>
                                <b-button class="cmn-btn btn-lg btn-block mt-4">View All Draw Results</b-button>
                            </b-col>
                            <b-col>
                                <div class="counter blue">
                                    <i class="mdi mdi-arrow-right" aria-hidden="true"/>
                                </div>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
                <b-table v-if="l != 'draws'" responsive striped bordered :fields="resultFields" style="border-radius: 20px;" class="text-center mt-5" :items="resultItems"/>
                <b-table v-else responsive striped bordered :fields="drawFields" style="border-radius: 20px;" class="text-center" :items="drawItems">
                    <template v-slot:cell(selection)="{item}">
                        <span class="draw-number selected" v-for="(number, index) in item.selection" :key="index">{{number}}</span>
                    </template>
                    <template v-slot:cell(details)>
                        <b-button class="cmn-btn btn-lg btn-block">Details</b-button>
                    </template>
                </b-table>
            </center>
        </b-container>
        <div class="ticket-checker-section py-5" v-if="l != 'draws'">
            <center>
                <h1 class="draw-1 py-5" style="color: white">Check Your Lottery Ticket</h1>
                <v-result-checker/>
            </center>
        </div>
        <v-footer/>
    </div>
</template>

<script src="./LotteryResults.ts"></script>

<style scoped>
.ticket-checker-section {
    background-color: #16224c;
}

.draw-card {
    transform: none !important;
}

.counter {
    display: inline-block
}

.counter.blue {
    background-color: #1ca1f2 !important;
}

.btn-block {
    min-width: 50%;
    color: white;
}
</style>