<template>
  <div v-if="isPrimary" class="sponsors">
    <div class="sponsorsheading">Sponsors</div>
    <div>
      <div class="innercontent">
        <a
          v-for="(item, index) in content"
          v-bind:key="index"
          :href="item.href"
          @click="click"
        >
          <div class="sponsor_wrapper">
            <img
              :src="item.src"
              class="sponsor_avatar"
              :alt="item.altattribute"
            />
          </div>
        </a>
      </div>
    </div>
  </div>

  <div v-else class="sponsors">
    <div class="sponsorsheading">Sponsors</div>
    <div class="outercontent">
      <div class="innerleft" v-click-away="closesection">
        <div
          v-for="(item, index) in content"
          v-bind:key="index"
          class="sponsor_wrapper"
          @click="div_show(index + 1)"
        >
          <img
            :src="item.src"
            class="sponsor_avatar"
            :alt="item.altattribute"
          />
        </div>
      </div>
      <div
        v-for="(item, index) in insideContent"
        v-bind:key="index"
        class="innerright"
        :id="item.id"
      >
        <div v-html="item.html"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
    isPrimary: {
      type: Boolean,
      required: true,
    },
    insideContent: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: "#2e382b",
    },
    backgroundColor: {
      type: String,
      default: "#e3f2e8",
    },
    avatarHeight: {
      type: String,
      default: "50px",
    },
    avatarWidth: {
      type: String,
      default: "auto",
    },
    border: {
      type: String,
      default: "1px solid #67ca8f",
    },
    innerbgColor: {
      type: String,
      default: "#cce8f2",
    },
  },
  setup() {
    function div_show(id) {
      const elements = document.getElementsByClassName("innerright");
      for (let i = 0; i < elements.length; i++) {
        let content = elements[i];
        if (i + 1 != id) {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      }
    }

    function closesection() {
      const elements = document.getElementsByClassName("innerright");
      for (let i = 0; i < elements.length; i++) {
        let content = elements[i];
        content.style.display = "none";
      }
    }

    return {
      div_show,
      closesection,
    };
  },
};
</script>

<style scoped>
.sponsors {
  padding: 3rem 1rem;
  text-align: center;
  background-color: v-bind(backgroundColor);
  color: v-bind(color);
}
.sponsorsheading {
  font-size: 200%;
  font-weight: 700;
  line-height: 100%;
  padding: 0 0 30px;
  text-align: center;
}
.innercontent,
.innerleft {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.innerleft,
.innerright {
  background-color: v-bind(innerbgColor);
}
.innerright {
  display: none;
}
.sponsor_wrapper {
  margin: 17px;
  border: v-bind(border);
  border-radius: 5px;
  box-shadow: 0 5px 15px rgb(0 0 0 / 55%);
  display: flex;
  padding: 5px;
}

.sponsor_avatar {
  width: v-bind(avatarWidth);
  height: v-bind(avatarHeight);
  border-radius: 5px;
}
.outercontent {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (min-width: 1024px) {
  .innerleft {
    width: 40%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .innerright {
    width: 40%;
    margin-left: 5%;
    margin-right: 5%;
  }
}
@media only screen and (min-width: 833px) and (max-width: 1024px) {
  .innerleft {
    width: 50%;
    margin: auto;
  }
  .innerright {
    width: 40%;
    margin-left: 4%;
    margin-right: 4%;
  }
}
@media only screen and (max-width: 833px) {
  .innerleft {
    width: 100%;
    margin: auto;
  }
  .innerright {
    width: 60%;
    margin-top: 4%;
    margin-right: 4%;
  }
}
</style>
