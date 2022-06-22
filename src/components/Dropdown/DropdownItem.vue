<template>
  <a
        :href="url"
        @click="click"
      >
        {{content}} 
      </a>
</template>

<script>
import { ref } from 'vue';

export default {
  
  name: "DropdownItem",
  props: {
    content: String,
    href: String,
  }, 
  setup(props) {
    const url = ref(props.href)
    
    function click() {
      window.open(this.$refs.dropdown.children[this.focusedIndex].href,"_self")
    }
    
    return {
      url,
      click
    }
    
  } 
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped> 
 
a {
  color: 	white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #475447;
}

a:focus {
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  background-color: #2f382a;
} 
a:hover {
  background-color: white;
  color: #2f382a;
} 
</style>