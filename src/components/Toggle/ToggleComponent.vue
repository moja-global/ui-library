<template>
  <label class="togglebox">
    <input type="checkbox" />
    <span :class="classname"></span>
  </label>
</template>

<script>
export default {
  name: "ToggleComponent",
  props: {
    classname: String,
    OuterWidth: {
      type: String,
      default: "60px",
    },
    OuterHeight: {
      type: String,
      default: "34px",
    },
    InnerWidth: {
      type: String,
      default: "26px",
    },
    InnerHeight: {
      type: String,
      default: "26px",
    },
    InnerColor: {
      type: String,
      default: "#ffffff",
    },
    OuterColor: {
      type: String,
      default: "#73e8a3",
    },
  },
};
</script>

<style scoped>
.togglebox {
  position: relative;
  display: inline-block;
  width: v-bind(OuterWidth);
  height: v-bind(OuterHeight);
}

.togglebox input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The toggle */
.primary {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: v-bind(OuterColor);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.primary:before {
  position: absolute;
  content: "";
  height: v-bind(InnerHeight);
  width: v-bind(InnerWidth);
  left: 4px;
  bottom: 4px;
  background-color: v-bind(InnerColor);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .primary {
  background-color: v-bind(OuterColor);
}

input:focus + .primary {
  box-shadow: 0 0 1px v-bind(OuterColor);
}

input:checked + .primary:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded toggles */
.primary.round {
  border-radius: 34px;
}

.primary.round:before {
  border-radius: 50%;
}

.secondary {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: v-bind(OuterColor);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border: 2px solid v-bind(InnerColor);
}

.secondary:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  top: 2px;
  background-color: v-bind(InnerColor);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .secondary {
  background-color: v-bind(OuterColor);
}

input:focus + .secondary {
  box-shadow: 0 0 1px v-bind(InnerColor);
}

input:checked + .secondary:before {
  -webkit-transform: translateX(22px);
  -ms-transform: translateX(22px);
  transform: translateX(22px);
}

/* Rounded toggles */
.secondary.round {
  border-radius: 34px;
}

.secondary.round:before {
  border-radius: 50%;
}
</style>
