<template>
    <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1 ">Login</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/home">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>Login</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="text-center py-5">
            <center>
                <b-card class="form-card">
                    <b-card-text>
                        <h1 class="draw-3 py-3">Login Your Account</h1>
                        <b-alert variant="danger" text="hello" :show="error.length > 0">{{error}}</b-alert>
                        <b-form @submit.prevent="callSignIn">
                            <b-form-input class="my-4 py-4" type="email" v-model="username" required placeholder="Input your email address"/>
                            <b-form-input class="my-4 py-4" type="password" v-model="password" required placeholder="Input your password"/>
                            <b-button type="submit" class="cmn-btn btn-lg btn-block mt-4" style="color: white; border-radius: 5px" :disabled="signingIn">Sign In</b-button>
                            <div class="py-3">
                                <b-row>
                                    <b-col>
                                        <div class="text-left draw-2 bold">
                                            <b-form-checkbox>Remember me</b-form-checkbox> 
                                        </div>
                                    </b-col>
                                    <b-col>
                                        <div class="text-right draw-2 bold">
                                            <router-link to="/"><span class="blue">Forgot Password?</span></router-link> 
                                        </div>
                                    </b-col>
                                </b-row>
                            </div>
                            <p class="draw-2 text-left">New to <b>Stacklotto</b>? <router-link to="/register"><span class="blue bold">Sign Up Now</span></router-link></p>
                        </b-form>
                    </b-card-text>
                </b-card>
            </center>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./SignIn.ts"></script>

<style scoped>
input {
    font-size: 1.2em !important;
}
</style>