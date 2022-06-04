<template>
  <div class="flex h-screen w-screen screen">
    <!-- WILL LOAD BACKGROUND CHARACTERS -->
    <!-- <character-card style="z-index:0" v-for="character in bgCharacters" :key="character.name" :img="character.img"/> -->
    <slot></slot>
  </div>
</template>

<style scoped>
.screen {
  background-image: url("@/assets/main_bg.jpg");
  background-size: cover;
}
</style>

<script>
import bgCharacters from './services/useBackgroundImg'
/* import CharacterCard from './characterCard.vue'; */
export default {
  name: "ScreenBackground",
  setup() {
    return bgCharacters;
  },
  components: { /* CharacterCard */ }
};
</script>