console.log("welcome to My music");

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogessbar = document.getElementById('myprogessbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('SongItem'));

let songs = [
    {songName:"1 - Make It in Time", filpath: "song/1.mp3"},
    {songName:"2 - Kelly Clarkson", filpath: "song/2.mp3"},
    {songName:"3 - Dreams", filpath: "song/3.mp3"},
    {songName:"4 - Ale Golmaal 3 320 Kbps", filpath: "song/4.mp3"},
    {songName:"5 - Get the Power", filpath: "song/5.mp3"},
    {songName:"6 - 01 Welcome To New York", filpath: "song/6.mp3"},
    {songName:"7 - Dont say", filpath: "song/7.mp3"},
    {songName:"8 - Kesariya", filpath: "song/8.mp3"},

]

let nextButton = document.getElementById('nextButton');



songItems.forEach((element, i) =>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;

})

//audioElement.play();


//Handler Play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myprogessbar.value = progress;
})

myprogessbar.addEventListener('change', ()=>{
    console.log('progressis2',myprogessbar.value * audioElement.duration/100);
    audioElement.currentTime = myprogessbar.value * audioElement.duration/100;


})

const makeAllPlays = (element)=>{
    // Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    //     element.classList.remove('fa-pause-circle');
    //     element.classList.add('fa-play-circle');
    // })
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
 element.addEventListener('click', (e)=>{
    makeAllPlays(element);
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `song/${songIndex+1}.mp3`;
    // masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    })
    
}) 

