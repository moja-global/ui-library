<template>
  <div :class="[toggle ? isActive : '']">
    <div :class="[label, 'label_box']" @click="accordionhandler($event)">
      {{ heading }}
    </div>
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
    heading: String,
    label: String,
    content: String,
    fsContent: {
      type: String,
      default: "1.4vw",
    },
    fsHeading: {
      type: String,
      default: "2vw",
    },
    bgHeading: {
      type: String,
      default: "#2e382b",
    },
    headingColor: {
      type: String,
      default: "#ffffff",
    },
    bgContent: {
      type: String,
      default: "#475447",
    },
    contentColor: {
      type: String,
      default: "#f7f5f7",
    },
    borderColor: {
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
  font-size: v-bind(fsHeading);
  font-family: sans-serif;
  background-color: v-bind(bgHeading);
  padding: 1%;
  padding-left: 2%;
  color: v-bind(headingColor);
  border: 1px solid v-bind(borderColor);
}

.content_secondary,
.content_secondary_dark {
  background-color: v-bind(bgContent);
}

.content_secondary_dark {
  color: v-bind(contentColor);
}

.label_secondary::before {
  content: "+";
  float: right;
  color: v-bind(headingColor);
  padding-right: 1%;
}

.active .label_secondary::before {
  content: "-";
}

.active .content_secondary,
.active .content_secondary_dark {
  background-color: v-bind(bgContent);
}

.active .content_secondary_dark {
  color: v-bind(contentColor);
}

.label_primary,
.label_primary_dark {
  font-size: v-bind(fsHeading);
  font-family: sans-serif;

  background-color: v-bind(bgHeading);
  padding: 1%;
  color: v-bind(headingColor);
  border-bottom: 1px solid v-bind(borderColor);
}

.content_primary {
  background-color: v-bind(bgContent);
}

.content_primary_dark {
  background-color: v-bind(bgContent);
  color: v-bind(contentColor);
}

.label_primary::before,
.label_primary_dark::before {
  content: "+";
  float: left;
  border-radius: 50%;
  margin-right: 2%;
  width: 10px;
}

.active .label_primary::before,
.active .label_primary_dark::before {
  content: "-";
}

.active .content_primary {
  background-color: v-bind(bgContent);
}

.active .content_primary_dark {
  background-color: v-bind(bgContent);
  color: v-bind(contentColor);
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  font-size: v-bind(fsContent);
  font-family: sans-serif;
}

.label_box {
  cursor: pointer;
}
</style>
