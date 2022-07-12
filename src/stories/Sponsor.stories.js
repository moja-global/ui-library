import Sponsors from "../components/Sponsors/SponsorsComponent.vue";

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/SponsorSection",
  components: { Sponsors },
};

export const Primary = () => ({
  components: { Sponsors },
  setup() {
    const content = [
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
    ];

    return {
      content,
    };
  },
  template:
    '<Sponsors v-bind:content="content" v-bind:insidecontent="insidecontent" Primary="true" ></Sponsors>',
});

export const Secondary = () => ({
  components: { Sponsors },
  setup() {
    const content = [
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
      {
        altattribute: "Linux Foundation",
        href: "https://www.linuxfoundation.org/",
        src: "https://www.linuxfoundation.org/wp-content/uploads/lf_logo.svg",
      },
    ];

    const insidecontent = [
      {
        id: "1",
        html: "<h1 style='padding:6px'> The Linux Foundation </h1> <p style='color: white; padding: 1rem 1rem; color: #2E382B'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolorem dolorum modi ipsam. Nihil, hic. Esse assumenda explicabo cumque libero quasi pariatur perspiciatis nisi nemo labore facilis! Similique doloremque, praesentium consequatur labore, laboriosam culpa vero voluptas ipsum at provident fugiat. 2 </p> <button  style='margin-bottom:6px'>Check More</button>",
      },
      {
        id: "2",
        altattribute: "Linux Foundation",
        html: "<h1 style='padding:6px'> The Linux Foundation Second </h1> <p style='color: white; padding: 1rem 1rem; color: #2E382B'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolorem dolorum modi ipsam. Nihil, hic. Esse assumenda explicabo cumque libero quasi pariatur perspiciatis nisi nemo labore facilis! Similique doloremque, praesentium consequatur labore, laboriosam culpa vero voluptas ipsum at provident fugiat. 2 </p> <button  style='margin-bottom:6px'>Check More</button>",
      },
      {
        id: "3",
        altattribute: "Linux Foundation",
        html: "<h1 style='padding:6px'> The Linux Foundation Third</h1> <p style='color: white; padding: 1rem 1rem; color: #2E382B'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolorem dolorum modi ipsam. Nihil, hic. Esse assumenda explicabo cumque libero quasi pariatur perspiciatis nisi nemo labore facilis! Similique doloremque, praesentium consequatur labore, laboriosam culpa vero voluptas ipsum at provident fugiat. 2 </p> <button  style='margin-bottom:6px'>Check More</button>",
      },
      {
        id: "4",
        altattribute: "Linux Foundation",
        html: "<h1 style='padding:6px'> The Linux Foundation Fourth </h1> <p style='color: white; padding: 1rem 1rem; color: #2E382B'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dolorem dolorum modi ipsam. Nihil, hic. Esse assumenda explicabo cumque libero quasi pariatur perspiciatis nisi nemo labore facilis! Similique doloremque, praesentium consequatur labore, laboriosam culpa vero voluptas ipsum at provident fugiat. 2 </p> <button  style='margin-bottom:6px'>Check More</button>",
      },
    ];

    return {
      content,
      insidecontent,
    };
  },
  template:
    '<Sponsors v-bind:content="content" v-bind:insidecontent="insidecontent" Primary="false" ></Sponsors>',
});
