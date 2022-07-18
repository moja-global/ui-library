import Navbar from "../components/Navbar/NavbarComponent.vue";
import dropdown from "../components/Dropdown/DropdownComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Navbar",
  components: { Navbar, dropdown },
};

export const Primary = () => ({
  components: { Navbar, dropdown },

  template:
    "<Navbar v-bind:content='content' imageSrc='https://community.moja.global/img/logo-light.png'> <li><a style='color: white;  padding-left: 1%;'>Documentation</a></li> <li><a style='color: white;  padding-left: 1%;'>Docs</a></li> <li><a style='color: white;  padding-left: 1%;'>Contact Us</a></li> <li><a  style='color: white;  padding-left: 1%;'>Github</a></li> <li><a style='color: white;  padding-left: 1%;'>Projects</a></li> <li><a style='color: white;  padding-left: 1%;'>About Us</a></li> </Navbar>",
});

export const PrimaryWithOtherComponents = () => ({
  components: { Navbar, dropdown },

  template:
    "<Navbar v-bind:content='content' imageSrc='https://community.moja.global/img/logo-light.png'> <li><dropdown v-bind:content='content' Heading='Dropdown' trigger='hover' color='white' Bgheading='#2f382a' Bgcontent='#475447'></dropdown></li> <li><a style='color: white;  padding-left: 1%;'>Docs</a></li> <li><a style='color: white;  padding-left: 1%;'>Contact Us</a></li> <li><a  style='color: white;  padding-left: 1%;'>Github</a></li> <li><a style='color: white;  padding-left: 1%;'>Projects</a></li> <li><a style='color: white;  padding-left: 1%;'>About Us</a></li></Navbar>",
});
