<template>
  <div class="flex h-screen w-screen screen" :style="background">
    <!-- WILL LOAD BACKGROUND CHARACTERS -->
    <!-- <character-card style="z-index:0" v-for="character in bgCharacters" :key="character.name" :img="character.img"/> -->
    <slot></slot>
  </div>
</template>

<style scoped>
</style>

<script>
import bgCharacters from './services/useBackgroundImg'
/* import CharacterCard from './characterCard.vue'; */
export default {
  name: "ScreenBackground",
  setup() {
    return bgCharacters;
  },
  computed: {
    background() {
      return {
        backgroundImage: `url(${this.bgImg})`,
        backgroundSize: 'cover',
        backgroudPosition: 'center',
      }
    }
  },
  components: { /* CharacterCard */ }
};
</script>

<style scoped>
.screen {
  -webkit-transition: background-image 0.5s ease;
  transition: background-image 0.5s ease;
}
</style>