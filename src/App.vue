<template>

<h1>Accordion Component</h1>
  
    <AccordionComponent classname="container80 center"
      ><AccordionItem
        Heading="List One"
        label="label_secondary"
        content="content_secondary_dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      <AccordionItem
        Heading="List One"
        label="label_secondary"
        content="content_secondary_dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      </AccordionComponent
    >
    <br>
    <AccordionComponent classname="container80 center"
    >
      <AccordionItem
        Heading="List Two"
        label="label_secondary"
        content="content_secondary"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      <AccordionItem
        Heading="List Two"
        label="label_secondary"
        content="content_secondary"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      </AccordionComponent
    >
    <br> 
    <AccordionComponent classname="container80 center"
      ><AccordionItem
        Heading="List One"
        label="label_primary_dark"
        content="content_primary_dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      <AccordionItem
        Heading="List One"
        label="label_primary_dark"
        content="content_primary_dark"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      </AccordionComponent
    >
    <br>
    <AccordionComponent classname="container80 center"
    >
      <AccordionItem
        Heading="List Two"
        label="label_primary"
        content="content_primary"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      <AccordionItem
        Heading="List Two"
        label="label_primary"
        content="content_primary"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          saepe necessitatibus laboriosam architecto tempore a dicta quod sunt
          doloribus perspiciatis!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas,
          hic, id reiciendis doloremque quos possimus enim aut voluptates quo
          praesentium accusamus cumque aliquid beatae esse nesciunt. Vel
          possimus aliquid facere?
        </p>
      </AccordionItem>
      </AccordionComponent
    >
    <br> 
</template>

<script>
import AccordionComponent from "./components/Accordion/AccordionComponent.vue";
import AccordionItem from "./components/Accordion/AccordionItem.vue";

export default {
  name: "App",
  components: {
    AccordionComponent,
    AccordionItem,
  },
};
</script>

<style>
#app {
  font-family: "DM Sans";
}
</style>
