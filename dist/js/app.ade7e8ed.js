(function(){"use strict";var e={354:function(e,n,o){var i=o(963),t=o(252),r=o(577),s=o.p+"img/musicTime.641256c2.png";const a={class:"h-auto w-full flex flex-col justify-between items-center"},c={class:"flex flex-col justify-between items-center h-1/4 w-full"},d=(0,t._)("img",{src:s,style:{width:"200px"}},null,-1),u={class:"flex align-start w-full md:w-auto"};function l(e,n,o,i,s,l){const g=(0,t.up)("close-icon"),p=(0,t.up)("youtube-video"),f=(0,t.up)("video-grid"),m=(0,t.up)("screen-background");return(0,t.wg)(),(0,t.j4)(m,null,{default:(0,t.w5)((()=>[(0,t._)("div",a,[(0,t._)("div",c,[d,(0,t._)("div",u,[null!=i.idVideo?((0,t.wg)(),(0,t.j4)(g,{key:0,onClick:i.closeVideo},null,8,["onClick"])):(0,t.kq)("",!0),(0,t.Wm)(p,{class:"video h-1/4 ml-2"})])]),(0,t.Wm)(f,{id:"video-div",class:(0,r.C_)(null==i.idVideo?"h-3/4":"h-1/4")},null,8,["class"])])])),_:1})}const g={class:"flex justify-around"},p={class:"w-3/4 max-w-3/4 h-full flex py-3 px-6 justify-between overflow-auto flex-wrap",id:"video-grid",style:{"background-color":"rgba(0, 0, 0, 0.7)"}};function f(e,n,o,i,r,s){const a=(0,t.up)("video-box");return(0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("div",p,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(i.VideoInfo,(e=>((0,t.wg)(),(0,t.j4)(a,{key:e.nome,class:"w-full md:w-1/4 h-full mb-3",bg:e.bg,nome:e.nome,descricao:e.descricao,onClick:n=>s.handleclick(e)},null,8,["bg","nome","descricao","onClick"])))),128))])])}const m={type:"button",class:"border-2 rounded border-purple-500",style:{display:"block"}},h={class:"flex flex-col text-purple-500 items-start text-left h-1/2 px-1 justify-start overflow-auto"},b={id:"nome",class:"underline"},v={id:"descricao",class:"overflow-hidden"};function w(e,n,o,i,s,a){return(0,t.wg)(),(0,t.iD)("button",m,[(0,t._)("div",{class:"h-1/2 border-b-2 border-purple-500",style:(0,r.j5)(a.defineBg(o.bg))},null,4),(0,t._)("div",h,[(0,t._)("span",b,(0,r.zw)(o.nome),1),(0,t._)("span",v,(0,r.zw)(o.descricao),1)])])}var y={name:"VideoBox",props:{bg:String,nome:String,descricao:String,url:String},methods:{defineBg(e){return{"background-image":`url(${e})`,"background-size":"cover","background-position":"center"}}}},x=o(744);const _=(0,x.Z)(y,[["render",w]]);var k=_,j=o(262);const B=(0,j.iH)([{nome:"I Remember You",descricao:"Song That Marceline plays with Ice King when he comes to visit her.",bg:"https://filmschoolrejects.com/wp-content/uploads/2019/02/SimonIceKingFeaturedImage.jpg",id:"m17Vt7FEIgM",songBg:o(372)},{nome:"My Best Friend in The World",descricao:"It is sung by Finn, with Marceline and, to a much lesser extent, Princess Bubblegum singing occasional harmony. Princess Bubblegum, BMO, Jake, and Marceline played the tune.",bg:"https://i.ytimg.com/vi/s5vzSHdNf5k/maxresdefault.jpg",id:"iq1dzbBPOCA",songBg:o(852)},{nome:"Fries",descricao:"Song Marceline sings about her father.",bg:o(892),id:"ympg3SVec60",songBg:o(892)},{nome:"Adventure Time Opening",descricao:"The show's oppening",bg:"https://i.ytimg.com/vi/kMDaAcfCYow/maxresdefault.jpg",id:"kMDaAcfCYow",songBg:o(150)},{nome:"Come Along With Me",descricao:"The show's ending",bg:"https://i.ytimg.com/vi/QiHQ7gIeSbY/maxresdefault.jpg",id:"qEJ4spdiTxw",songBg:o(683)},{nome:"Lay My Head Down Slow",descricao:'"Lay My Head Down Slow" is an auto-tuned song sung by Finn in the episode "Freak City." It was sung after a deep depression brought on by his realization of being stuck as a giant foot forever in a cave filled with other random body parts of people transformed by the Magic Man.',bg:"https://pm1.narvii.com/6013/b6a91de2c7d74e27fd8d975649114c0a0e329bfa_hq.jpg",id:"bhX78K2uR_g",songBg:o(341)},{nome:"Billy's Theme",descricao:'"Billy\'s Theme Song" is the song performed by storyboard artist Adam Muto that plays when Finn and Jake find the sword of their hero',bg:"https://i.ytimg.com/vi/TbMiU2CjN30/maxresdefault.jpg",id:"auQCYHbuaQY",songBg:o(940)},{nome:"Friends Don't Fight",descricao:'"Friends Don\'t Fight" is a song performed by BMO in the episode "Video Makers." This song is sung in order for Finn and Jake to put aside their differences in movie choice and remember their friendship.',bg:"https://i.ytimg.com/vi/qFzIx6LQDDA/maxresdefault.jpg",id:"bBUF_AVKOUU",songBg:o(178)}]);let V=(0,j.iH)(null);const I=e=>{V.value=e};var M={idVideo:V,updateVideo:I};const C=(0,j.iH)(o(335)),F=e=>{C.value=e};var O={bgImg:C,updateBg:F},S={name:"VideoGrid",components:{VideoBox:k},setup(){return{updateBg:F,updateVideo:I,VideoInfo:B,idVideo:V}},methods:{handleclick(e){I(e.id),F(e.songBg)}}};const T=(0,x.Z)(S,[["render",f],["__scopeId","data-v-4aaf1b36"]]);var D=T;function Y(e,n,o,i,s,a){return(0,t.wg)(),(0,t.iD)("div",{class:"flex h-screen w-screen screen",style:(0,r.j5)(a.background)},[(0,t.WI)(e.$slots,"default",{},void 0,!0)],4)}var A={name:"ScreenBackground",setup(){return O},computed:{background(){return{backgroundImage:`url(${this.bgImg})`,backgroundSize:"cover",backgroudPosition:"center"}}},components:{}};const H=(0,x.Z)(A,[["render",Y],["__scopeId","data-v-91c29594"]]);var z=H;const P={class:"flex justify-around w-full"},Z=["height","src"];function q(e,n,o,i,r,s){return(0,t.wg)(),(0,t.iD)("div",P,[(0,t._)("iframe",{id:"video",width:"500",height:null==e.idVideo?0:350,src:`https://www.youtube.com/embed/${e.idVideo}`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,Z)])}var K={name:"YoutubeVideo",setup(){return M}};const Q=(0,x.Z)(K,[["render",q],["__scopeId","data-v-0397315e"]]);var W=Q,J=o.p+"img/marca-x.3a049562.png";const U={class:"w-5 h-5"},$=(0,t._)("img",{src:J},null,-1),E=[$];function L(e,n,o,i,r,s){return(0,t.wg)(),(0,t.iD)("button",U,E)}var G={name:"CloseIcon"};const N=(0,x.Z)(G,[["render",L]]);var R=N,X={name:"App",setup(){const e=()=>{V.value=null,C.value=o(335)};return{idVideo:V,closeVideo:e}},components:{VideoGrid:D,ScreenBackground:z,YoutubeVideo:W,CloseIcon:R},mounted(){document.title="Music Time"}};const ee=(0,x.Z)(X,[["render",l]]);var ne=ee;(0,i.ri)(ne).mount("#app")},940:function(e,n,o){e.exports=o.p+"img/Billy.80a1a786.png"},892:function(e,n,o){e.exports=o.p+"img/It_came_from_the_nightosphere.a6e09e91.png"},683:function(e,n,o){e.exports=o.p+"img/come_along_with_me.8b4f72e2.png"},178:function(e,n,o){e.exports=o.p+"img/friends_song.315de1a6.png"},372:function(e,n,o){e.exports=o.p+"img/i_remember_you.c0765c50.png"},341:function(e,n,o){e.exports=o.p+"img/lay_my_head_down_slow.785354eb.png"},150:function(e,n,o){e.exports=o.p+"img/opening.f89d0131.png"},852:function(e,n,o){e.exports=o.p+"img/what_am_i_to_you.f1a8fbb7.png"},335:function(e,n,o){e.exports=o.p+"img/main_bg.ec0dd770.jpg"}},n={};function o(i){var t=n[i];if(void 0!==t)return t.exports;var r=n[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(n,i,t,r){if(!i){var s=1/0;for(u=0;u<e.length;u++){i=e[u][0],t=e[u][1],r=e[u][2];for(var a=!0,c=0;c<i.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(e){return o.O[e](i[c])}))?i.splice(c--,1):(a=!1,r<s&&(s=r));if(a){e.splice(u--,1);var d=t();void 0!==d&&(n=d)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[i,t,r]}}(),function(){o.d=function(e,n){for(var i in n)o.o(n,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){o.p="/music-time/"}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,i){var t,r,s=i[0],a=i[1],c=i[2],d=0;if(s.some((function(n){return 0!==e[n]}))){for(t in a)o.o(a,t)&&(o.m[t]=a[t]);if(c)var u=c(o)}for(n&&n(i);d<s.length;d++)r=s[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(u)},i=self["webpackChunkcase_converter"]=self["webpackChunkcase_converter"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(354)}));i=o.O(i)})();
//# sourceMappingURL=app.ade7e8ed.js.map