import { createApp } from "vue";

import DButton from "./button";
import JSXButton from "./JSXButton";
import SFCButton from "./SFCButton.vue";

// createApp(DButton)
// createApp(JSXButton)
createApp(SFCButton)
    .mount('#app');