<template>
  <div :class="[centerItem ? 'center' : ' ', 'container']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AccordionComponent",
  props: {
    width: {
      type: String,
      default: "80vw",
    },
    centerItem: {
      type: Boolean,
      default: "true",
    },
  },
  setup() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}

.container {
  width: v-bind(width);
}
</style>
