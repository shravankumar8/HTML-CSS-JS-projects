songindex = 0;
audioElement = new Audio("songs/1.mp3")

masterplay = document.getElementById("masterPlay")

myprogressbar=document.getElementById("progressbar")

let bongs = [
    { songName: "SThe Kid LAROI, Justin Bieber", filepath: "songs/1.mp3", coverpath: "covers/1.mp3" },
    { songName: "Let Me love you", filepath: "songs/2.mp3", coverpath: "covers/2.mp3" },
    { songName: "Yummy Yummy -Justin Bieber", filepath: "songs/3.mp3", coverpath: "covers/3.mp3" },
    { songName: "Peaches -Justin Bieber", filepath: "songs/4.mp3", coverpath: "covers/4.mp3" },
    { songName: "Sorry SOrry -Justin Bieber", filepath: "songs/5.mp3", coverpath: "covers/5.mp3" },
    { songName: "What Do You Mean -justin bieber", filepath: "songs/6.mp3", coverpath: "covers/6.mp3" },
    { songName: "Skrill& Dricpo -dsripoo justin", filepath: "songs/7.mp3", coverpath: "covers/7.mp3" },
    { songName: "Intentions -Justin Bieber", filepath: "songs/8.mp3", coverpath: "covers/8.mp3" },
    { songName: "Attention -Justin Bieber", filepath: "songs/9.mp3", coverpath: "covers/9.mp3" },
    { songName: "Company -justin bieber", filepath: "songs/10.mp3", coverpath: "covers/10.mp3" }
];
 playfunction=() => { audioElement.play();
    masterplay.classList.remove("fa-play-circle");
     masterplay.classList.add("fa-pause-circle");
 }
pausefunction = () => {
    audioElement.pause()
    masterplay.classList.add("fa-play-circle");
    masterplay.classList.remove("fa-pause-circle");
    
     
}
 





masterplay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime == 0) {
        playfunction()
       
        
    } else {pausefunction()
       
    }
})
myprogressbar.addEventListener('timeupdate', () => {

    console.log("timeupdate")


})
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        if (audioElement.paused || audioElement.currentTime == 0) {
            playfunction();
        } else {
            pausefunction();
        }
     }

    if ( audioElement.paused && event.code === 'Space') {
      playfunction()
    }else if (audioElement.played && event.code === 'Space'){pausefunction()}
  })