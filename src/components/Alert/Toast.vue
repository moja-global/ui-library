<template>
    <div class="toasts-wrapper" v-if="toasts.length">
        <ToastStructure v-for="(toast, index) of toasts"
               :toast="toast"
               :key="index">
        </ToastStructure>
    </div>
</template>

<script>
    import ToastStructure from './../Alert/ToastStructure.vue'
    
    export default {
        name: 'ToastComponent',
        components: { ToastStructure },
        computed: {
            toasts() {
                return this.$store.state.toasts;
            }
        },
        
    }
    
</script>

<style>
    .toasts-wrapper {
        width: 600px;
        min-height: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: 1rem;
        top: 1rem;
    }
</style>