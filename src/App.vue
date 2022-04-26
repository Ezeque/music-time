<template>
  <screen-background>
    <div class="h-full w-full flex flex-col justify-between items-center">
      <img src="@/assets/musicTime.png" style="width: 200px" />
      <search-bar style="z-index: 1" />

      <youtube-video id="video" :url="id" />

      <video-grid />
    </div>
  </screen-background>
</template>

<style scoped>
</style>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoGrid from "./components/VideoGrid.vue";
import ScreenBackground from "./components/ScreenBackground.vue";
import YoutubeVideo from "./components/YoutubeVideo.vue";

export default {
  name: "App",
  components: {
    SearchBar: SearchBar,
    VideoGrid: VideoGrid,
    ScreenBackground,
    YoutubeVideo,
  },
  methods: {
    updateVideo() {
      console.log(YoutubeVideo);
    },
  },
  data() {
    return {
      id: null,
    };
  },
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
</style>
