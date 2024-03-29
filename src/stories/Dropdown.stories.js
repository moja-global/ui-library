import Dropdown from "../../mojaglobal-ui/src/components/Dropdown/DropdownComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Components/Dropdown",
  components: { Dropdown },
};

export const Hover = () => ({
  components: { Dropdown },
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
    '<Dropdown v-bind:content="content" Heading="Dropdown" trigger="hover" color="white" Bgheading="#2f382a" Bgcontent="#475447"></Dropdown>',
});

export const Click = () => ({
  components: { Dropdown },
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
    '<Dropdown v-bind:content="content" Heading="Dropdown" trigger="click" color="white" Bgheading="#2f382a" Bgcontent="#475447"></Dropdown>',
});
