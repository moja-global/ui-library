<template>
  <div class="dropdown">
    <button
      href="#"
      class="dropbtn"
      @click="toggleVisibility"  
    >
      {{Heading}}
    </button>
    <div ref="dropdown" :class="[isVisible ? isActive : dropdowncontent ]">
      <a v-for="(item, index) in content" v-bind:key="index" 
        :href="item.href"
        @click="click"
      >
        {{item.option}} 
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
      props: {
        Heading: String,
    content: Array,
    href: String,
  }, 
  setup(props) {
    const url = ref(props.href) 
        const isVisible = ref(false);
      const isActive = ref("isActive"); 
      const dropdowncontent = ref("dropdown-content");

      function toggleVisibility() {
      isVisible.value = !isVisible.value;
      console.log(isVisible.value);
    }  

    function click () {
      window.open(this.$refs.dropdown.children[this.focusedIndex].href,"_self") 
    }

    return {
      isVisible,
      url,
      isActive,
        dropdowncontent,
        toggleVisibility, 
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
a {
  color: 	white;
  padding: 12px 16px;
  font-family: sans-serif;
  text-decoration: none;
  display: block;
  background-color: #475447;
} 

a:hover {
  background-color: white;
  color: #2f382a;
}
</style>