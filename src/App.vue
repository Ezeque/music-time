<template>
  <screen-background>
    <div class="h-auto w-full flex flex-col justify-between items-center">
      <div class="flex flex-col justify-between items-center h-1/4 w-full">
        <img src="@/assets/musicTime.png" style="width: 200px" />
        <!-- <search-bar class="mb-2" style="z-index: 1" /> -->
        <div class="flex align-start w-full md:w-auto">
          <close-icon @click="closeVideo" v-if="idVideo != null"/><youtube-video class="video h-1/4 ml-2"/>
        </div>
      </div>
      <video-grid id="video-div" :class="idVideo == null ? 'h-3/4' : 'h-1/4'" />
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
import CloseIcon from "@/components/utils/CloseIcon.vue"

export default {
  name: "App",
  setup() {
    const closeVideo = () => {
      idVideo.value = null
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

#video-div{
  transition: all 0.5s ease;
}
</style>
