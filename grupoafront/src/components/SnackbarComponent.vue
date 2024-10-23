<template>
  <div
    v-if="snackbar.show"
    :class="['snackbar', snackbar.color]"
    @click="snackbar.show = false"
  >
    {{ snackbar.message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import "./styles/snackbarStyles.css";

export default defineComponent({
  name: "SnackbarComponent",
  setup() {
    const snackbar = reactive({
      show: false,
      message: "",
      color: "",
    });

    const showSuccess = (message: string) => {
      snackbar.message = message;
      snackbar.color = "snackbar--success";
      snackbar.show = true;
      setTimeout(() => (snackbar.show = false), 3000);
    };

    const showError = (message: string) => {
      snackbar.message = message;
      snackbar.color = "snackbar--error";
      snackbar.show = true;
      setTimeout(() => (snackbar.show = false), 3000);
    };

    return {
      snackbar,
      showSuccess,
      showError,
    };
  },
});
</script>
