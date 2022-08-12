<template>
  <div v-if="toast.varient != 'solid'" class="toast normal">
    <div class="sidebar" :class="toast.type"></div>
    <div class="content">
      <div class="header">
        <h3 v-if="toast.title">{{ toast.title }}</h3>
        <button @click="dismissToast(store, toast.id)">X</button>
      </div>
      <button
        v-if="!toast.title"
        class="crossbtn"
        @click="dismissToast(store, toast.id)"
      >
        X
      </button>

      <div v-if="toast.message" class="text">
        <p>{{ toast.message }}</p>
      </div>
    </div>
  </div>
  <div v-if="toast.varient == 'solid'" class="toast solid" :class="toast.type">
    <div class="content">
      <div v-if="toast.title" class="header">
        <h3>{{ toast.title }}</h3>
        <button @click="dismissToast(store, toast.id)">X</button>
      </div>
      <button
        v-if="!toast.title"
        class="crossbtn"
        @click="dismissToast(store, toast.id)"
      >
        X
      </button>

      <div v-if="toast.message" class="text">
        <p>{{ toast.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/store";
export default {
  name: "ToastStructure",
  props: {
    toast: { required: true, type: Object },
  },

  created() {
    setTimeout(
      () => {
        this.dismissToast(store, this.toast.id);
      },
      this.toast.time ? this.toast.time : 5000
    );
  },

  setup() {
    function dismissToast(store, id) {
      store.commit("clearToast", id);
    }
    return { dismissToast, store };
  },
};
</script>

<style>
:root {
  --cream: #faf8f7;
  --light-grey: #e7e7e7;
  --black: #000000;
  --yellow: #ffeb3b;
  --grey: #cccccc;
  --white: #ffffff;
  --green: #009900;
  --red: #f44336;
  --blue: #2196f3;
  --primary: #475447;
  --gradient: linear-gradient(rgba(115, 232, 163, 1), rgba(56, 133, 145, 0));
}

.success,
.info,
.error,
.primary,
.warning {
  color: var(--white);
}

.gradient {
  color: var(--black);
}

.toast {
  width: 500px;
  min-height: 50px;
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: center;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border-top-right-radius: 0.5rem;
}

.toast.normal {
  background-color: var(--cream);
  box-shadow: 0 0 0.5rem var(--grey);
}

.normal .success {
  background-color: var(--green);
}

.normal .info {
  background-color: var(--blue);
}

.normal .error {
  background-color: var(--red);
}

.normal .primary {
  background-color: var(--primary);
}

.normal .gradient {
  background-image: var(--gradient);
  box-shadow: 0px 4px 9px rgba(96, 79, 79, 0.25);
}

.normal .warning {
  background-color: var(--yellow);
}

.toast.solid.success {
  background-color: var(--green);
}

.toast.solid.info {
  background-color: var(--blue);
}

.toast.solid.error {
  background-color: var(--red);
}

.toast.solid.primary {
  background-color: var(--primary);
}

.toast.solid.gradient {
  background-image: var(--gradient);
  box-shadow: 0px 4px 9px rgba(96, 79, 79, 0.25);
}

.toast.solid.warning {
  background-color: var(--yellow);
}

.toast p {
  font-weight: 100;
}

.toast .sidebar {
  width: 0.5rem;
}

.toast .content,
.toast .header,
.toast .text {
  width: 100%;
  display: flex;
}

.toast .text p {
  margin-block-start: 0.2rem;
  margin-block-end: 0.2rem;
}

.toast .content {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;
  box-sizing: border-box;
}

.toast .header,
.toast .text {
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
}

.toast .header {
  height: 25px;
  margin-bottom: 1rem;
}

.toast .header button {
  margin-left: auto;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1rem;
}

.toast button.crossbtn {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  text-decoration: none;
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1rem;
}

.toast .content {
  flex-grow: 1;
}

.solid button {
  color: var(--white);
}
</style>
