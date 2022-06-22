<template>
  <div class="dropdown">
    <button
      href="#"
      class="dropbtn"
      @click="toggleVisibility"  
    >
      Dropdown
    </button>
    <div ref="dropdown" :class="[isVisible ? isActive : dropdowncontent ]">
      <slot></slot> 
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isVisible = ref(false);
      const isActive = ref("isActive"); 
      const dropdowncontent = ref("dropdown-content");

      function toggleVisibility() {
      isVisible.value = !isVisible.value;
      console.log(isVisible.value);
    }  

    return {
        isVisible,
        isActive,
        dropdowncontent,
        toggleVisibility, 
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

.dropdown-content, .isActive { 
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px #475447;
  z-index: 1;
} 

.dropdown-content {
  display: none; 
}

.isActive { 
    display:block;
} 
.dropdown:hover .dropbtn {
  background-color: #2f382a;
}
</style>