<template>
    <div>
        <v-toolbar/>
        <b-container class="py-5">
            <center>
                <img src="../../assets/images/error.png" class="responsive error-img" alt="">
                <h2 class="draw-3">Oops! Page Not Found</h2>
                <p>The page you are looking is not available or has been removed.</p>
                <b-button class="cmn-btn btn-lg" style="color: white" @click="$router.push('/')">Home</b-button>
            </center>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./Error404.ts"></script>

<style scoped>
.error-img {
    max-width: 600px !important;
}
</style>