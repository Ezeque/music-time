import {ref} from 'vue'

export let idVideo = ref(null)

export const updateVideo = (id) => {
    idVideo.value = id
}

export default{
    idVideo, updateVideo
}