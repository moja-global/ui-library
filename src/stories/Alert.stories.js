import { app } from '@storybook/vue3';
import store  from '../store/store'

app.use(store);

import ToastComponent from '../components/Alert/Toast.vue';
import { useToast } from '../components/Alert/Alert.js';

export default {
    title: 'alert',
    component: ToastComponent,
    argTypes: {
        set: { type:'object' },
    },
};

const Template = (args) => ({
    components: { ToastComponent },
    beforeMount() {
        useToast(args.set);
        console.log(this.$store)
    },
    setup() {
        return { useToast,args };
    },
    template: '<ToastComponent/>',
});


export const Success = Template.bind({});
export const Error = Template.bind({});
export const Info = Template.bind({});
export const SolidSuccess = Template.bind({});
export const SolidError= Template.bind({});
export const SolidInfo = Template.bind({});
export const SolidPrimary = Template.bind({});
export const SolidGradient = Template.bind({});
export const SolidWarning = Template.bind({});
export const Warning = Template.bind({});


Success.args = {
    set:{ type:"success", title:"Success", message:"message", time:5000}
};

Error.args = {
    set: { type: "error", title: "Error", message: "message", time: 5000 }
};

Info.args = {
    set: { type: "info", title: "Info", message: "message", time: 5000 }
};

SolidSuccess.args = {
    set: { type: "success", title: "Solid Success", message: "message", time: 5000, varient: "solid" }
};

SolidError.args = {
    set: { type: "error", title: "Solid Error", message: "message", time: 5000, varient: "solid" }
};

SolidInfo.args = {
    set: { type: "info", title: "Solid Info", message: "message", time: 5000, varient: "solid" }
};

SolidPrimary.args = {
    set: { type: "primary", title: "Solid Primary", message: "message", time: 5000, varient: "solid" }
};

SolidGradient.args = {
    set: { type: "gradient", title: "Solid Gradient", message: "message", time: 5000, varient: "solid" }
};

Warning.args = {
    set: { type: "warning", title: "Warning", message: "message", time: 5000 }
};

SolidWarning.args = {
    set: { type: "warning", title: "Solid Warning", message: "message", time: 5000, varient: "solid" }
};


