import { app } from "@storybook/vue3";
import VueClickAway from "vue3-click-away";

app.use(VueClickAway);

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
