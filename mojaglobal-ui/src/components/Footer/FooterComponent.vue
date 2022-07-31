<template>
  <div v-if="isPrimary" class="footercontainer">
    <div class="upper">
      <div class="logo">
        <a :href="logolink">
          <img :src="logosrc" :alt="logoalt" />
        </a>
      </div>
      <div class="upperright">
        <div
          class="content"
          v-for="(item, index) in content"
          v-bind:key="index"
        >
          <div class="title">{{ item.title }}</div>
          <ul>
            <li
              v-for="(subitem, index) in item.subitems"
              v-bind:key="index"
              class="footer__item"
            >
              <a
                :href="subitem.href"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link-item"
                ><span>{{ subitem.name }} </span></a
              >
            </li>
          </ul>
        </div>
        <div class="socialmedia">
          <div class="title">{{ socialsheading }}</div>
          <ul class="socialicons">
            <li v-for="(social, index) in socials" v-bind:key="index">
              <a :href="social.href" v-html="social.html"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lower">
      <div class="lowercontent">{{ lowercontent }}</div>
    </div>
  </div>
  <div v-else class="footercontainer">
    <div class="upper">
      <div class="upperright">
        <div
          class="content"
          v-for="(item, index) in content"
          v-bind:key="index"
        >
          <div class="title">{{ item.title }}</div>
          <ul>
            <li
              v-for="(subitem, index) in item.subitems"
              v-bind:key="index"
              class="footer__item"
            >
              <a
                :href="subitem.href"
                target="_blank"
                rel="noopener noreferrer"
                class="footer__link-item"
                ><span>{{ subitem.name }} </span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lowersecondary">
      <div class="logosecondary">
        <a :href="logolink">
          <img :src="logosrc" :alt="logoalt" />
        </a>
      </div>

      <div class="socialmediasecondary">
        <div class="title">{{ socialsheading }}</div>
        <ul class="socialicons">
          <li v-for="(social, index) in socials" v-bind:key="index">
            <a :href="social.href" v-html="social.html"></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="lower">
      <div class="lowercontent">{{ lowercontent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    content: Array,
    logolink: String,
    logosrc: String,
    logoalt: String,
    socials: Array,
    socialsheading: String,
    isPrimary: Boolean,
    lowercontent: String,
    Color: {
      type: String,
      default: "#bdc3c7",
    },
    bgColor: {
      type: String,
      default: "#2e382b",
    },
    fontSize: {
      type: String,
      default: "0.86rem",
    },
    imgHeight: {
      type: String,
      default: "91px",
    },
    imgWidth: {
      type: String,
      default: "116px",
    },
    titlefontSize: {
      type: String,
      default: "17px",
    },
    titlefontWeight: {
      type: String,
      default: "500",
    },
    titlefontColor: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style scoped>
.footercontainer {
  background-color: v-bind(bgColor);
  color: v-bind(Color);
  font-size: v-bind(fontSize);
  padding: 2%;
}
.logo {
  display: flex;
  justify-content: center;
}
.logosecondary {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-right: 10%;
}
.logo img,
.logosecondary img {
  height: v-bind(imgHeight);
  width: v-bind(imgWidth);
}
.upper {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  padding: 0 2%;
}
.upperright {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 2%;
  width: 66%;
}
.content {
  padding: 2%;
}
.title {
  font-size: v-bind(titlefontSize);
  font-weight: v-bind(titlefontWeight);
  color: v-bind(titlefontColor);
  height: fit-content;
  margin-bottom: 1%;
}
ul {
  list-style: none;
  margin-top: 10%;
  padding-left: 0;
}
a {
  color: v-bind(Color);
  text-decoration: none;
  font-weight: lighter;
}

a:hover {
  color: v-bind(titlefontColor);
}

.socialicons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 1px;
  width: fit-content;
  margin-bottom: 0px;
}
.socialmedia {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2% 0%;
}
.socialmedia li,
socialmediasecondary li {
  margin-right: 5px;
  list-style: none;
}
.socialmediasecondary {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin-left: 10%;
}
.lower {
  text-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  margin: 6%;
  margin-bottom: 0%;
}
.lowersecondary {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  margin-top: 2%;
}
.lowercontent {
  font-size: 16px;
  color: v-bind(titlefontColor);
  height: fit-content;
  position: absolute;
  bottom: 0px;
}
@media screen and (max-width: 1024px) {
  .content {
    margin: 1%;
  }
  .logo {
    width: 44%;
    margin: 1rem;
  }
}
@media screen and (max-width: 716px) {
  .title {
    text-align: center;
  }
}
@media screen and (max-width: 425px) {
  .logosecondary {
    width: 100%;
    margin: auto;
  }
  .socialmediasecondary {
    width: 100%;
    margin: 0%;
    margin-bottom: 6%;
  }
  .lowersecondary {
    margin: 0%;
  }
  .lower {
    margin: 10%;
    margin-bottom: 0%;
  }
}
@media screen and (min-width: 1024px) {
  .logo {
    width: 18%;
    margin-bottom: 2%;
    margin-top: 1rem;
  }
}
</style>
