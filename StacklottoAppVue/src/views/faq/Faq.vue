<template>
    <div>
        <v-toolbar/>
        <div class="breadcrumb-container">
            <b-container class="breadcrumb-container py-5">
                <b-row align-v="center">
                    <b-col>
                        <h1 class="draw-1 ">FAQ</h1>
                        <b-breadcrumb>
                            <b-breadcrumb-item to="/home">Home</b-breadcrumb-item>
                            <b-breadcrumb-item active>FAQ</b-breadcrumb-item>
                        </b-breadcrumb>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <b-container class="py-5">
            <h1 class="draw-1 py-5 text-center">Frequently Asked Questions</h1>
            <b-row>
                <b-col cols="12" md="6" lg="4">
                    <b-card>
                        <b-card-text>
                            <h3 class="draw-3 mb-4">Question Group</h3>
                            <b-list-group>
                                <template v-if="faqGroups.length > 0">
                                    <b-list-group-item v-for="(faqGroup, index) in faqGroups" :key="index" :class="{blue: faqGroup.active}">
                                        <i class="mdi mdi-arrow-right-circle mr-4 blue"/>
                                        <span>{{faqGroup.title}}</span>
                                    </b-list-group-item>
                                </template>
                                <span class="draw-2">No groups</span>
                            </b-list-group>
                        </b-card-text>
                    </b-card>
                </b-col>
                <b-col>
                    <template v-if="faqs.length > 0">
                    <faq-card :heading="faq.question" v-for="(faq, index) in faqs" :key="index">
                        <span>{{faq.answer}}</span>
                    </faq-card>
                    </template>
                    <h1 class="draw-3 text-center">No FAQs</h1>
                </b-col>
            </b-row>
        </b-container>
        <v-footer/>
    </div>
</template>

<script src="./Faq.ts"></script>

<style>

</style>