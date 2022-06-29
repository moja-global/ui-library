import DropdownHover from '../components/Dropdown/DropdownComponentHover.vue';
import DropdownClick from '../components/Dropdown/DropdownComponentClick.vue';
import DropdownItem from '../components/Dropdown/DropdownItem.vue';

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Dropdown',
  component: DropdownHover,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {  
  },
};
 
const Template = (args) => ({ 
  components: { DropdownClick, DropdownHover, DropdownItem }, 
  setup() {
    return { args };
  }   
});

export const Hover = () => <DropdownHover><DropdownItem content="Option One" href="/1"/> <DropdownItem content="Option Two" href="/2"/> <DropdownItem content="Option Three" href="/3"/> <DropdownItem content="Option Four" href="/4"/> </DropdownHover> 

export const Click = () => <DropdownClick><DropdownItem content="Option One" href="/1"/> <DropdownItem content="Option Two" href="/2"/> <DropdownItem content="Option Three" href="/3"/> <DropdownItem content="Option Four" href="/4"/> </DropdownClick> 
 
