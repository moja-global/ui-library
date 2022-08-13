<template>
  <div v-if="isClickTrigger" class="dropdownclick" v-click-away="closedropdown">
    <button href="#" class="dropbtnclick" @click="toggleVisibility">
      {{ Heading }}
    </button>
    <div ref="dropdown" :class="[isVisible ? isActive : dropdowncontent]">
      <a
        v-for="(item, index) in content"
        v-bind:key="index"
        :href="item.href"
        @click="click"
      >
        {{ item.option }}
      </a>
    </div>
  </div>

  <div v-else class="dropdown">
    <button href="#" class="dropbtn">
      {{ Heading }}
    </button>
    <div v-if="isVisible" ref="dropdown" class="dropdown-content">
      <a
        v-for="(item, index) in content"
        v-bind:key="index"
        :href="item.href"
        @click="click"
      >
        {{ item.option }}
      </a>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  props: {
    Heading: String,
    content: Array,
    href: String,
    trigger: String,
    color: {
      type: String,
      default: "#f9f9f9",
    },
    Bgheading: {
      type: String,
      default: "#2f382a",
    },
    Bgcontent: {
      type: String,
      default: "#475447",
    },
    wdcontent: {
      type: String,
      default: "160px",
    },
    pdheading: {
      type: String,
      default: "16px",
    },
    fsheading: {
      type: String,
      default: "16px",
    },
    pdoption: {
      type: String,
      default: "12px 16px",
    },
    fsoption: String,
  },
  setup(props) {
    const isVisible = ref(true);
    const isActive = ref("isActive");
    const dropdowncontent = ref("dropdown-content");
    const isClickTrigger = ref(props.trigger === "click");

    function toggleVisibility() {
      isVisible.value = !isVisible.value;
      console.log(isVisible.value);
    }
    function closedropdown() {
      isVisible.value = false;
      console.log(isVisible.value);
    }
    function click() {
      onMounted(() => {
        window.open(
          this.$refs.dropdown.children[this.focusedIndex].href,
          "_self"
        );
      });
    }

    return {
      isVisible,
      isActive,
      dropdowncontent,
      toggleVisibility,
      click,
      closedropdown,
      isClickTrigger,
    };
  },
};
</script>

<style scoped>
.dropbtn,
.dropbtnclick {
  background-color: v-bind(Bgheading);
  color: v-bind(color);
  padding: v-bind(pdheading);
  font-size: v-bind(fsheading);
  border: none;
  cursor: pointer;
}
.dropdown,
.dropdownclick {
  background-color: v-bind(Bgheading);
  position: relative;
  display: inline-block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: v-bind(color);
  min-width: v-bind(wdcontent);
  box-shadow: 0px 8px 16px 0px v-bind(Bgcontent);
  z-index: 1;
}
.dropdown-contentclick,
.isActive {
  position: absolute;
  background-color: v-bind(color);
  min-width: v-bind(wdcontent);
  box-shadow: 0px 8px 16px 0px v-bind(Bgcontent);
  z-index: 1;
}

.dropdown-contentclick {
  display: none;
}

.isActive {
  display: block;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .dropbtn {
  background-color: v-bind(Bgheading);
}

a {
  color: v-bind(color);
  padding: v-bind(pdoption);
  font-size: v-bind(fsoption);
  font-family: sans-serif;
  text-decoration: none;
  display: block;
  background-color: v-bind(Bgcontent);
}

a:hover {
  background-color: v-bind(color);
  color: v-bind(Bgheading);
}
</style>
