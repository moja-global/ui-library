<template>
  <div v-if="secondary" class="secondary">
    <input
      type="range"
      class="range"
      :min="minimum"
      :max="maximum"
      :value="value"
      @input="InputChange"
    />
    <div class="track">
      <div class="innertrack"></div>
    </div>
    <div class="thumb"></div>
  </div>
  <input
    v-else
    type="range"
    class="primary"
    :min="minimum"
    :max="maximum"
    :value="value"
    @input="InputChange"
  />
</template>

<script>
import { ref } from "vue";

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
      default: "262px",
    },
    OuterHeight: {
      type: String,
      default: "7px",
    },
    PrimaryColor: {
      type: String,
      default: "#2E382B",
    },
    ActiveBarColor: {
      type: String,
      default: "#2E382B",
    },
    ThumbColor: {
      type: String,
      default: "#ffeb3b",
    },
    BarColor: {
      type: String,
      default: "#73E8A3",
    },
    TrackHeight: {
      type: String,
      default: "10px",
    },
    ThumbDimension: {
      type: String,
      default: "20px",
    },
  },
  setup(props, { emit }) {
    const leftvalue = ref(props.value);
    const leftpos = ref(leftvalue.value + "%");
    const leftposnegative = ref("-" + leftvalue.value + "%");
    const secondary = ref(props.classname === "secondary");
    function InputChange(e) {
      leftvalue.value = e.target.value;
      leftpos.value = leftvalue.value + "%";
      leftposnegative.value = "-" + leftvalue.value + "%";
      emit("clicked", e.target.value);
    }
    return {
      InputChange,
      leftvalue,
      leftpos,
      leftposnegative,
      secondary,
    };
  },
};
</script>
<style scoped>
.secondary {
  width: v-bind(OuterWidth);
  position: absolute;
}

.range {
  width: 100%;
  cursor: pointer;
  opacity: 0;
}

.track {
  width: 100%;
  height: v-bind(TrackHeight);
  border-radius: 28px;
  background: v-bind(BarColor);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.innertrack {
  width: v-bind(leftpos);
  height: 100%;
  border-radius: 28px;
  background: v-bind(ActiveBarColor);
}

.thumb {
  width: v-bind(ThumbDimension);
  height: v-bind(ThumbDimension);
  background: v-bind(ThumbColor);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: v-bind(leftpos);
  transform: translate(v-bind(leftposnegative), -50%);
  pointer-events: none;
}
.primary {
  width: v-bind(OuterWidth);
  accent-color: v-bind(PrimaryColor);
  cursor: pointer;
}
</style>
