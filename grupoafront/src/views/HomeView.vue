<template>
  <div class="home">
    <RegistrationList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegistrationList from "./StudentRegistration/RegistrationList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    RegistrationList,
  },
});
</script>
