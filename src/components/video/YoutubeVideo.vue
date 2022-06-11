<template>
  <div class="flex justify-around w-full">
    <iframe 
    id="video"
    width= "500"
    :height="idVideo == null? 0 : 350"
    :src="`https://www.youtube.com/embed/${idVideo}`"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  </div>
</template>

<script>
import IdVideo from './services/useVideoActions'

export default {
  name: "YoutubeVideo",
  setup(){
    return IdVideo
  },
};
</script>

<style scoped>
  #video{
    transition: all 0.5s ease;
  }
</style>