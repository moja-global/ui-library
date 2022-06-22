<template>
  <div :class="[toggle ? isActive : '', contentbox]" @click="accordionhandler">
    <div :class="label">{{ Heading }}</div>
    <div :class="content">
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
  },
  setup() {
    const toggle = ref(false);
    const isActive = ref("active");

    function accordionhandler() {
      toggle.value = !toggle.value;
      console.log(toggle.value);
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
  font-size: 2vw;
  background-color: #2e382b;
  padding: 1%;
  color: white;
  border: 1px solid #475447;
}
.content_secondary {
  background-color: white;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: 1s;
}

.content_secondary_dark {
  background-color: #475447;
  color: #f7f5f7;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: 1s;
}
.label_secondary::before {
  content: "+";
  float: right;
  color: white;
  font-weight: 900;
  padding-right: 1%;
}
.active .label_secondary::before {
  content: "-";
  float: right;
  color: white;
  font-weight: 900;
  padding-right: 1%;
}
.active .content_secondary {
  background-color: #f7f5f7;
  height: 16%;
  padding: 1%;
  font-size: 1.4vw;
  transition: 1s;
  margin-bottom: 0.2%;
}
.active .content_secondary_dark {
  background-color: #475447;
  color: #f7f5f7;
  height: 16%;
  padding: 1%;
  font-size: 1.4vw;
  transition: 1s;
  margin-bottom: 0.2%;
}

.label_primary {
  font-size: 2vw;
  background-color: #ffffff;
  padding: 1%;
  color: #000000;
  border-bottom: 1px solid #475447;
}

.label_primary_dark {
  font-size: 2vw;
  padding: 1%;
  background-color: #2e382b;
  color: #f7f5f7;
  border-bottom: 1px solid #475447;
}
.content_primary {
  background-color: white;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: 1s;
}

.content_primary_dark {
  background-color: #2e382b;
  color: #f7f5f7;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: 1s;
}
.label_primary::before {
  content: "+";
  float: left;
  color: #000000;
  font-weight: 900;
  border-radius: 50%;
  margin-right: 2%;
  margin-left: 2%;
}

.label_primary_dark::before {
  content: "+";
  float: left;
  color: #f7f5f7;
  font-weight: 900;
  border-radius: 50%;
  margin-right: 2%;
  margin-left: 2%;
}
.active .label_primary::before {
  content: "-";
  float: left;
  color: #000000;
  font-weight: 900;
  border-radius: 50%;
  margin-right: 2%;
  margin-left: 2%;
}

.active .label_primary_dark::before {
  content: "-";
  float: left;
  color: #f7f5f7;
  font-weight: 900;
  border-radius: 50%;
  margin-right: 2%;
  margin-left: 2%;
}
.active .content_primary {
  background-color: #f7f5f7;
  height: 16%;
  padding: 1%;
  padding-left: 6%;
  font-size: 1.4vw;
  transition: 1s;
  margin-bottom: 0.2%;
}

.active .content_primary_dark {
  background-color: #2e382b;
  color: #f7f5f7;
  height: 16%;
  padding: 1%;
  padding-left: 6%;
  font-size: 1.4vw;
  transition: 1s;
  margin-bottom: 0.2%;
}
</style>
