import ToggleComponent from "../components/Toggle/ToggleComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Toggle",
  components: { ToggleComponent },
};

export const PrimaryRound = () => ({
  components: { ToggleComponent },
  template:
    '  <ToggleComponent classname="primary round" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#ffffff" OuterColor="#73e8a3"/> ',
});

export const PrimarySquare = () => ({
  components: { ToggleComponent },
  template:
    '  <ToggleComponent classname="primary" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#ffffff" OuterColor="#2E382B"/>',
});

export const SecondaryRound = () => ({
  components: { ToggleComponent },
  template:
    '  <ToggleComponent classname="secondary round" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#73e8a3" OuterColor="#ffffff"/> ',
});

export const SecondarySquare = () => ({
  components: { ToggleComponent },
  template:
    '  <ToggleComponent classname="secondary" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#2E382B" OuterColor="#ffffff"/>',
});
