<template>
  <div class="flex justify-around">
    <div class="w-3/4 max-w-3/4 h-full flex py-3 px-6 justify-start overflow-auto flex-wrap" id="video-grid"
      style="background-color: rgba(0, 0, 0, 0.7)">

      <video-box v-for="video in VideoInfo" :key="video.nome" class="w-full md:w-1/3 h-full mb-3" :bg="video.bg"
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
      updateVideo(video)
      updateBg(video.songBg)
    }
  }
};
</script>
<style scoped>
#video-grid {
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 100px #941017;
}

::-webkit-scrollbar-thumb {
  background: #b0171f;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #941017;
}

::-webkit-scrollbar {
  width: 10px;
}

@font-face {
  font-family: adventureFont;
  src: url('@/assets/fonts/Pieces of Eight.ttf');
}
</style>