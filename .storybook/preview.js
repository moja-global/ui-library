import { app } from "@storybook/vue3";
import VueClickAway from "vue3-click-away";

app.use(VueClickAway);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
