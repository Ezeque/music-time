import { currentVideo } from "@/components/video/services/useVideoActions"
export const breakLyricsLines = () => {
    let lyrics = currentVideo.value.letra
    for(let i = 0; i < lyrics.length - 1; i++){
        if(lyrics[i] == ',' || lyrics[i] == '.'){
            lyrics = lyrics.substr(0, i) + '\n' + lyrics.substr(i)
        }
    }
}

export default{
    breakLyricsLines
}