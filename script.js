console.log("welcome to java script");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay =document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('list'));
let songs=[
    {songName:"ek raat", filepath:'1.mp3',converpath:"1.jpg" },
    {songName:"Tambdi chambdi", filepath:'2.mp3',converpath:"2.jpg" },
    {songName:"musafir", filepath:'3.mp3',converpath:"3.jpg" },
    {songName:"hechi yel deva", filepath:'4.mp3',converpath:"4.jpg" },
    {songName:"khamoshiya", filepath:'5.mp3',converpath:"5.jpg" },
] 
songItems.forEach((Element,i)=>{
    
    Element.getElementsByTagName("img")[0].src=songs[i].converpath;
   
    Element.getElementsByClassName("song")[0].innerHTML=songs[i].songName;
})
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add( 'fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {    
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add( 'fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value * audioElement.duration/100;
})
const makeAllPlays=()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.classList.remove('fa-pause-circle');
    Element.classList.add('fa-play-circle');
})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click',(e)=>{
       
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add( 'fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex=0
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add( 'fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add( 'fa-pause-circle');
})
document.addEventListener("keydown", function (event) {
    if (event.key === " " || event.code === "Space") {
        console.log("Spacebar pressed!");
        // Add your logic 
        if(audioElement.paused){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add( 'fa-pause-circle');
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add( 'fa-play-circle');

    }
}
   
});