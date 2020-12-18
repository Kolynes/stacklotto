<template>
    <div v-if="show">
        <v-toolbar class="dash-toolbar"/>
        <div class="sidebar">
            <div class="sidebar-item" :class="{blue: isActive(link.route)}" @click="link.click" v-for="(link, index) in sidebarLinks" :key="index">
                <i :class="[link.icon]"></i>
            </div>
        </div>
        <b-container fluid class="dash-container">
            <router-view/>
        </b-container>
        <div class="bottom-nav">
            <b-row align-v="center">
                <b-col class="bottom-nav-item" :class="{blue: isActive(link.route)}" @click="link.click" v-for="(link, index) in sidebarLinks" :key="index">
                    <i :class="[link.icon]"></i>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script src="./Dashboard.ts"></script>

<style scoped>
.sidebar {
    width: 5em;
    height: 100vh;
    background-color: #091b41;
    color: white;
    position: fixed;
    padding-top: 190px;
    padding-left: 10px;
    padding-right: 10px;
    display: none;
}

.sidebar-item {
    text-align: center;
    font-size: 2em;
    margin-top: 15px;
}

.dash-toolbar {
    width: 100%;
    z-index: 2;
    margin-bottom: 20px;
}

.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #091b41;
    color: white;
}

.bottom-nav-item {
    text-align: center;
    font-size: 2em;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
}

.dash-container {
    margin-bottom: 4em;
}

@media screen and (min-width: 768px) {
    .dash-toolbar {
        position: fixed;
    }

    .sidebar {
        display: block;
    }

    .dash-container {
        padding-top: 190px;
        padding-left: 7em;
        margin-right: .5em;
    }

    .bottom-nav {
        display: none
    }
}
</style>