window.onload = aggiungiCover()
function aggiungiCover(){
let cover = document.getElementsByClassName('coverSongBox')
let arrayIndirizzi= [
    'https://cms-assets.tutsplus.com/cdn-cgi/image/width=360/uploads/users/114/posts/34296/final_image/Final-image.jpg',
    'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440',
    'https://static-cse.canva.com/blob/1035324/1600w-8iSVF3m00jk.jpg',
    'https://static-cse.canva.com/blob/1035322/1600w-1Nr6gsUndKw.jpg',
    'https://www.adobe.com/express/create/cover/media_1a853fd182c6e60cdbc8d24538ff63f378b5181c8.jpeg?width=400&format=jpeg&optimize=medium',
    'https://cdn.vox-cdn.com/thumbor/cUUdVnTXrleRNqbV-9JloWAleSI=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19535833/thumb_clean.jpg',
    'https://www.skillshare.com/blog/wp-content/uploads/2016/06/ScreenShot2020-10-20at11.36.46AM.png',
    'https://www.udiscovermusic.com/wp-content/uploads/2022/04/600NWA_Straigh_CoverAr_3000DPI300RGB1000162059.jpg',
    'https://miro.medium.com/v2/resize:fit:1400/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg',
    'https://www.graphicdesignforum.com/uploads/default/original/2X/d/d3c4e744046205a49d06beb874df3b39da7c9c73.jpeg',
    'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/bebllwzjpsujz9ffwp6s/tyler-the-creator-scum-fuck-flower-boy-cover?fimg-ssr-default',
    'https://images-platform.99static.com/MfS9H7_pGGYYRYT1sxCVq33X1sg=/150x150:1350x1350/500x500/top/smart/99designs-contests-attachments/128/128456/attachment_128456291',
    'https://www.adobe.com/express/create/cover/media_1b689578c0929585d98562c96b775f59984d0b978.jpeg?width=400&format=jpeg&optimize=medium'
];
let numeroCover= cover.length
console.log('Ho trovato ' + numeroCover + ' Cover')
var nLink = 0;
for(let c = 0; c< numeroCover; c++){
    if(nLink == arrayIndirizzi.length){
        nLink=0 };
    var testoBack = "background-image:url("+arrayIndirizzi[nLink]+")";
    cover[c].setAttribute("style",testoBack);
    nLink++
    }
let indirizzoCover = "https://w0.peakpx.com/wallpaper/162/860/HD-wallpaper-polish-cover-art-album-covers-riverside-band-rock-music-progressive-rock.jpg"
let testoBack2 = "background-image:url("+indirizzoCover+")"
let coverRiproduzione = document.getElementsByClassName('coverImage')[0].setAttribute("style",testoBack2)
}
function closeAlert(){
    let attributoAlert = "visibility: hidden"
    document.getElementById('formAlert').setAttribute("style",attributoAlert)
    console.log('preso')
}

function send(){
    a = document.getElementById('NomeUtente').getAttribute('value')
    let messaggio = 'Ciao,' + a + ' benvenuto su Ale-Fi!'
    closeAlert()
    window.alert(messaggio);
    let attributoBody = "overflow-y: auto"
    document.getElementsByTagName('body')[0].setAttribute("style",attributoBody)
}
document.getElementById('play').addEventListener("click",send)

function openLogin(){
    console.log("pageXOffset: " + window.pageXOffset + ", pageYOffset: " + window.pageYOffset)
    let attributoAlert = "visibility: visible;"
    let currentScroll = "top:" + window.pageYOffset +"px;"
    document.getElementById('formAlert').setAttribute("style",attributoAlert+currentScroll)


    let attributoBody = "overflow-y: hidden"
    document.getElementsByTagName('body')[0].setAttribute("style",attributoBody)
}
document.getElementsByClassName('loginbutton')[0].addEventListener('click', openLogin)
document.getElementsByClassName('crossClose')[0].addEventListener('click',closeAlert )