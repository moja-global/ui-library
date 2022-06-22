<template>
  <div>Ui Library</div>
  <h1>Dropdown Component</h1>
<DropdownComponent><DropdownItem content="option one" href="/1"/> <DropdownItem content="option one" href="/2"/> <DropdownItem content="option one" href="/3"/> <DropdownItem content="option one" href="/4"/> </DropdownComponent>
<br>
<DropdownComponenClick><DropdownItem content="option one" href="/1"/> <DropdownItem content="option one" href="/2"/> <DropdownItem content="option one" href="/3"/> <DropdownItem content="option one" href="/4"/> </DropdownComponenClick>
</template>

<script>
import DropdownComponent from './components/Dropdown/DropdownComponent.vue'
import DropdownComponenClick from './components/Dropdown/DropdownComponentClick.vue' 
import DropdownItem from './components/Dropdown/DropdownItem.vue'

export default {
  name: 'App',
  components: {
     DropdownComponent,
     DropdownComponenClick,
     DropdownItem
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
