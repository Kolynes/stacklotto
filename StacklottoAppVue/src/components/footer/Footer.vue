<template>
    <div class="footer">
        <b-container class="py-5">
            <h2 class="sub my-5 text-center">Don't Miss Any Update From Us, Hit The Subscribe Button Dont Be Scared We Won't Spam You!</h2>
            <center>
                <b-alert style="max-width: 300px" variant="danger" :show="error.length > 0">{{error}}</b-alert>
                <b-alert style="max-width: 300px" variant="info" :show="success.length > 0">{{success}}</b-alert>
            </center>
            <form class="subscribe-form" @submit.prevent="subscribe">
                <input type="email" v-model="email" required id="sub_email" placeholder="Email address">
                <button type="submit" class="subscribe-btn ml-auto" :disabled="subscribing">subscribe</button>
            </form>
        </b-container>
        <div class="divider"/>
        <b-container class="py-5">
            <b-row>
                <b-col cols="12" sm="6" lg="2">
                    <h3 class="head mb-4">Quick Links</h3>
                    <b-link style="display: block; color: white" to="/home">Home</b-link>
                    <b-link style="display: block; color: white" to="/home">About Us</b-link>
                    <b-link style="display: block; color: white" to="/results">Results</b-link>
                    <b-link style="display: block; color: white" to="/blog">Blog</b-link>
                    <b-link style="display: block; color: white" to="/contact">Contact</b-link>
                    <b-link style="display: block; color: white" to="/faq">Faq</b-link>
                </b-col>
                <b-col cols="12" sm="6" lg="2">
                    <h3 class="head mb-4">Partners</h3>
                    <p>Become An Affiliate</p>
                    <p>Become An Agent</p>
                    <span class="rated-18 mt-4">+18 Play wisely</span>
                </b-col>
                <b-col cols="12" sm="6" lg="4">
                    <h3 class="head mb-4">Contact Us</h3>
                    <p>Stack Lottery and Games Limited,</p>
                    <p>73 Akpakpava Road, Benin City, Edo State - Nigeria.</p>
                    <p>+234 8100030442</p>
                    <p>+234 9050701111</p>
                    <p>info@stackloto.com</p>
                </b-col>
                <b-col>
                    <h3 class="head mb-4">Payment Methods</h3>
                    <b-row>
                        <b-col cols="12" sm="4">
                            <img class="m-1" style="width: 100px" src="../../assets/images/paystack.png" alt="">
                        </b-col>
                        <b-col cols="12" sm="4">
                            <img class="m-1" style="width: 100px" src="../../assets/images/monify.png" alt="">
                        </b-col>
                        <b-col cols="12" sm="4">
                            <img class="m-1" style="width: 100px" src="../../assets/images/polaris.png" alt="">
                        </b-col>
                        <b-col cols="12" sm="4">
                            <img class="m-1" style="width: 100px" src="../../assets/images/opay.png" alt="">
                        </b-col>
                         <b-col cols="12" sm="4">
                            <img class="m-1" style="width: 100px" src="../../assets/images/uba.png" alt="">
                        </b-col>
                         <b-col cols="12" sm="4">
                            <img class="m-1" style="width: 100px" src="../../assets/images/zenith.png" alt="">
                        </b-col>
                    </b-row>
                    <h2 class="mt-4 head">Follow Us</h2>
                </b-col>
            </b-row>
        </b-container>
        <div class="divider"/>
        <b-container class="py-2">
            <p class="text-center">Copyright (c) 2020 Stacklotto. All rights reserved.</p>
        </b-container>
    </div>
</template>

<script src="./Footer.ts"></script>

<style scoped>
.footer{
    background-color: #091b41;
    color: white;
}

.sub {
    font-family: nunito;
    font-weight: 600;
    font-size: 20px;
}

.head {
    font-family: nunito;
    font-weight: 600;
    font-size: 28px;
}

.subscribe-form {
    position: relative;
    margin: auto;
    width: 70%;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border: none;
    padding: 20px 35px;
    background-color: rgb(49, 49, 83);
    color: #ececec;
    margin-bottom: 15px;
}

.subscribe-form input {
    width: 100%;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    border: none;
    background-color: rgb(49, 49, 83);
    color: #ececec;
}

.subscribe-form input {
    width: calc(100% - 140px);
    float: left;
    border: none;
    padding: 13px 25px;
    border-radius: 999px;
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
    -ms-border-radius: 999px;
    -o-border-radius: 999px;
}

@media (max-width: 575px) {
    .subscribe-form input {
        width: 100%;
        margin-bottom: 10px;
    }
    .subscribe-form button {
        margin-bottom: 15px;
        width: 100%;
    }
    .subscribe-form {
        width: 100%;
    }
}

.subscribe-btn {
    width: 130px;
    border: none;
    background-color: #03a2ee;
    padding: 14px 15px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    text-transform: capitalize;
    color: #ffffff;
}

.divider {
    padding-top: 0.1px;
    background-color: grey;
    opacity: 0.3;
}

.rated-18 {
    background-color: red;
    border: 1px solid #ffff;
    color: #fff;
    margin-top: 10px;
    border-radius: 5px;
    padding: 5px;
}

</style>