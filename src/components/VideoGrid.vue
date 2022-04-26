<template>
  <div class="flex justify-around">
    <div
      class="w-full max-h-1/2 flex p-6 justify-evenly"
      style="background-color: rgba(0, 0, 0, 0.5)"
    >
      <div v-for="video in videos" :key="video.nome" class="w-1/5 h-auto">
        <video-box
          :bg="video.bg"
          :nome="video.nome"
          :descricao="video.descricao"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoBox from "./VideoBox.vue";
import VideoInfo from "../assets/videos.json";

export default {
  name: "VideoGrid",
  components: {
    VideoBox: VideoBox,
  },
  data() {
    return {
      videos: VideoInfo,
    };
  },
};
</script>