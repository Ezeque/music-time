<template>
    <div class="w-1/3 h-auto max-h-full flex pt-1 px-6 overflow-auto justify-center flex-wrap color-border-yellow" 
        id="lyrics-card"
        :style="cardStyle">
        <div v-if="currentVideo">
            <h1 id="title">{{ currentVideo.nome }}</h1>
            <span id="lyrics">{{currentVideo.letra}}</span>
        </div>
    </div>
</template>

<script>
import currentVideo from '@/components/video/services/useVideoActions'
export default {
    name: 'LyricsCard',
    setup() {
        return currentVideo
    },
    computed:{
        cardStyle(){
            return{
                height: this.idVideo != null ? '22rem' : '0px',
                textAlign: 'left',
                opacity: this.idVideo != null ? 1 : 0,
                backgroundColor: "rgba(0, 0, 0, 0.9)"
            }
        }
    }
}
</script>

<style scoped>
#lyrics{
    color: white;
    text-align: left;
    white-space: pre-line;
    font-size: 1.5em;
    color: #b8a01d;
    font-family: adventureFont;
}
#lyrics-card {
    border-radius: 10px;
    transition: all 0.5s ease;
}

#title {
    text-align: center;
    font-family: adventureFont;
    color: #b0171f;
    font-size: 2.5rem;
    transition: all 1s ease;
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
</style>