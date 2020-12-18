import {Vue, Component, Prop} from "vue-property-decorator";

@Component
export default class FaqCard extends Vue {
    @Prop({type: String, required: true})
    heading!: string;

    showPanel: boolean = false;

    togglePanel() {
        this.showPanel = !this.showPanel;
    }
}