import { ref } from 'vue'

export const bgCharacters = ref([])

export const updateCharacters = (characters) =>{
    bgCharacters.value = characters
}

export default {
    bgCharacters
}