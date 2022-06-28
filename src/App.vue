<template>
    <h1>Alerts</h1>
    <button class="margin_1" @click='useToast({type:"success",title:"Success",message:"message",time:5000})'>Success</button>
    <button class="margin_1" @click='useToast({type:"error",title:"Error",message:"message",time:500000})'>Error</button>
    <button class="margin_1" @click='useToast({type:"info",title:"Info",message:"message",time:5000})'>Info</button>
    <button class="margin_1" @click='useToast({type:"success",title:"Solid Success",message:"message",time:5000,varient:"solid"})'>Solid Success</button>
    <button class="margin_1" @click='useToast({type:"error",title:"Solid Error",message:"message",time:5000,varient:"solid"})'>Solid Error</button>
    <button class="margin_1" @click='useToast({type:"info",title:"Solid Info",message:"message",time:5000,varient:"solid"})'>Solid Info</button>
    <button class="margin_1" @click='useToast({type:"primary",title:"Solid Primary",message:"message",time:5000,varient:"solid"})'>Solid primary</button>
    <button class="margin_1" @click='useToast({type:"gradient",title:"Solid Gradient",message:"message",time:5000,varient:"solid"})'>Solid Gradient</button>
    <button class="margin_1" @click='useToast({type:"warning",title:"Warning",message:"message",time:5000})'>Warning</button>
    <button class="margin_1" @click='useToast({type:"warning",title:"Solid Warning",message:"message",time:5000,varient:"solid"})'>Solid Warning</button>
    <ToastComponent />
</template>

<script>
    import ToastComponent from './components/Alert/Toast.vue';
    import { useToast } from './components/Alert/Alert.js';
    export default {
        name: "App",
        components: {
            ToastComponent
        },
        setup() {
            return {
                useToast
            }
        }
    };
</script>

<style>
    #app {
        font-family: "DM Sans";
    }
    .margin_1 {
        margin: 1%;
    } 
</style>
