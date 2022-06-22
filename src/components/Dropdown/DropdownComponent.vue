<template>
  <div class="dropdown">
    <button
      href="#"
      class="dropbtn" 
    >
      Dropdown
    </button>
    <div v-if="isVisible" ref="dropdown" class="dropdown-content">
      <slot></slot> 
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isVisible = ref(true);

    function click () {
      window.open(this.$refs.dropdown.children[this.focusedIndex].href,"_self") 
    }

    return {
      isVisible,
      click
    }
  } 
};
</script>

<style scoped> 
.dropbtn {
  background-color: #2f382a;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
} 
.dropdown {
  background-color: #2f382a;
  position: relative;
  display: inline-block;
} 
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px #475447;
  z-index: 1;
} 
.dropdown:hover .dropdown-content {
  display: block;
} 
.dropdown:hover .dropbtn {
  background-color: #2f382a;
}
</style>