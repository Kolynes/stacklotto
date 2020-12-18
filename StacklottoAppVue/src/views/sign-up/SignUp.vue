<template>
    <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1 ">Registration</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/home">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>Registration</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="text-center py-5">
            <center>
                <b-card class="form-card">
                    <b-card-text>
                        <h1 class="draw-3 py-3">Create Your Account</h1>
                        <b-form @submit.prevent="callSignUp">
                            <b-form-input class="my-4 py-4" type="text" v-model="firstName" required placeholder="Input your first name"/>
                            <b-form-input class="my-4 py-4" type="text" v-model="lastName" required placeholder="Input your last name"/>
                            <b-form-input class="my-4 py-4" type="text" v-model="username" required placeholder="Input your username"/>
                            <b-form-input class="my-4 py-4" type="email" v-model="email" required placeholder="Input your email address"/>
                            <b-form-input class="my-4 py-4" type="text" v-model="phone" required placeholder="Input your phone number"/>
                            <b-form-input class="my-4 py-4" type="password" v-model="password" required placeholder="Input your password"/>
                            <b-form-input class="my-4 py-4" type="password" v-model="confirmPassword" required placeholder="Re-enter your password"/>
                            <b-alert variant="danger" :show="error.length > 0">{{error}}</b-alert>
                            <b-button class="cmn-btn btn-lg btn-block mt-4" style="color: white; border-radius: 5px" type="submit" :disabled="signingUp">Sign Up</b-button>
                            <p class="draw-2">Already have an account? <router-link to="/sign-in" class="blue bold">Log in</router-link></p>
                        </b-form>
                    </b-card-text>
                </b-card>
            </center>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./SignUp.ts"></script>

<style scoped>
input {
    font-size: 1.2em !important;
}
</style>