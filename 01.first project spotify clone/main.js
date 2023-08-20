var songIndex = 0;
audioElement = new Audio("songs/6.mp3");

masterplay = document.getElementById("masterPlay");

myprogressbar = document.getElementById("progressbar");

playinggif = document.getElementById("playinggif");

titlesong = document.getElementById("titlesong")
let bongs = [
  {
    songName: "STAY Song by Justin Bieber and The Kid LAROI",
    filepath: "songs/1.mp3",
    coverpath: "covers/1.jpg",
  },
  {
    songName: "DJ Snake ft. Justin Bieber - Let Me Love You",
    filepath: "songs/2.mp3",
    coverpath: "covers/2.jpg",
  },
  {
    songName: "Yummy Yummy -Justin Bieber",
    filepath: "songs/3.mp3",
    coverpath: "covers/3.jpg",
  },
  {
    songName: "Peaches -Justin Bieber",
    filepath: "songs/4.mp3",
    coverpath: "covers/4.jpg",
  },
  {
    songName: "Sorry Sorry -Justin Bieber",
    filepath: "songs/5.mp3",
    coverpath: "covers/5.jpg",
  },
  {
    songName: "What Do You Mean -justin bieber",
    filepath: "songs/6.mp3",
    coverpath: "covers/6.jpg",
  },
  {
    songName: 'Skrillex and Diplo - "Where Are Ü Now" with Justin Bieber',
    filepath: "songs/7.mp3",
    coverpath: "covers/7.jpg",
  },
  {
    songName: "Intentions -Justin Bieber",
    filepath: "songs/8.mp3",
    coverpath: "covers/8.jpg",
  },
  {
    songName: "Attention -Justin Bieber",
    filepath: "songs/9.mp3",
    coverpath: "covers/9.jpg",
  },
  {
    songName: "Company -justin bieber",
    filepath: "songs/10.mp3",
    coverpath: "covers/10.jpg",
  },
];

playfunction = () => {
  audioElement.play();
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
  playinggif.style.opacity = 1;
};
pausefunction = () => {
  audioElement.pause();
  masterplay.classList.add("fa-play-circle");
  masterplay.classList.remove("fa-pause-circle");
  playinggif.style.opacity = 0;
};

document.addEventListener("keyup",(event) => {
    if (event.code === 'Space') {
    }
        
})
masterplay.addEventListener("click", () => {
  if ( audioElement.paused || audioElement.currentTime == 0) {
    playfunction();
  } else {
    pausefunction();
  }
});
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myprogressbar.value = progress;
});
myprogressbar.addEventListener("change", () => {
  audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
});

songItemsmain = Array.from(document.getElementsByClassName("songItem"));
songItemsmain.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = bongs[i].coverpath;
  element.getElementsByClassName("songTitle")[0].innerText = bongs[i].songName;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle')
    })

}
Array.from(document.getElementsByClassName("SongItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays()
        songIndex=parseInt(e.target.id)
      e.target.classList.remove('fa-play-circle')
      e.target.classList.add('fa-pause-circle')
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        playinggif.style.opacity = 1
        titlesong.innerText = bongs[songIndex-1].songName;
        
        
  });
});

document.getElementById("next").addEventListener("click", () => {
    if (songIndex > 10) {
        songIndex = 0;
    }
    
    else { songIndex = songIndex + 1; }
    audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        playinggif.style.opacity = 1
    titlesong.innerText = bongs[songIndex-1].songName;
}
    

)
document.getElementById("previous").addEventListener("click", () => {
    
    if (songIndex < 1) {
        songIndex = 10;
    } else { songIndex = songIndex - 1; }
    audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        playinggif.style.opacity = 1
        titlesong.innerText = bongs[songIndex-1].songName;
    }
    
    )
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        if (audioElement.paused) {
            audioElement.play()
            masterplay.classList.remove("fa-play-circle");
            masterplay.classList.add("fa-pause-circle");
            playinggif.style.opacity = 1
        }
        else {
            audioElement.pause()
            masterplay.classList.add("fa-play-circle");
            masterplay.classList.remove("fa-pause-circle");
            playinggif.style.opacity = 0
                }
     }
          
        
})

const forwardButton = document.getElementsByClassName("forward")[0];
forwardButton.addEventListener("click", () => {
  audioElement.currentTime += 5;
});
