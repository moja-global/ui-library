<template>
  <input
    type="range"
    :class="classname"
    :min="minimum"
    :max="maximum"
    :value="value"
    @input="InputChange"
  />
</template>

<script>
export default {
  name: "SliderComponent",
  props: {
    classname: {
      type: String,
      default: "primary",
    },
    minimum: {
      type: String,
      default: "0",
    },
    maximum: {
      type: String,
      default: "100",
    },
    value: {
      type: String,
      default: "22",
    },
    OuterWidth: {
      type: String,
      default: "356px",
    },
    OuterHeight: {
      type: String,
      default: "7px",
    },
    InnerWidth: {
      type: String,
      default: "16px",
    },
    InnerHeight: {
      type: String,
      default: "16px",
    },
    InnerColor: {
      type: String,
      default: "#2E382B",
    },
    OuterColor: {
      type: String,
      default: "#F7F5F7",
    },
  },
  setup(props, { emit }) {
    function InputChange(e) {
      emit("clicked", e.target.value);
    }
    return {
      InputChange,
    };
  },
};
</script>
<style scoped>
.primary {
  width: v-bind(OuterWidth);
  accent-color: v-bind(InnerColor);
}

.secondary {
  height: v-bind(OuterHeight);
  width: v-bind(OuterWidth);
  -webkit-appearance: none;
  background: v-bind(OuterColor);
}

.secondary::-webkit-slider-thumb {
  height: v-bind(InnerHeight);
  width: v-bind(InnerWidth);
  border-radius: 50%;
  -webkit-appearance: none;
  background: v-bind(InnerColor);
}
</style>
