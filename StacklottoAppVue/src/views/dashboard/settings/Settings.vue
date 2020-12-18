<template>
    <div>
        <h2 class="draw-1 m-4">Settings</h2>
        <b-row>
            <b-col cols="12" md="4">
                <b-card class="mb-5">
                    <b-card-text>
                        <h2 class="draw-3">Change Name</h2>
                        <b-form @submit.prevent="callChangeName">
                            <b-form-input class="py-4 my-3" type="text" required v-model="firstName" placeholder="Input first name" />
                            <b-form-input class="py-4 my-3" type="text" required v-model="lastName" placeholder="Input last name" />
                            <b-form-input style="visibility:hidden" class="py-4 my-3" type="password" placeholder="Confirm Password" />
                            <b-alert variant="info" :show="changingName">Please wait</b-alert>
                            <b-alert variant="success" :show="changeNameSuccess.length > 0">{{changeNameSuccess}}</b-alert>
                            <b-alert variant="danger" :show="changeNameError.length > 0">{{changeNameError}}</b-alert>
                            <b-button class="cmn-btn" style="color: white" type="submit" :disabled="changingName">Change Name</b-button>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card class="mb-5">
                    <b-card-text>
                        <h2 class="draw-3">Change Password</h2>
                        <b-form @submit.prevent="callChangePassword">
                            <b-form-input class="py-4 my-3" required v-model="oldPassword" type="password" placeholder="Old Password" />
                            <b-form-input class="py-4 my-3" required v-model="newPassword" type="password" placeholder="New Password" />
                            <b-form-input class="py-4 my-3" required v-model="confirmPassword" type="password" placeholder="Confirm Password" />
                            <b-alert variant="info" :show="changingPassword">Please wait</b-alert>
                            <b-alert variant="success" :show="changePasswordSuccess.length > 0">{{changePasswordSuccess}}</b-alert>
                            <b-alert variant="danger" :show="changePasswordError.length > 0">{{changePasswordError}}</b-alert>
                            <b-button class="cmn-btn" style="color: white" type="submit" :disabled="changingPassword">Change Password</b-button>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="12" md="4">
                <b-card class="mb-5">
                    <b-card-text>
                        <h2 class="draw-3">Bank Details</h2>
                        <b-form @submit.prevent="callEditBankDetails">
                            <b-form-input class="py-4 my-3" required v-model="bankAccountName" type="text" placeholder="Account Name" />
                            <b-form-input class="py-4 my-3" required v-model="bankAccountNumber" type="text" placeholder="Account Number" />
                            <b-form-input class="py-4 my-3" required v-model="bankName" type="text" placeholder="Bank Name" />
                            <b-alert variant="info" :show="editingBankDetails">Please wait</b-alert>
                            <b-alert variant="success" :show="editBankDetailsSuccess.length > 0">{{editBankDetailsSuccess}}</b-alert>
                            <b-alert variant="danger" :show="editBankDetailsError.length > 0">{{editBankDetailsError}}</b-alert>
                            <b-button class="cmn-btn" style="color: white" :disabled="editingBankDetails" type="submit">Save Bank Details</b-button>
                        </b-form>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script src="./Settings.ts"></script>

<style>

</style>