import ModalComponent from "../../mojaglobal-ui/src/components/ModalBox/ModalBox.vue";
import CardComponent from "../../mojaglobal-ui/src/components/Card/Card.vue";
import BoxAlert from "../../mojaglobal-ui/src/components/ModalBox/BoxAlert.vue";
import { useBoxAlert } from "../../mojaglobal-ui/src/components/ModalBox/BoxAlert.js";
import { ref } from "vue";

export default {
  title: "Components/modal",
  component: ModalComponent,
};

export const ModalCard = () => ({
  components: { CardComponent, ModalComponent },
  setup() {
    const isModal = ref(false);
    function toggle() {
      isModal.value = !isModal.value;
    }
    return { isModal, toggle, useBoxAlert };
  },

  template:
    '<div><button @click="toggle">Toggle</button><div v-show="isModal"><ModalComponent :toggle="toggle"><CardComponent><p> Trial Text Trial Text</p><p>Trial Text Trial Text</p><p> Trial Text Trial Text</p> </CardComponent></ModalComponent></div></div>',
});

export const SuccessAlert = () => ({
  components: { BoxAlert },
  setup() {
    return { useBoxAlert };
  },

  template: `<div><BoxAlert /><button @click="useBoxAlert({type:'success',body:'Wohoo, You did it !!'})">Success</button></div>`,
});

export const ErrorAlert = () => ({
  components: { BoxAlert },
  setup() {
    return { useBoxAlert };
  },

  template: `<div><BoxAlert /><button @click="useBoxAlert({type:'error',body:'Ooopss.. Something went wrong !!'})">Error</button></div>`,
});

export const WarningAlert = () => ({
  components: { BoxAlert },
  setup() {
    return { useBoxAlert };
  },

  template: `<div><BoxAlert /><button @click="useBoxAlert({type:'warning',body:'This is the last warning (:'})">Warning</button></div>`,
});

export const InfoAlert = () => ({
  components: { BoxAlert },
  setup() {
    return { useBoxAlert };
  },

  template: `<div><BoxAlert /><button @click="useBoxAlert({type:'info',body:'This is to inform you :)'})">Info</button></div>`,
});
