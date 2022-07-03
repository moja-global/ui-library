<template>
    <div class="box-wrapper box-alert-mask" @click="toggle">
        <div class="box-alert-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalComponent',
        components: {
        },
        props: {
            toggle: { type: Function ,required:true},
        }
    }

</script>

<style scoped>
    .box-wrapper {
        width: 100%;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .box-alert-mask {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: table;
        transition: opacity 0.3s ease;
    }
</style>