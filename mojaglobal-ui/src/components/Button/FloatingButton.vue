<template>
  <button :type="type" :class="classname"><slot></slot></button>
</template>

<script>
export default {
  name: "FloatingButton",
  props: {
    type: String,
    classname: String,
  },
};
</script>
<style scoped>
.circular {
  height: 46px;
  width: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.42857;
  border: none;
  box-shadow: #fff;
}

.turquoise_green_circular {
  background-color: #73e8a3;
  color: #000000;
}

.earth_green_circular {
  background-color: #34A56F;
  color: white;
}

.stone_grey_circular {
  background-color: #e5e5e5;
  color: #000000;
}

.pebble_green_circular {
  background-color: #e3f2e8;
  color: #000000;
}
</style>
