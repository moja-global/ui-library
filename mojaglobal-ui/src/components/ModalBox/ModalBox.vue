<template>
    <div class="box-wrapper box-alert-mask modal-common">
        <div class="dark modal-common" @click="toggle"></div>
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
            toggle: { type: Function,required: true },
        }
    }

</script>

<style scoped>
    .box-wrapper {
        z-index: 1;
    }

    .modal-common {
        width: 100%;
        height: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dark {
        z-index: -1;
        position: fixed;
        cursor: pointer;
    }

    .box-alert-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: opacity 0.3s ease;
    }
</style>