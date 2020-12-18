<template>
  <div>
    <v-toolbar />
    <div class="jumbotron-container">
      <b-container>
        <b-row align-v="center">
          <b-col cols="12" lg="6">
            <h1 class="jumbo">Take the chance to change your life</h1>
            <h2 class="subheading">
              Welcome to the official website of Stacklotto where you can play
              Stacklotto lotteries safely and securely online from the comfort
              of your own home.
            </h2>
            <b-button class="cmn-btn btn-lg" @click="$router.push('/register')">JOIN NOW!</b-button>
          </b-col>
          <b-col cols="12" lg="6"> </b-col>
        </b-row>
      </b-container>
      <br />
      <br />
      <br /><br/>
    </div>
    <b-container class="text-center py-5">
      <center>
        <b-card class="draw-card">
          <b-card-text>
            <b-row align-v="center">
              <b-col class="py-2">
                <h1 class="draw-1">Next Draw</h1>
                <h1 class="draw-2">The Jackpot has moved up</h1>
              </b-col>
              <b-col class="py-2" cols="12" lg="5">
                <b-row align-h="center">
                  <div class="text-center">
                    <div class="counter">00</div>
                    <span class="caption">days</span>
                  </div>
                  <div class="text-center">
                    <div class="counter">00</div>
                    <span class="caption">hrs</span>
                  </div>
                  <div class="text-center">
                    <div class="counter">00</div>
                    <span class="caption">mins</span>
                  </div>
                  <div class="text-center">
                    <div class="counter">00</div>
                    <span class="caption">sec</span>
                  </div>
                </b-row>
              </b-col>
              <b-col class="py-2" cols="12" lg="3">
                <b-button class="cmn-btn btn-md" style="color: white">PLAY NOW!</b-button>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </center>
      <div class="my-5 py-5">
        <h1 class="draw-1">PLAY TO WIN:</h1>
        <h1 class="draw-1">
          The Stacklotto Lottery has a little<br />
          something for everyone.
        </h1>
      </div>
      <b-row class="mb-5">
        <b-col cols="12" sm="6" lg="3">
          <b-card class="item-number-card">
            <b-card-text>
              <div class="item-number">01</div>
              <div class="text-center pl-3 ml-5">
                <img
                  class="item-number-img"
                  src="../../assets/images/handtouch.png"
                  alt=""
                />
                <p class="item-number-title">Play</p>
                <p class="item-number-caption">
                  Choose lottery and your <br />
                  Lucky numbers.
                </p>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" lg="3">
          <b-card class="item-number-card">
            <b-card-text>
              <div class="item-number" id="item-2">02</div>
              <div class="text-center pl-3 ml-5">
                <img
                  class="item-number-img"
                  src="../../assets/images/handtouch2.png"
                  alt=""
                />
                <p class="item-number-title">Buy</p>
                <p class="item-number-caption">
                  Buy your ticket[s] and <br />
                  make payment.
                </p>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" lg="3">
          <b-card class="item-number-card">
            <b-card-text>
              <div class="item-number" id="item-3">03</div>
              <div class="text-center pl-3 ml-5">
                <img
                  class="item-number-img"
                  src="../../assets/images/invoice.png"
                  alt=""
                />
                <p class="item-number-title">Check</p>
                <p class="item-number-caption">
                  Purchased ticket[s]<br />notify by email as proof<br />of game
                  played.
                </p>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" sm="6" lg="3">
          <b-card class="item-number-card">
            <b-card-text>
              <div class="item-number" id="item-4">04</div>
              <div class="text-center pl-3 ml-5">
                <img
                  class="item-number-img"
                  src="../../assets/images/cup.png"
                  alt=""
                />
                <p class="item-number-title">Win Jackpot</p>
                <p class="item-number-caption">
                  We will notify by email of<br />winning numbers.<br />Good
                  Luck.
                </p>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <lotteries/>
    </b-container>
    <div class="choose-us py-5">
      <b-container>
        <h1 class="text-center draw-1 py-5">Why You Chose You</h1>
        <b-row>
          <b-col cols="12" sm="6" lg="3" class="my-3">
            <b-card class="choose-us-item">
              <b-card-text class="text-center">
                <i class="flaticon-fan"></i>
                <p class="draw-3">Great Lottery Jackpots</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="3" class="my-3">
            <b-card class="choose-us-item">
              <b-card-text class="text-center">
                <i class="flaticon-payment"></i>
                <p class="draw-3">Instant Payout System</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="3" class="my-3">
            <b-card class="choose-us-item">
              <b-card-text class="text-center">
                <i class="flaticon-shield"></i>
                <p class="draw-3">100%<br />Safe Secure</p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="3" class="my-3">
            <b-card class="choose-us-item">
              <b-card-text class="text-center">
                <i class="flaticon-support"></i>
                <p class="draw-3">24 Hour Customer <br />Support</p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-container class="py-5">
        <h1 class="text-center draw-1 py-5">Latest Lottery Results</h1>
        <b-table responsive striped bordered :fields="lottoFields" style="border-radius: 20px;" class="text-center" :items="lottoItems">
          <template v-slot:cell(winningNumbers)="{item}">
            <span class="draw-number" :class="{selected: item.winningNumbers.length == index + 1 && (item.lottery == '649' || item.lottery == '425')}" v-for="(number, index) in item.winningNumbers" :key="index">
              {{number}}
            </span>
          </template>
        </b-table>
        <center>
          <b-button class="cmn-btn btn-lg" style="color: white">View All</b-button>
        </center>
    </b-container>
    <div class="ticket text-center has-overlay">
      <div class="overlay" />
      <center>
        <h1 class="draw-1 py-5" style="color: white">
          Check Your Lottery Ticket
        </h1>
        <result-checker/>
      </center>
    </div>
    <div class="py-5">
      <b-container>
        <b-row align-v="center">
          <b-col cols="12" sm="6">
            <b-card>
              <b-card-text>
                <b-row align-v="center" align-h="center">
                  <b-col cols="2">
                    <center>
                      <b-row class="avatar" align-v="center" align-h="center">
                        <i class="flaticon-cloud-computing blue"></i>
                      </b-row>
                    </center>
                  </b-col>
                  <b-col>
                    <h3 class="draw-3">Download it for free</h3>
                    <p>Get the app for a better mobile experience</p>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
            <img
              class="p-3"
              src="../../assets/images/goole-app-btn.png"
              alt=""
            />
            <img
              class="p-3"
              src="../../assets/images/apple-btn-logo.png"
              alt=""
            />
          </b-col>
          <b-col cols="12" sm="6">
            <img
              class="responsive"
              src="../../assets/images/standing-phone.png"
              alt=""
            />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="affiliate py-5 text-center">
      <b-container>
        <h1 class="draw-1 pb-5">Affiliate Programs</h1>
        <b-row>
          <b-col cols="12" sm="6" lg="3" class="mb-2">
            <b-card class="af-card">
              <b-card-text>
                <div class="icon mt-3">
                  <div class="icon-inner">
                    <img src="../../assets/images/1.svg" alt="icon" />
                  </div>
                </div>
                <h3 class="draw-3 content">High Revenues</h3>
                <p class="lato-16">
                  We offer the best commissions in the market and provide
                  proven.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="3" class="mb-2">
            <b-card class="af-card">
              <b-card-text>
                <div class="icon mt-3">
                  <div class="icon-inner">
                    <img src="../../assets/images/4.svg" alt="icon" />
                  </div>
                </div>
                <h3 class="draw-3 content">Reliable Payments</h3>
                <p class="lato-16">
                  Payments are made monthly via a variety of payment methods.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="3" class="mb-2">
            <b-card class="af-card">
              <b-card-text>
                <div class="icon mt-3">
                  <div class="icon-inner">
                    <img src="../../assets/images/2.svg" alt="icon" />
                  </div>
                </div>
                <h3 class="draw-3 content">Unlimited Affiliates</h3>
                <p class="lato-16">
                  There is no limit for your number of affiliates and no earning
                  limit.
                </p>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" sm="6" lg="3" class="mb-2">
            <b-card class="af-card">
              <b-card-text>
                <div class="icon mt-3">
                  <div class="icon-inner">
                    <img src="../../assets/images/3.svg" alt="icon" />
                  </div>
                </div>
                <h3 class="draw-3 content">Dedicated Support</h3>
                <p class="lato-16">
                  Our dedicated technical support team works with you to
                  understand and identify
                </p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-button class="cmn-btn btn-lg mt-5" style="color: white">Get Started</b-button>
      </b-container>
    </div>
    <v-footer />
  </div>
</template>

<script src="./Home.ts"></script>

<style scoped>
.jumbotron-container {
  background-color: #16224c;
  color: white;
  padding: 4em 0;
}

@media screen and (min-width: 1024px) {
  .jumbotron-container {
    background-image: url("../../assets/images/ball.png");
    background-repeat: no-repeat;
    background-position-x: 120%;
    background-position-y: 90%;
  }
}

.jumbo {
  font-family: lato;
  font-size: 64px;
  font-weight: 600;
  line-height: 80px;
  margin-bottom: 20px;
}

.subheading {
  font-family: lato;
  font-size: 20px;
  font-weight: 400;
  line-height: 34px;
  margin-bottom: 20px;
}

.item-number-card {
  height: 220px;
  border: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1), 0 -1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.item-number-img {
  width: 40px;
  margin-bottom: 10px;
}

.item-number {
  position: absolute;
  top: 50%;
  left: -15px;
  width: 95px;
  height: 110px;
  margin-top: -55px;
  z-index: 99;
  background-image: linear-gradient(
    90deg,
    rgb(1, 141, 239) 0%,
    rgb(0, 184, 234) 100%,
    rgb(255, 237, 0) 100%
  );
  text-align: center;
  line-height: 110px;
  font-family: var(--heading-font);
  font-weight: 700;
  font-size: 24px;
  color: #ffffff;
  box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.15);
  border-radius: 0 5px 5px 0;
  -webkit-border-radius: 0 5px 5px 0;
  -moz-border-radius: 0 5px 5px 0;
  -ms-border-radius: 0 5px 5px 0;
  -o-border-radius: 0 5px 5px 0;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}

.item-number::before {
  position: absolute;
  content: "";
  top: -15px;
  left: 0px;
  width: 0;
  height: 0;
  border-top: 15px solid #0652dd;
  border-left: 15px solid transparent;
  border-bottom: 0px solid transparent;
  transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}

.item-number::after {
  position: absolute;
  content: "";
  bottom: -15px;
  left: 0px;
  width: 0;
  height: 0;
  border-top: 15px solid #0652dd;
  border-left: 15px solid transparent;
  border-bottom: 0px solid transparent;
  transform: rotate(0deg);
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -ms-transform: rotate(0deg);
  -o-transform: rotate(0deg);
}

.item-number#item-2 {
  background-image: linear-gradient(
    90deg,
    rgb(0, 184, 234) 0%,
    rgb(255, 44, 156) 0%,
    rgb(255, 94, 167) 100%
  );
}

.item-number#item-3 {
  background-image: linear-gradient(
    90deg,
    rgb(249, 136, 34) 0%,
    rgb(255, 168, 52) 100%,
    rgb(253, 218, 0) 100%
  );
}

.item-number#item-4 {
  background-image: linear-gradient(
    90deg,
    rgb(34, 249, 52) 0%,
    rgb(52, 255, 130) 100%,
    rgb(0, 253, 55) 100%
  );
}

.item-number#item-2::after,
.item-number#item-2::before {
  border-top: 15px solid #850047;
}

.item-number#item-3::after,
.item-number#item-3::before {
  border-top: 15px solid #855d00;
}

.item-number#item-4::after,
.item-number#item-4::before {
  border-top: 15px solid green;
}

.item-number-title {
  font-family: nunito;
  font-size: 22px;
  font-weight: 600;
}

.item-number-caption {
  font-family: lato;
  font-size: 13px;
  font-weight: 400;
}

.choose-us {
  background-color: #f7f7f7;
}

.choose-us-item {
  border: none;
  transition: all 0.2s linear;
}

.choose-us-item i {
  font-size: 62px;
  transition: all 0.2s linear;
}

.choose-us-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2), 0 -1px 10px rgba(0, 0, 0, 0.2);
}

.choose-us-item:hover i {
  color: red;
}

.ticket {
  background-image: url("../../assets/images/gmailPicture.png");
  padding: 5em;
  border: none;
}

.has-overlay {
  position: relative;
}

.has-overlay > * {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 -1px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  vertical-align: middle;
  font-size: 200%;
}

.blue {
  color: #00a2ef;
}

.responsive {
  width: 100%;
}

.affiliate {
  background-color: #2b2d5c;
  color: white;
}

.af-card {
  background-color: #2b2d5c;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2), 0 -1px 10px rgba(0, 0, 0, 0.2);
}

.lato-16 {
  font-family: lato;
  font-size: 16px;
  font-weight: 400;
}

.icon {
  position: relative;
  z-index: 999;
  display: inline-block;
  color: #007bff;
}

.content {
  margin-top: 53px;
}

.icon::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  width: 90px;
  height: 90px;
  background-color: rgba(51, 181, 247, 0.15);
  border: 1px solid #33b5f7;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  z-index: 9;
}

.icon::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  width: 108px;
  height: 108px;
  border: 1px solid rgba(51, 181, 247, 0.2);
  background-color: rgba(255, 255, 255, 0.302);
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  z-index: -10;
}

.icon-inner {
  width: 68px;
  height: 68px;
  position: relative;
  z-index: 99;
  display: inline-block;
  text-align: center;
  line-height: 68px;
  background-color: #303265;
  box-shadow: 0 0 10px -2px rgba(51, 181, 247, 0.5);
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}
</style>