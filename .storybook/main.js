module.exports = {
  stories: ["../src/docs/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['../public'],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
