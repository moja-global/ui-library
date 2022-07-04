<!--<template>
    <div class="box-alert-wrapper">
        <CardComponent classname="box-alert-container">
            <slot></slot>
        </CardComponent>

        import CardComponent from '../Card/card.vue';-->

<template>
    <div class="box-alert-wrapper" @click="dismissAlert(alert.id)">
        <CardComponent classname="box-alert-container">
            <div class="box-alert-header">
                <img :src="alert.src" />
            </div>

            <div class="box-alert-body">
                {{alert.body}}
            </div>
            <div class="box-alert-footer">
                <button class="button" :class="alert.color" @click="alert.click?alert.click:dismissAlert(alert.id)">Continue</button>
            </div>
        </CardComponent>
    </div>
</template>

<script>
    import store from '../../store/store';
    import CardComponent from '../Card/Card.vue'; 
    export default {
        components: { CardComponent },
        name: 'BoxAlertStructure',
        props: {
            alert: { required: true,type: Object }
        },

        setup()
        {
           
            function dismissAlert(id)
            {
                store.commit( 'clearAlert',id );
            }
            return { dismissAlert }
        }
    }
</script>

<style >

    .box-alert-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .box-alert-container {
        max-width: 300px;
        width:30vw;
        margin: 0px auto;
        padding: 20px 30px;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center
    }

    .box-alert-header {
        margin-top: 0;
        color: var(--black);
        text-align: left;
        font-weight: 600;
    }

    .box-alert-body {
        margin: 20px 0px 20px 0px;
        color: #514e4e;
        font-size:22px;
        text-align:center;
    }

    @media(max-width:500px) {
        .box-alert-container {
            max-width: 200px;
            width: 200px;
            padding: 20px 10px;
        }
        .box-alert-body {
            font-size: 16px;
        }
    }

    .box-alert-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between
    }

    .box-alert-enter-from, .box-alert-leave-to {
        opacity: 0;
    }

    .box-alert-enter-active .box-alert-container,
    .box-alert-leave-active .box-alert-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .box-alert-wrapper button {
        color: #ffffff;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        font-size: 1.2rem;
        cursor:pointer
    }

    button.green {
        background-color: #77B43F;
    }
    button.red {
        background-color: #f44336;
    }
    button.yellow {
        background-color: #ffeb3b;
    }
    button.blue {
        background-color: #2196F3;
    }

    img {
        width: 3rem;
        height: 3rem;
    }
</style>