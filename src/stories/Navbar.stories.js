import Navbar from "../../mojaglobal-ui/src/components/Navbar/NavbarComponent.vue";
import dropdown from "../../mojaglobal-ui/src/components/Dropdown/DropdownComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Navbar",
  components: { Navbar, dropdown },
};

export const Primary = () => ({
  components: { Navbar, dropdown },

  template:
    "<Navbar imageSrc='https://community.moja.global/img/logo-light.png'> <li><a style='color: white;  padding-left: 1%;'>Documentation</a></li> <li><a style='color: white;  padding-left: 1%;'>Docs</a></li> <li><a style='color: white;  padding-left: 1%;'>Contact Us</a></li> <li><a  style='color: white;  padding-left: 1%;'>Github</a></li> <li><a style='color: white;  padding-left: 1%;'>Projects</a></li> <li><a style='color: white;  padding-left: 1%;'>About Us</a></li> </Navbar>",
});

export const PrimaryWithOtherComponents = () => ({
  components: { Navbar, dropdown },
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
  template:
    "<Navbar imageSrc='https://community.moja.global/img/logo-light.png'> <li><dropdown v-bind:content='content' Heading='Dropdown ⌵ ' trigger='hover' color='white' Bgheading='#2f382a' Bgcontent='#475447'>n</dropdown></li> <li><a href='/1' style='color: white;  padding-left: 1%;'>Docs</a></li> <li><a style='color: white;  padding-left: 1%;'>Contact Us</a></li> <li><a  style='color: white;  padding-left: 1%;'>Github</a></li> <li><a style='color: white;  padding-left: 1%;'>Projects</a></li> <li><a style='color: white;  padding-left: 1%;'>About Us</a></li></Navbar>",
});

PrimaryWithOtherComponents.parameters = {
  layout: "fullscreen",
};

Primary.parameters = {
  layout: "fullscreen",
};
