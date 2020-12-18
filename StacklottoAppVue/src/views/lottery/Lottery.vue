<template>
    <div v-if="show">
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1">{{lottery.name}}</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>{{lottery.name}}</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="text-center py-5">
            <img :src="require(`../../assets/images/${image}.png`)" alt="">
            <h2 class="draw-1 my-4">{{lottery.price}}</h2>
            <p>{{game.info}}</p>
            <p><b-link>click here</b-link> for more details on how to play</p>
            <center>
                <b-card class="p-4 my-5 quick-play-card">
                    <b-card-text>
                        <b-form>
                            <b-row>
                                <b-col cols="12" md="6" lg="8">
                                    <b-form-input style="height: 50px" placeholder="Enter Number of Play" type="number" v-model="numberOfQuickPlayTickets"/>
                                </b-col>
                                <b-col>
                                    <b-button class="btn-block quick-play-btn" @click="randomizeTickets">Quick Play</b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-card-text>
                </b-card>
            </center>
            <b-row>
                <b-col cols="12" sm="6" md="4">
                    <b-card v-if="lottery.name == 'Stacklotto 649' || lottery.name == 'Stacklotto 425' || lottery.name == 'Lucky 5'" class="px-2">
                        <b-card-text>
                            <h3 class="draw-3 pb-2">Select Number</h3>
                            <b-row align-h="center">
                                <div class="draw-number" @click="selectNumber(i - 1 + game.initialKey)" :class="{selected: isSelected(i - 1 + game.initialKey)}" style="width: 12.2%" v-for="i in game.numberOfKeys" :key="i">{{i - 1 + game.initialKey}}</div>
                            </b-row>
                        </b-card-text>
                    </b-card>
                    <b-card v-else class="px-2">
                        <b-card-text>
                            <h3 class="draw-3 pb-2">Select Number</h3>
                            <b-row align-h="center" class="px-4">
                                <div style="width: 22%; margin: 3px" v-for="(x, index) in game.selection" :key="index">
                                    <div class="draw-number" @click="selectNumber(i - 1 + game.initialKey, x - 1)" :class="{selected: isSelected(i - 1 + game.initialKey, x - 1)}" style="width: 100%" v-for="i in game.numberOfKeys" :key="`${x}-${i}`">{{i - 1 + game.initialKey}}</div>
                                </div>
                            </b-row>
                        </b-card-text>
                    </b-card>
                    <div class="ticket-numbers-check-out mt-3">
                        <template v-for="(i, index) in selectedNumbers">
                            <div class="draw-number selected" style="width: 25px" v-if="i != -1" :key="index">{{i}}</div>
                        </template>
                        <b-button class="ticket-btn ml-2" @click="addTicket" v-if="isFullTicket">Add Ticket</b-button>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="4">
                    <h2 class="draw-3 pt-3">Number of tickets selected</h2>
                    <div class="ticket" v-for="(ticket, index) in tickets" :key="index">
                        <div class="draw-number selected" v-for="i in ticket" :key="i">{{i}}</div>
                        <div class="draw-number selected" @click="removeTicket(index)">X</div>
                    </div>
                </b-col>
                <b-col cols="12" sm="6" md="4">
                    <b-card class="p-4">
                        <b-card-text>
                            <b-row>
                                <p class="mr-3">Total Cost:</p>
                                <p>₦{{totalCost}}</p>
                            </b-row>
                            <b-row>
                                <p class="mr-3">Draw Date:</p>
                                <p>{{new Date().toDateString()}}</p>
                            </b-row>
                            <b-row>
                                <p class="mr-3">Player:</p>
                                <span v-if="!isAgent">{{user.firstName}} {{user.lastName}}</span>
                                <b-form-input v-else class="ml-auto mb-2" v-model="name" style="display: inline; width: 75%" placeholder="Player Name"></b-form-input>
                            </b-row>
                            <b-row>
                                <p class="mr-3">Number:</p>
                                <p v-if="!isAgent">{{user.phone}}</p>
                                <b-form-input v-else v-model="phone" style="display: inline; width: 73%" placeholder="Player Phone Number"></b-form-input>
                            </b-row>
                            <b-dropdown variant="outline-primary" block class="my-4" v-if="game.types != null">
                                <b-dropdown-item :active="selectedType.value == type.value" v-for="(type, index) in game.types" :key="index" @click="selectedType = type">{{type.text}}</b-dropdown-item>
                                <template v-slot:button-content>
                                    <span style="display: inline-block;">{{selectedType.text || "Select a type"}}</span>
                                </template>
                            </b-dropdown>
                            <b-row>
                                <b-col>
                                    <b-button class="btn-block quick-play-btn" :disabled="tickets.length == 0" @click="play">Play</b-button>
                                </b-col>
                                <b-col>
                                    <b-button class="btn-block quick-play-btn red" @click="$router.back()">Cancel</b-button>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./Lottery.ts"></script>

<style scoped>
.quick-play-card {
    max-width: 800px;
    border: none;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1), 0 -1px 10px rgba(0,0,0,0.1)
}

.selected {
    background-color: #f04d61;
}

.draw-number {
    cursor: pointer;
}

.ticket-btn {
  background-image: linear-gradient( 90deg, rgb(1,141,239) 0%, rgb(0,184,234) 100%, rgb(255,237,0) 100%);
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.22);
  font-size: 14px;
  text-transform: capitalize;
  color: #ffffff;
  outline: none;
  border: none
}
</style>