<template>
    <b-card>
        <b-card-text>
            <b-row>
                <b-col>
                    <h1 class="draw-3">{{heading}}</h1>
                </b-col>
                <i class="mdi px-4" style="font-size: 1.5em" :class="{'mdi-plus': !showPanel, 'mdi-close': showPanel}" @click="togglePanel"/>
            </b-row>
            <div class="animate__animated animate__fadeInDown" v-if="showPanel">
                <slot/>
            </div>
        </b-card-text>
    </b-card>
</template>

<script src="./FaqCard.ts"></script>

<style>

</style>