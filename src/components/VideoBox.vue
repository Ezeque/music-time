<template>
  <button @click="updateVideo" type="button" class="w-full h-52 border-2 rounded border-purple-500">
    <div class="h-1/2 border-b-2 border-purple-500" :style="defineBg(bg)"></div>
    <div
      class="flex flex-col text-purple-500 items-start text-left h-1/2 px-1 justify-between"
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
          "background-size": `cover`
          };
    },

    
  },
};
</script>