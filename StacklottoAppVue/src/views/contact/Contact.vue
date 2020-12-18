<template>
    <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5 text-center ">
                <img src="../../assets/images/contact.png">
                <h1 class="draw-3">Stacklotto support team are always ready to assist you with any issues<br>and queries you may have.</h1>
            </b-container>
        </div>
        <b-container class="py-5">
            <div class="py-5">
                <b-row>
                    <b-col cols="12" md="6" lg="4">
                        <b-card class="mb-4">
                            <b-card-text>
                                <h1 class="draw-3">Head Office</h1>
                                <b-row>
                                    <i class="blue draw-3 mdi mdi-home ml-2"/>
                                    <b-col>
                                        <p>Stack Lottery and Games Limited<br>73 Akpakpava Road<br>Benin City, Edo State, Nigeria</p>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <i class="blue draw-3 mdi mdi-phone ml-2"/>
                                    <b-col>
                                        <p>+234 8100030442</p>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <i class="blue draw-3 mdi mdi-phone ml-2"/>
                                    <b-col>
                                        <p>+234 9050701111</p>
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <i class="blue draw-3 mdi mdi-email ml-2"/>
                                    <b-col>
                                        <p>info@stacklotto.com</p>
                                    </b-col>
                                </b-row>
                            </b-card-text>
                        </b-card>
                    </b-col>
                    <b-col>
                        <b-form class="contact-form" @submit.prevent="saveContact">
                            <b-row>
                                <b-col cols="12" md="6">
                                    <b-form-input v-model="firstName" placeholder="First Name" required class="py-4 my-3"/>
                                </b-col>
                                <b-col cols="12" md="6">
                                    <b-form-input v-model="lastName" placeholder="Last Name" required class="py-4 my-3"/>
                                </b-col>
                                <b-col cols="12" md="6">
                                    <b-form-input v-model="phone" placeholder="Phone Number" required class="py-4 my-3"/>
                                </b-col>
                                <b-col cols="12" md="6">
                                    <b-form-input v-model="email" placeholder="Email" type="email" required class="py-4 my-3"/>
                                </b-col>
                                <b-col cols="12">
                                    <b-form-textarea v-model="message" placeholder="Write Message" required class="py-4 my-3"/>
                                </b-col>
                            </b-row>
                            <b-alert variant="info" :show="savingContact">Please wait...</b-alert>
                            <b-alert variant="success" :show="success.length > 0">{{success}}</b-alert>
                            <b-alert variant="danger" :show="error.length > 0">{{error}}</b-alert>
                            <b-button class="cmn-btn btn-lg" style="color: white" type="submit">Post Comment</b-button>
                        </b-form>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.7055043529647!2d5.631325475282681!3d6.340780043160362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d331708a4a37%3A0x97ef8b29ef09d61e!2sStacklotto+office!5e0!3m2!1sen!2sng!4v1531232190394" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
        <v-footer/>
    </div>
</template>

<script src="./Contact.ts"></script>

<style scoped>
.breadcrumb-container {
    background-color: #16224c !important;
    height: auto !important;
}

.breadcrumb-container img {
    height: 200px;
}

.contact-form input, .contact-form textarea {
    border: none;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1), 0 -1px 10px rgba(0,0,0,0.1);
}
</style>