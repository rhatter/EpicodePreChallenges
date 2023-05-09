let datiPerBox = {
    img : [
        'https://i.ytimg.com/vi/aP7WeA8bunU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCefZEyie0Urp_Ujuvxu62eLFVcng'
        ,'https://i.ytimg.com/vi/BD-sNzfUUlg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBw6vG-M3x1e4oY4Y_yLmeIqt7TzA'
        ,'https://i.ytimg.com/vi/twBOBISCgXw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBiwBcqqDif2xIOMqKlNmFcIFt8xw'
        ,'https://i.ytimg.com/vi/sMw001gS2Ps/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDzaaj-4aJ5KvQsaanAanWxZ76rg'
        ,'https://i.ytimg.com/vi/4x3MIHWLneo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARg3IFcofzAP&rs=AOn4CLCpkZ6EcB1TMyUQru9p_g7XkNdqgA'
        ,'https://i.ytimg.com/vi/902Zltouttc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDRcavc7gE_GhofoX3FnXHOmyXpEA'
    ],
    titolo: [
        'LUCA RAVENNA. Bugie, divorzio e McDonald\'s (568)'
        ,"Diventare super-idrofobici con l'aerogel"
        ,'Cachemire Podcast S3 - Episodio 2: Zero Ansie con Zerocalcare'
        ,'Key & Peele’s Worst Liars 🤥'
        ,'CAPAREZZA - MICA VAN GOGH'
        ,'God of War Ragnarok - Official Trailer (Ben Stiller, LeBron James, John Travolta)'
    ],
    auth:[
        'Luca Ravenna'
        ,'Barbascura eXtra'
        ,'Cachemire Podcast'
        ,'Key & Peele'
        ,'telecaparezza'
        ,'IGN'
    ],
    link:[
        'https://www.youtube.com/watch?v=aP7WeA8bunU'
        ,'https://www.youtube.com/watch?v=BD-sNzfUUlg'
        ,'https://www.youtube.com/watch?v=twBOBISCgXw'
        ,'https://www.youtube.com/watch?v=sMw001gS2Ps'
        ,'https://www.youtube.com/watch?v=4x3MIHWLneo'
        ,'https://www.youtube.com/watch?v=902Zltouttc'
    ]
}
let numeroDati = datiPerBox.img.length

function insertDati(){
    let imgIndex = numBox-2-(numeroDati*(Math.floor((numBox-2)/numeroDati)))
    console.log(imgIndex)

    let actualVideoBox = document.getElementsByClassName('videoBox')[numBox-2]
    let actualStyleAttr = actualVideoBox.getAttribute('style')
    if(actualStyleAttr == null){
        actualStyleAttr = ''
    }    
    let styleString = actualStyleAttr+ 'background-image: url('+datiPerBox.img[imgIndex]+');'
    actualVideoBox.setAttribute('style',styleString)
    //aggiungo link
    let actualLinkBox = document.getElementsByClassName('linkVideoBox')[numBox-2]
    let actualLinkAttr = actualLinkBox.getAttribute('href')
    if(actualLinkAttr == null){
        actualLinkAttr = ''
    }    
    let linkString = actualLinkAttr+ datiPerBox.link[imgIndex]
    actualLinkBox.setAttribute('href',linkString)
    //fine aggiunta link


    let actualTitleBox = document.getElementsByClassName('titlePrevH4')[numBox-2]  
    let TitleString = datiPerBox.titolo[imgIndex]
    actualTitleBox.textContent = TitleString

    let actualAuthorBox = document.getElementsByClassName('descPrevP')[numBox-2]  
    let AuthorString = datiPerBox.auth[imgIndex]
    actualAuthorBox.textContent = AuthorString

    


}


let content = document.getElementsByClassName('content')[0]
let numBox = 1
let boxes = 9

function createBox(){
    let box = document.createElement('div')
    box.setAttribute('class','prevBox preview'+numBox)
    let linkVideoPrev = document.createElement('a')
    linkVideoPrev.setAttribute('class','linkVideoBox linkVideoBox'+numBox)
    let videoPrev = document.createElement('div')
    videoPrev.setAttribute('class','videoBox videoPev'+numBox)
    linkVideoPrev.appendChild(videoPrev)
    box.appendChild(linkVideoPrev)
    let textDesc = document.createElement('div')
    textDesc.setAttribute('class','SubPrevBox SubPrevBox'+numBox)
    let logoBox = document.createElement('div')
    logoBox.setAttribute('class','logoBox')
    textDesc.appendChild(logoBox)
    let descriptionBoxes = document.createElement('div')
    descriptionBoxes.setAttribute('class','descBox')
    let title = document.createElement('h4')
    title.setAttribute('class','titlePrevH4 title'+numBox)
    title.textContent='Titolo default'
    descriptionBoxes.appendChild(title)
    let description = document.createElement('p')
    description.setAttribute('class', 'descPrevP descriprion'+numBox)
    descriptionBoxes.appendChild(description)
    description.textContent= 'Descrizione default'
    textDesc.appendChild(descriptionBoxes)
    box.appendChild(textDesc)
    numBox++
    content.appendChild(box)
}
function aggiungiBox(){
for(let nB = 0; nB<boxes;nB++){
    createBox()
    let backgroundLogo =  "background-image: url('./assets/epicode-logo.png');"
    document.getElementsByClassName('logoBox')[numBox-2].setAttribute('style',backgroundLogo)
    insertDati()
}
}
aggiungiBox()

//scroll test

window.addEventListener('scroll', () => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        aggiungiBox();
    }
}, {
    passive: true
});