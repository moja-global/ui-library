import { app } from "@storybook/vue3";
import store from "../../mojaglobal-ui/src/components/store/store";
import ToastComponent from "../../mojaglobal-ui/src/components/Alert/Toast.vue";
import { useToast } from "../../mojaglobal-ui/src/components/Alert/Alert.js";

app.use(store);

export default {
  title: "Components/Alert",
  component: ToastComponent,
};

export const SolidSuccess = (args) => ({
  components: { ToastComponent },
  argType: {
    type: {
      control: { type: "select" },
      options: ["success", "error", "info", "primary", "gradient"],
    },
    title: { type: "string" },
    message: { type: "string" },
    time: { type: "number" },
    varient: { type: "string" },
  },
  setup() {
    return { useToast, args };
  },
  template: `<div><button @click='useToast(args)'>Solid Success</button><ToastComponent/></div>`,
});

SolidSuccess.args = {
  type: "success",
  title: "Solid Success",
  message: "message",
  time: 5000,
  varient: "solid",
};

export const Success = () => ({
  components: { ToastComponent },

  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "success",title: "Success",message: "message",time: 5000 })'>Success</button><ToastComponent/></div>`,
});

export const Error = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "error", title: "Error", message: "message", time: 5000 })'>Error</button><ToastComponent/></div>`,
});

export const Info = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "info", title: "Info", message: "message", time: 5000 })'>Info</button><ToastComponent/></div>`,
});

export const SolidError = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "error", title: "Solid Error", message: "message", time: 5000, varient: "solid" })'>Solid Error</button><ToastComponent/></div>`,
});

export const SolidInfo = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "info", title: "Solid Info", message: "message", time: 5000, varient: "solid" })'>Solid Info</button><ToastComponent/></div>`,
});

export const SolidPrimary = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "primary", title: "Solid Primary", message: "message", time: 5000, varient: "solid" })'>Solid Primary</button><ToastComponent/></div>`,
});

export const SolidGradient = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "gradient", title: "Solid Gradient", message: "message", time: 5000, varient: "solid" })'>Solid Gradient</button><ToastComponent/></div>`,
});

export const SolidWarning = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "warning", title: "Solid Warning", message: "message", time: 5000, varient: "solid" })'>Solid Warning</button><ToastComponent/></div>`,
});

export const Warning = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "warning", title: "Solid Warning", message: "message", time: 5000, varient: "solid" })'>Warning</button><ToastComponent/></div>`,
});

export const WithoutTitle = () => ({
  components: { ToastComponent },
  setup() {
    return { useToast };
  },
  template: `<div><button @click='useToast({ type: "success",  message: "message", time: 500000, varient: "solid" })'>Solid Success</button><ToastComponent/></div>`,
});
