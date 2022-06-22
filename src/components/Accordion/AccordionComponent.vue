<template>
  <div :class="classname">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AccordionComponent",
  props: {
    classname: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
.container80 {
  width: 80vw;
}
.container60 {
  width: 60vw;
}

.container40 {
  width: 40vw;
}

.container20 {
  width: 20vw;
}
</style>
