import ButtonComponent from "../../mojaglobal-ui/src/components/Button/ButtonComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  components: { ButtonComponent },
};

export const Primary = () => ({
  components: { ButtonComponent },
  template:
    '  <ButtonComponent classname="primary" BackgroundColor="#ffffff" Color="#475447" Padding="0.4rem 1.3rem" MinWidth="110px" FontSize="15px">Click Me</ButtonComponent> ',
});

export const PrimaryWithHover = () => ({
  components: { ButtonComponent },
  template:
    '  <ButtonComponent classname="primarywh" BackgroundColor="#ffffff" Color="#475447" Padding="0.4rem 1.3rem" MinWidth="110px" FontSize="15px">Click Me</ButtonComponent> ',
});

export const PrimaryHovered = () => ({
  components: { ButtonComponent },
  template:
    '  <ButtonComponent classname="primary hovered" BackgroundColor="#ffffff" Color="#475447" Padding="0.4rem 1.3rem" MinWidth="110px" FontSize="15px">Click Me</ButtonComponent> ',
});

export const PrimaryRound = () => ({
  components: { ButtonComponent },
  template:
    '  <ButtonComponent classname="primary round" BackgroundColor="#ffffff" Color="#475447" Padding="0.4rem 1.3rem" MinWidth="110px" FontSize="15px">Click Me</ButtonComponent> ',
});

export const PrimaryRoundWithHover = () => ({
  components: { ButtonComponent },
  template:
    '  <ButtonComponent classname="primarywh round" BackgroundColor="#ffffff" Color="#475447" Padding="0.4rem 1.3rem" MinWidth="110px" FontSize="15px">Click Me</ButtonComponent> ',
});

export const PrimaryRoundHovered = () => ({
  components: { ButtonComponent },
  template:
    '  <ButtonComponent classname="primary hovered round" BackgroundColor="#ffffff" Color="#475447" Padding="0.4rem 1.3rem" MinWidth="110px" FontSize="15px">Click Me</ButtonComponent> ',
});
