<template>
  <div class="flex justify-around w-full">
    <iframe
    width= "500"
    height="300"
    :src="`https://www.youtube.com/embed/${idVideo}`"
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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