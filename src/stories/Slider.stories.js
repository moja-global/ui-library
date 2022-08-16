import Slider from "../../mojaglobal-ui/src/components/Slider/Slider.vue";
import { ref } from "vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Slider",
  components: { Slider },
};

export const Primary = () => ({
  components: { Slider },
  setup() {
    const title = ref("22");
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
    '  <Slider classname="primary" PrimaryColor="#2E382B" OuterWidth="356px" OuterHeight="7px" InnerWidth="16px" InnerHeight="16px" minimum="0" maximum="100" value="22" @clicked="getvalue"/> <br> <p> Value: {{ title }}</p>',
});

export const Secondary = () => ({
  components: { Slider },
  setup() {
    const title = ref("22");
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
    '  <Slider classname="secondary" OuterColor="#73E8A3" PrimaryColor="#2E382B" OuterWidth="356px" OuterHeight="7px" InnerWidth="16px" InnerHeight="16px" minimum="0" maximum="100" value="22"  @clicked="getvalue"/> <br> <p> Value: {{ title }}</p>',
});
