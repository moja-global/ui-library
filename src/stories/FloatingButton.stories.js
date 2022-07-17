import FloatingButton from "../components/Button/FloatingButton.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Button/FloatingButton",
  components: { FloatingButton },
};

export const TurquoiseGreen = () => ({
  components: { FloatingButton },

  template:
    '<FloatingButton classname="circular turquoise_green_circular" ><svg viewBox="-110 0 600 512"> <path class="" fill="currentColor" d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" ></path> </svg></FloatingButton>',
});

export const EarthGreen = () => ({
  components: { FloatingButton },

  template:
    '<FloatingButton classname="circular earth_green_circular" ><svg viewBox="-110 0 600 512"> <path class="" fill="currentColor" d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" ></path> </svg></FloatingButton>',
});

export const StoneGrey = () => ({
  components: { FloatingButton },

  template:
    '<FloatingButton classname="circular stone_grey_circular" ><svg viewBox="-110 0 600 512"> <path class="" fill="currentColor" d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" ></path> </svg></FloatingButton>',
});

export const PebbleGreen = () => ({
  components: { FloatingButton },

  template:
    '<FloatingButton classname="circular pebble_green_circular" ><svg viewBox="-110 0 600 512"> <path class="" fill="currentColor" d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" ></path> </svg></FloatingButton>',
});
