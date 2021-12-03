console.log("Welcome to Spotify");
// Initialize the variables
let songsongIndex = 0;
let  audioElement = new Audio('./songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName:"Rival X Asketa & Natan", filePath:"./songs/4.mp3", coverPath:"./covers/4.jpg"},
    {songName:"Sekai, Spitfya, Rob Gasser", filePath:"./songs/5.mp3", coverPath:"./covers/5.jpg"},
    {songName:"Arc North - Symphony", filePath:"./songs/6.mp3", coverPath:"./covers/6.jpg"},
    {songName:"Cartoon X Time To Talk", filePath:"./songs/7.mp3", coverPath:"./covers/7.jpg"},
    {songName:"Tom Wilson - Zero Gravity", filePath:"./songs/8.mp3", coverPath:"./covers/8.jpg"},
    {songName:"Diviners, IZECOLD, Tim", filePath:"./songs/9.mp3", coverPath:"./covers/9.jpg"},
    {songName:"Jim Yosef, Electro-Light", filePath:"./songs/10.mp3", coverPath:"./covers/10.jpg"}
]
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});
//audioElement.play();
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
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
// Listen to events
audioElement.addEventListener('timeupdate', ()=>
{
    
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeallPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})