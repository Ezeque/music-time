import { ref } from 'vue'

export const bgImg = ref(require("@/assets/main_bg.jpg"))

export const updateBg = (img) =>{
    bgImg.value = img
}

export default {
    bgImg,
    updateBg
}