import { defineComponent, h } from "vue";

export default defineComponent({
    name: "DButton",
    render() {
        return h("button", null, "MyButton");
    }
})