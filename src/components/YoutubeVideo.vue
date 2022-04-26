<template>
  <div class="flex justify-around w-2/3 h-40">
    <iframe
      src="https://www.youtube.com/embed/{{id}}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>

export default {
  name: "YoutubeVideo",
  components: {
    
  },
  props: {
      id : String
  },
  data() {
    return {
      
    };
  },
};
</script>