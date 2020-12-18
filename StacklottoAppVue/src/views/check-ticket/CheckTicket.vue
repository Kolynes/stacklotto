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
            <h1 class="draw-1 py-5">Check Your Lottery Ticket</h1>
            <center>
                <v-result-checker/>
            </center>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./CheckTicket.ts"></script>