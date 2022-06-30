<template>
  <div>Ui Library</div>
  <DropdownHover
    v-bind:content="content"
    Heading="Dropdown"
    :isClickable="true"
  ></DropdownHover>
</template>

<script>
import DropdownHover from "./components/Dropdown/DropdownComponentHover.vue";

export default {
  name: "App",
  components: { DropdownHover },
  setup() {
    const content = [
      {
        option: "Option One",
        href: "/1",
      },
      {
        option: "Option Two",
        href: "/2",
      },
      {
        option: "Option Three",
        href: "/3",
      },
    ];

    return {
      content,
    };
  },
};
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
