<template>
  <div :class="[toggle ? isActive : '']" @click="accordionhandler($event)">
    <div :class="[label, 'label_box']">{{ Heading }}</div>
    <div :class="content" class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "AccordionItem",
  props: {
    Heading: String,
    label: String,
    content: String,
    fscontent: {
      type: String,
      default: "1.4vw",
    },
    fsheading: {
      type: String,
      default: "2vw",
    },
    Bgheading: {
      type: String,
      default: "#2e382b",
    },
    headingcolor: {
      type: String,
      default: "#ffffff",
    },
    Bgcontent: {
      type: String,
      default: "#475447",
    },
    contentcolor: {
      type: String,
      default: "#f7f5f7",
    },
    bordercolor: {
      type: String,
      default: "#475447",
    },
  },
  setup() {
    const toggle = ref(false);
    const isActive = ref("active");

    function accordionhandler(e) {
      toggle.value = !toggle.value;
      e.preventDefault();
      let content = e.target.nextElementSibling;
      if (!toggle.value) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }

    return {
      toggle,
      accordionhandler,
      isActive,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label_secondary {
  font-size: v-bind(fsheading);
  font-family: sans-serif;
  background-color: v-bind(Bgheading);
  padding: 1%;
  padding-left: 2%;
  color: v-bind(headingcolor);
  border: 1px solid v-bind(bordercolor);
}

.content_secondary {
  background-color: v-bind(Bgcontent);
}

.content_secondary_dark {
  background-color: v-bind(Bgcontent);
  color: v-bind(contentcolor);
}

.label_secondary::before {
  content: "+";
  float: right;
  color: v-bind(headingcolor);
  padding-right: 1%;
}

.active .label_secondary::before {
  content: "-";
  float: right;
  color: v-bind(headingcolor);
  padding-right: 1%;
}

.active .content_secondary {
  background-color: v-bind(Bgcontent);
}

.active .content_secondary_dark {
  background-color: v-bind(Bgcontent);
  color: v-bind(contentcolor);
}

.label_primary {
  font-size: v-bind(fsheading);
  font-family: sans-serif;

  background-color: #ffffff;
  padding: 1%;
  color: v-bind(headingcolor);
  border-bottom: 1px solid v-bind(bordercolor);
}

.label_primary_dark {
  font-size: v-bind(fsheading);
  font-family: sans-serif;

  padding: 1%;
  background-color: v-bind(Bgheading);
  color: v-bind(headingcolor);
  border-bottom: 1px solid v-bind(bordercolor);
}

.content_primary {
  background-color: v-bind(Bgcontent);
}

.content_primary_dark {
  background-color: v-bind(Bgheading);
  color: v-bind(contentcolor);
}

.label_primary::before {
  content: "+";
  float: left;
  color: v-bind(headingcolor);
  padding-left: 1%;

  border-radius: 50%;
  margin-right: 2%;
  width: 10px;
}

.label_primary_dark::before {
  content: "+";
  float: left;
  color: v-bind(headingcolor);
  padding-left: 1%;

  border-radius: 50%;
  margin-right: 2%;
  width: 10px;
}

.active .label_primary::before {
  content: "-";
  float: left;
  color: v-bind(headingcolor);
  padding-left: 1%;
  border-radius: 50%;
  margin-right: 2%;
  width: 10px;
}

.active .label_primary_dark::before {
  content: "-";
  float: left;
  color: v-bind(headingcolor);
  padding-left: 1%;
  border-radius: 50%;
  margin-right: 2%;
  width: 10px;
}

.active .content_primary {
  background-color: v-bind(Bgcontent);
}

.active .content_primary_dark {
  background-color: v-bind(Bgheading);
  color: v-bind(contentcolor);
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  font-size: v-bind(fscontent);
  font-family: sans-serif;
}

.label_box {
  cursor: pointer;
}
</style>
