<template>
  <div class="flex h-screen w-screen screen">
    <slot></slot>
  </div>
</template>

<style scoped>
.screen {
  background-image: url("../assets/main_bg.jpg");
  background-size: cover;
}
</style>

<script>
export default {
  name: "ScreenBackground",
  props: {
    content: String,
    characters: Array,
  },
  template: "{{content}}",
};
</script>