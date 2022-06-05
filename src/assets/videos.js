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
        id: "kMDaAcfCYow"
    },
    {
        nome: "Come Along With Me",
        descricao: "The show's ending",
        bg: "https://i.ytimg.com/vi/QiHQ7gIeSbY/maxresdefault.jpg",
        id: "qEJ4spdiTxw"
    },
    {
        nome: "Lay My Head Down Slow",
        descricao: "\"Lay My Head Down Slow\" is an auto-tuned song sung by Finn in the episode \"Freak City.\" It was sung after a deep depression brought on by his realization of being stuck as a giant foot forever in a cave filled with other random body parts of people transformed by the Magic Man.",
        bg: "https://pm1.narvii.com/6013/b6a91de2c7d74e27fd8d975649114c0a0e329bfa_hq.jpg",
        id: "bhX78K2uR_g"
    },
    {
        nome: "Billy's Theme",
        descricao: "\"Billy's Theme Song\" is the song performed by storyboard artist Adam Muto that plays when Finn and Jake find the sword of their hero",
        bg: "https://i.ytimg.com/vi/TbMiU2CjN30/maxresdefault.jpg",
        id: "auQCYHbuaQY"
    },
    {
        nome: "Friends Don't Fight",
        descricao: "\"Friends Don't Fight\" is a song performed by BMO in the episode \"Video Makers.\" This song is sung in order for Finn and Jake to put aside their differences in movie choice and remember their friendship.",
        bg: "https://i.ytimg.com/vi/qFzIx6LQDDA/maxresdefault.jpg",
        id: "bBUF_AVKOUU"
    },
    
])

export default {
    VideoInfo
}