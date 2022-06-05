<template>
  <button type="button" class=" border-2 rounded border-purple-500" style="display: block;">
    <div class="h-1/2 border-b-2 border-purple-500" :style="defineBg(bg)"></div>
    <div
      class="flex flex-col text-purple-500 items-start text-left h-1/2 px-1 justify-start overflow-auto"
    >
      <span id="nome" class="underline">{{ nome }}</span>
      <span id="descricao" class="overflow-hidden">{{ descricao }}</span>
    </div>
  </button>
</template>

<script>
export default {
  name: "VideoBox",
  props: {
    bg: String,
    nome: String,
    descricao: String,
    url: String
  },

  methods: {
    defineBg(img) {
      return { 
          "background-image": `url(${img})`, 
          "background-size": `cover`,
          "background-position": `center`
          };
    },

    
  },
};
</script>

<style>
  button{
    width: 10rem
  }
</style>