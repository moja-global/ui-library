<template>
    <div class="card-wrapper" :style="styles" :class="classes">
      <slot></slot>  
    </div>
</template>

<script>


    export default {
        name: 'CardComponent',
        props: {
            style: String,
            classname: String,
            hoverEffect: Boolean,
            noShadow: Boolean,
            defaultBorder:Boolean
        },

        computed: {
            styles() {
                return this.style  ? this.style : {}
            },

            classes() {
                console.log(this.noShadow)
                let str = "";
                str += this.classname ? (this.classname+" ") : "";
                str += this.hoverEffect ? "hover " : "";
                str += this.noShadow ? "no-shadow " :"";
                str += this.defaultBorder ? "default-border " : "";
                return str;
            }
        }
        

    }

</script>

<style>
    .card-wrapper {
        padding: 16px;
        margin: 16px;
        box-shadow: -1px 1px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: white;
        border: none;
        border-radius: 5px;
        transition: all 0.2s;
        display: table;
        cursor: default;
    }
    .hover:hover {
        transform: scale(1.01);
    }

   .no-shadow{
        box-shadow:none !important;
    }

   .default-border{
       border:1px solid gray
   }
    

</style>