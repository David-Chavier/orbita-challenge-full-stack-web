<template>
  <router-view />
  <SnackbarComponent ref="snackbarComponent" />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import SnackbarComponent from './components/SnackbarComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    SnackbarComponent,
  },
  setup() {
    const snackbarComponent = ref<InstanceType<typeof SnackbarComponent> | null>(null);

    const showSuccess = (message: string) => {
      if (snackbarComponent.value) {
        snackbarComponent.value.showSuccess(message);
      }
    };

    const showError = (message: string) => {
      if (snackbarComponent.value) {
        snackbarComponent.value.showError(message);
      }
    };

    provide('showSuccess', showSuccess);
    provide('showError', showError);

    return {
      snackbarComponent,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
}
</style>
