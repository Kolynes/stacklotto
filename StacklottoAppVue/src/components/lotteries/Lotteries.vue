<template>
    <div>
      <div class="my-5 pt-5">
        <h1 class="draw-1">Stacklotto Lotteries</h1>
        <h1 class="draw-3">
          Choose from the Stacklotto 649, Stacklotto 425, Lucky 5,<br />Match 4,
          Match 3 or Match 2 and try for a chance to win big
        </h1>
      </div>
      <b-row>
        <b-col cols="12" sm="6" lg="4" class="my-3" v-for="(lottery, index) in lotteries" :key="index">
          <b-card class="lotto-card">
            <b-card-text class="text-center">
              <img :src="require(`../../assets/images/${getImage(lottery)}.png`)" alt="" />
              <p class="lotto-text-bold my-4">₦{{lottery.prize.toFixed(2)}}</p>
              <b-row align-h="center">
                <div class="text-center">
                  <div class="counter">{{getDuration(lottery)[2]}}</div>
                  <span class="caption">days</span>
                </div>
                <div class="text-center">
                  <div class="counter">{{getDuration(lottery)[3]}}</div>
                  <span class="caption">hrs</span>
                </div>
                <div class="text-center">
                  <div class="counter">{{getDuration(lottery)[4]}}</div>
                  <span class="caption">mins</span>
                </div>
                <div class="text-center">
                  <div class="counter">{{getDuration(lottery)[5]}}</div>
                  <span class="caption">sec</span>
                </div>
              </b-row>
              <p class="lotto-text-bold my-4">₦{{lottery.cost.toFixed(2)}} / ticket</p>
              <b-link @click="playLottery(lottery)"><b-button class="lotto-btn">Play Now</b-button></b-link>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script src="./Lotteries.ts"></script>

<style scoped>
.lotto-text-bold {
  font-family: Lato;
  font-size: 16px;
  font-weight: 700;
  color: #434b52;
}

.lotto-btn {
  background-color: #091b41;
  border-radius: 5px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.22);
  font-size: 18px;
  text-align: center;
  padding: 10px;
  width: 100% !important;
  text-transform: capitalize;
  color: #ffffff;
  font-family: nunito;
  font-size: 18px;
  font-weight: 600;
}

.lotto-card {
  border: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1), 0 -1px 10px rgba(0, 0, 0, 0.1);
  /* height: 370px; */
}

.lotto-card img {
  height: 60px;
}
</style>