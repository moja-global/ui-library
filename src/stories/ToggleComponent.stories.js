import ToggleComponent from "../../mojaglobal-ui/src/components/Toggle/ToggleComponent.vue";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Toggle",
  components: { ToggleComponent },
};

export const PrimaryRound = () => ({
  components: { ToggleComponent },
  setup() {
    const title = ref("false");
    function getvalue(value) {
      title.value = value;
      console.log(title.value);
    }

    return {
      title,
      getvalue,
    };
  },
  template:
    '  <ToggleComponent @clicked="getvalue" classname="primary round" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#ffffff" OuterColor="#73e8a3"/> <p> Value: {{ title }}</p>',
});

export const PrimarySquare = () => ({
  components: { ToggleComponent },
  setup() {
    const title = ref("false");
    function getvalue(value) {
      title.value = value;
      console.log(title.value);
    }

    return {
      title,
      getvalue,
    };
  },
  template:
    '  <ToggleComponent @clicked="getvalue" classname="primary" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#ffffff" OuterColor="#73e8a3"/> <p> Value: {{ title }}</p>',
});

export const SecondaryRound = () => ({
  components: { ToggleComponent },
  setup() {
    const title = ref("false");
    function getvalue(value) {
      title.value = value;
      console.log(title.value);
    }

    return {
      title,
      getvalue,
    };
  },
  template:
    '  <ToggleComponent @clicked="getvalue" classname="secondary round" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#73e8a3" OuterColor="#ffffff"/> <p> Value: {{ title }}</p> ',
});

export const SecondarySquare = () => ({
  components: { ToggleComponent },
  setup() {
    const title = ref("false");
    function getvalue(value) {
      title.value = value;
      console.log(title.value);
    }

    return {
      title,
      getvalue,
    };
  },
  template:
    '  <ToggleComponent @clicked="getvalue" classname="secondary" OuterWidth="60px" OuterHeight="34px" InnerWidth="26px" InnerHeight="26px" InnerColor="#73e8a3" OuterColor="#ffffff"/> <p> Value: {{ title }}</p>',
});
