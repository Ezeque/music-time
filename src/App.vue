<template>
  <screen-background>
    <div class="h-auto w-full flex flex-col justify-between items-center">
      <div class="flex flex-col justify-between items-center h-1/4 w-full">
        <img src="@/assets/musicTime.png" style="width: 200px" />
        <!-- <search-bar class="mb-2" style="z-index: 1" /> -->
        <div id="video" class="flex align-start w-full md:w-auto">
          <close-icon @click="closeVideo" v-if="idVideo != null"/><youtube-video class="video h-1/4 ml-0 md:ml-2"/>
        </div>
      </div>
      <video-grid id="videos-div" :class="idVideo == null ? 'h-3/4' : 'h-1/4'" />
    </div>
  </screen-background>
</template>

<style scoped>
</style>

<script>
/* import SearchBar from "./components/utils/SearchBar.vue"; */
import VideoGrid from "./components/video/VideoGrid.vue";
import ScreenBackground from "./components/background/ScreenBackground.vue";
import YoutubeVideo from "./components/video/YoutubeVideo.vue";
import { idVideo } from "./components/video/services/useVideoActions";
import { bgImg } from "./components/background/services/useBackgroundImg";
import CloseIcon from "@/components/utils/CloseIcon.vue"

export default {
  name: "App",
  setup() {
    const closeVideo = () => {
      idVideo.value = null
      bgImg.value = require('@/assets/main_bg.jpg')
    }
    return { idVideo, closeVideo }
  },
  components: {
    /* SearchBar, */
    VideoGrid,
    ScreenBackground,
    YoutubeVideo,
    CloseIcon
},
mounted(){
  document.title = "Music Time"
}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#videos-div{
  transition: all 0.5s ease;
  z-index: 1;
}

#video{
  z-index: 0;
}
</style>
