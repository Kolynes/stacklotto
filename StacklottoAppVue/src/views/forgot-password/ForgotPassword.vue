<template>
     <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1 ">Password Recovery</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/home">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>Password Recovery</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="py-5">
            <center>
                <b-card style="max-width: 600px" v-if="step == 1">
                    <h1 class="draw-3">Step 1</h1>
                    <b-form @submit.prevent="sendVerificationCode">
                        <span>Enter Email Address</span>
                        <b-form-input placeholder="Email address" required v-model="email" type="email"></b-form-input>
                        <b-alert variant="info" :show="sendingVerificationCode">Please Wait</b-alert>
                        <b-alert variant="danger" :show="sendVerificationCodeError.length > 0">{{sendVerificationCodeError}}</b-alert>
                        <b-button class="cmn-btn btn-xs mt-2" style="color: white" type="submit" :disabled="sendingVerificationCode">next</b-button>
                    </b-form>
                </b-card>
                <b-card style="max-width: 600px" v-if="step == 2">
                    <h1 class="draw-3">Step 2</h1>
                    <b-form @submit.prevent="verifyCode">
                        <span>Enter code</span>
                        <b-form-input placeholder="Code" required v-model="code" type="text" maxlength="6"></b-form-input>
                        <b-alert variant="info" :show="verifyingCode">Please Wait</b-alert>
                        <b-alert variant="danger" :show="verifyCodeError.length > 0">{{verifyCodeError}}</b-alert>
                        <b-button class="cmn-btn btn-xs mt-2" style="color: white" type="submit" :disabled="verifyingCode">next</b-button>
                    </b-form>
                </b-card>
                <b-card style="max-width: 600px" v-if="step == 3">
                    <h1 class="draw-3">Step 3</h1>
                    <b-form @submit.prevent="resetPassword">
                        <span>Reset Password</span>
                        <b-form-input placeholder="New Password" required v-model="newPassword" type="password"></b-form-input>
                        <b-form-input placeholder="Confirm Password" required v-model="confirmPassword" type="password"></b-form-input>
                        <b-alert variant="info" :show="resettingPassword">Please Wait</b-alert>
                        <b-alert variant="danger" :show="resetPasswordError.length > 0">{{resetPasswordError}}</b-alert>
                        <b-button class="cmn-btn btn-xs mt-2" style="color: white" type="submit" :disabled="resettingPassword">next</b-button>
                    </b-form>
                </b-card>
            </center>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./ForgotPassword.ts"></script>

<style>

</style>