<template>
  <div class="flex justify-around">
    <div class="w-3/4 max-w-3/4 h-full flex py-3 px-6 justify-between overflow-auto flex-wrap" id="video-grid"
      style="background-color: rgba(0, 0, 0, 0.7)">

      <video-box v-for="video in VideoInfo" :key="video.nome" class="w-full md:w-1/4 h-full mb-3" :bg="video.bg"
        :nome="video.nome" :descricao="video.descricao" @click="handleclick(video)" />

    </div>
  </div>
</template>

<script>
import VideoBox from "./VideoBox.vue";
import { VideoInfo } from "@/assets/videos.js";
import { updateVideo, idVideo } from "./services/useVideoActions";
import { updateBg } from "../background/services/useBackgroundImg";

export default {
  name: "VideoGrid",
  components: {
    VideoBox,
  },
  setup() {
    return {updateBg, updateVideo, VideoInfo, idVideo }
  },
  methods: {
    handleclick(video){
      updateVideo(video.id)
      updateBg(video.songBg)
    }
  }
};
</script>
<style scoped>
#video-grid {
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 100px purple;
}

::-webkit-scrollbar-thumb {
  background: #af52bf;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9035a1;
}

::-webkit-scrollbar {
  width: 10px;
}
</style>