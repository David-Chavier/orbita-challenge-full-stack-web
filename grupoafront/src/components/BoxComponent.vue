<template>
  <div class="box-container">
    <div class="box-content">
      <h4 class="box-title">{{title}}</h4>
      <div class="box-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./styles/boxStyles.css"

export default defineComponent({
  name: "BoxComponent",
  props: {
    title: {
      type: String,
    },
  },
});
</script>
