<template>
  <button :type="type" :class="classname"><slot></slot></button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    type: String,
    classname: {
      type: String,
      default: "primarywh",
    },
    BackgroundColor: {
      type: String,
      default: "#ffffff",
    },
    Color: {
      type: String,
      default: "#475447",
    },
    Padding: {
      type: String,
      default: "0.4rem 1.3rem",
    },
    MinWidth: {
      type: String,
      default: "110px",
    },
    FontSize: {
      type: String,
      default: "15px",
    },
  },
};
</script>

<style scoped>
.primary,
.primarywh {
  padding: v-bind(Padding);
  background-color: transparent;
  border: 1px solid v-bind(Color);
  border-radius: 5px;
  color: v-bind(Color);
  width: auto;
  min-width: v-bind(MinWidth);
  font-family: "DM Sans", sans-serif;
  font-size: v-bind(FontSize);
  transition: all 0.5s;
}

.hovered {
  color: v-bind(BackgroundColor);
  background-color: v-bind(Color);
}

.primarywh:hover {
  color: v-bind(BackgroundColor);
  background-color: v-bind(Color);
}

.round {
  border-radius: 212px;
}
</style>
