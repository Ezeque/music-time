import {ref} from 'vue'

export const currentVideo = ref(null)
export let idVideo = ref(null)

export const updateVideo = (video) => {
    currentVideo.value = video
    idVideo.value = video.id
}

export default{
    idVideo, updateVideo, currentVideo
}