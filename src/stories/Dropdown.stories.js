import DropdownHover from '../components/Dropdown/DropdownComponentHover.vue';
import DropdownClick from '../components/Dropdown/DropdownComponentClick.vue'; 

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Dropdown',
  components: { DropdownClick, DropdownHover } 
}; 

export const Hover = () => ({ 
  components: { DropdownHover },
  setup() {
    const content=[{
      option: "Option One",
      href: "/1"
    },
    {
      option: "Option Two",
      href: "/2"
    },
    {
      option: "Option Three",
      href: "/3"
    }
    ]

    return {
      content
    }
  },
  template: '<DropdownHover v-bind:content="content" Heading="Dropdown"></DropdownHover> ', 
}) 

export const Click = ( ) => ({ 
  components: { DropdownClick },
  setup() {
    const content=[{
      option: "Option One",
      href: "/1"
    },
    {
      option: "Option Two",
      href: "/2"
    },
    {
      option: "Option Three",
      href: "/3"
    }
    ]

    return {
      content
    }
  },
  template: '<DropdownClick v-bind:content="content" Heading="Dropdown"></DropdownClick> ', 
}) 