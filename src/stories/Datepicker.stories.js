import DatePicker from "../../mojaglobal-ui/src/components/DatePicker/DatePicker.vue";
import { ref } from "vue";
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/DatePicker",
  components: { DatePicker },
};

export const mandatoryProp = () => ({
  components: { DatePicker },
  setup() {
    const baseStyle = ref({ width: "500px" });

    const bindDate = ref("");
    function getDate(value) {
      bindDate.value = value;
    }
    function styles() {
      return { maxWidth: "500px" };
    }
    return {
      bindDate,
      getDate,
      styles,
    };
  },
  template: `<div :style="styles()"><DatePicker @changeDate="getDate"/><p>{{bindDate}}</P></div>`,
});

export const allProps = () => ({
  components: { DatePicker },
  setup() {
    const bindDate = ref("");
    function getDate(value) {
      bindDate.value = value;
    }
    function styles() {
      return { maxWidth: "500px" };
    }

    return {
      bindDate,
      getDate,
      styles,
    };
  },
  template: `<div :style="styles()"><DatePicker @changeDate="getDate" startYear="1924" endYear="2022" placeholder="Select the date"/><p>{{bindDate}}</P></div>`,
});
