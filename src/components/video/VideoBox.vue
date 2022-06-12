<template>
  <button type="button" class="border-2 rounded red-hover red-border" style="display: block;">
    <div class="h-1/2 border-b-2 red-border" :style="defineBg(bg)"></div>
    <div
      class="flex flex-col items-start text-left h-1/2 px-1 justify-start overflow-auto red-border red-text"
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
          "background-position": `center`,
          };
    },

    
  },
};
</script>

<style>
  .red-border{
    border-color: #b0171f;
  }
  .red-hover:hover{
    box-shadow: 0px 0px 31px 10px #B0171F;
  }
  .red-text{
    color: #b8a01d;
    font-size: 1.25em;
    font-family: adventureFont;
  }
  button{
    width: 10rem
  }
</style>