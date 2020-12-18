<template>
    <div>
        <router-view/>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator";
import { component } from "vue/types/umd";
import {namespace} from "vuex-class";

const AccountsModule = namespace("AccountsModule");

@Component
export default class App extends Vue {
    @AccountsModule.Action
    ping!: () => Promise<boolean>;

    mounted() {
        this.ping();
    }
}
</script>