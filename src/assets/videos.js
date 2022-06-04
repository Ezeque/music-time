import {ref} from 'vue'
import characters from '@/assets/characters.json'

let finn = characters['finn']
let jake = characters['jake']
let marceline = characters['marceline']
let pbg = characters['princess_bubblegum']
export const VideoInfo = ref([
    {
        nome: "I Remember You",
        descricao: "Song That Marceline plays with Ice King when he comes to visit her.",
        bg: "https://filmschoolrejects.com/wp-content/uploads/2019/02/SimonIceKingFeaturedImage.jpg",
        id: "m17Vt7FEIgM",
        participante: [
            "Marceline"
        ]
    },
    {
        nome: "My Best Friend in The World",
        descricao: "It is sung by Finn, with Marceline and, to a much lesser extent, Princess Bubblegum singing occasional harmony. Princess Bubblegum, BMO, Jake, and Marceline played the tune.",
        bg: "https://i.ytimg.com/vi/s5vzSHdNf5k/maxresdefault.jpg",
        id: "iq1dzbBPOCA",
        participantes: [finn, jake, marceline, pbg]
    },
    {
        nome: "Fries",
        descricao: "Song Marceline sings about her father.",
        bg: "https://i.imgur.com/qg42Yhw.png",
        id: "ympg3SVec60"
    },
    {
        nome: "Adventure Time Opening",
        descricao: "The show's oppening",
        bg: "https://i.ytimg.com/vi/kMDaAcfCYow/maxresdefault.jpg",
        id: "7Ing1lOzmGA"
    },
    {
        nome: "Come Along With Me",
        descricao: "The show's ending",
        bg: "https://i.ytimg.com/vi/QiHQ7gIeSbY/maxresdefault.jpg",
        id: "qEJ4spdiTxw"
    },
    
])

export default {
    VideoInfo
}