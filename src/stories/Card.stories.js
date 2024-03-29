import CardComponent from "../../mojaglobal-ui/src/components/Card/Card.vue";

export default {
  title: "Components/Card",
  component: CardComponent,
};

export const Normal = () => ({
  components: { CardComponent },

  template:
    "<CardComponent ><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >",
});

export const Class = () => ({
  components: { CardComponent },

  template:
    '<CardComponent classname="margin_1 hover"><p> Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >',
});

export const FunctionalStyling = () => ({
  components: { CardComponent },
  setup() {
    function cardStyle() {
      return { backgroundColor: "#E3F2E8", display: "flex" };
    }

    return { cardStyle };
  },

  template:
    '<CardComponent :style="cardStyle"><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >',
});

export const Styling = () => ({
  components: { CardComponent },

  template:
    '<CardComponent :style="{display:`flex`}"><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >',
});

export const InbuiltEffects = () => ({
  components: { CardComponent },
  template:
    "<CardComponent hoverEffect=true noShadow=true defaultBorder=true><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent >",
});
