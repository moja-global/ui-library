<template>
  <div>
    <div class="navbar">
      <a class="brandlogo" :href="imageHref">
        <img :src="imageSrc" :alt="imageAlt" />
      </a>
      <div class="content">
        <ul class="innercontent">
          <slot></slot>
        </ul>
      </div>
    </div>
  </div>
  <div class="navbar-mobile">
    <a class="brandlogo" :href="imageHref">
      <img :src="imageSrc" :alt="imageAlt" />
    </a>
    <span v-if="!showMenu" type="menu" @click="toggleNavbar()" class="icon">
      <svg
        focusable="false"
        class=""
        data-icon="menu"
        width="1.2em"
        height="1.4em"
        fill="currentColor"
        aria-hidden="true"
        viewBox="64 64 896 896"
      >
        <path
          d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
        ></path>
      </svg>
    </span>
    <span v-if="showMenu" type="close" @click="toggleNavbar()" class="icon">
      <svg
        focusable="false"
        class=""
        data-icon="close"
        width="1.2em"
        height="1.4em"
        fill="currentColor"
        aria-hidden="true"
        viewBox="64 64 896 896"
      >
        <path
          d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
        ></path>
      </svg>
    </span>
  </div>
  <div :class="[showMenu ? 'show' : ' ']" class="content_mobile">
    <ul class="innercontent_mobile">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Navbar",
  props: {
    imageSrc: String,
    imageAlt: String,
    imageHref: String,
    color: {
      type: String,
      default: "white",
    },
    bgColor: {
      type: String,
      default: "#2e382b",
    },
    fontSize: {
      type: String,
      default: "1.1rem",
    },
    imgHeight: {
      type: String,
      default: "auto",
    },
    imgWidth: {
      type: String,
      default: "60px",
    },
  },
  setup() {
    const showMenu = ref(false);
    function toggleNavbar() {
      showMenu.value = !showMenu.value;
    }
    return { showMenu, toggleNavbar };
  },
};
</script>

<style scoped>
.navbar,
.navbar-mobile {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  font-size: v-bind(fontSize);
  background-color: v-bind(bgColor);
  color: v-bind(color);
  width: 100%;
  margin: 0%;
}
.navbar-mobile {
  display: none;
  padding: 0%;
}
.navbar-mobile a {
  padding: 2%;
}
.innercontent:deep(li a),
.innercontent_mobile:deep(li a),
a {
  text-decoration: none;
  white-space: nowrap;
}
.brandlogo {
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  text-decoration: none;
}
.brandlogo img {
  height: v-bind(imgHeight);
  width: v-bind(imgWidth);
}
.innercontent:deep(li a:hover) {
  border-bottom: solid 2px white;
}
.content {
  display: flex;
  align-items: center;
  padding: 0px 34px;
}
.content_mobile {
  top: -1000px;
  display: flex;
  flex-direction: column;
  transition: 1s linear;
  position: relative;
  font-size: v-bind(fontSize);
  background-color: v-bind(bgColor);
  color: v-bind(color);
  width: 100%;
  z-index: -1;
}
.show {
  top: 0px;
}
.innercontent,
.innercontent_mobile {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  transition: 1s linear;
  margin: auto;
  align-items: center;
}
.innercontent:deep(li) {
  padding-left: 1.6rem;
}
.innercontent_mobile:deep(li) {
  padding: 0.8rem;
}
.innercontent_mobile {
  flex-direction: column;
  margin-bottom: 0;
}
.icon {
  font-size: 1.4rem;
  background-color: transparent;
  float: right;
  padding: 4%;
}
@media only screen and (max-width: 768px) {
  .navbar {
    display: none;
  }
  .navbar-mobile {
    display: block;
  }
}
</style>
