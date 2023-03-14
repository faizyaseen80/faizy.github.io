// Initialize the element
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let previous = document.getElementById("previous");
let next = document.getElementById("next");


let songs = [
  {
    songName: "Ajao meri tamnna",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.avif",
  },
  {
    songName: "Tum jo aye",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Ehnna chauniya",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.avif",
  },
  {
    songName: "Ye jo halka halka",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Tu jane na",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  { songName: "Safar", 
    filePath: "songs/6.mp3", 
    coverPath: "covers/6.jpg" 
  },
  {
    songName: "Tera hone laga hu",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.webp",
  },
  {
    songName: "Kahani suno",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Daulat shauhrat",
    filePath: "songs/9.mp3",
    coverPath: "covers/1.avif",
  },
  {
    songName: "Hai apna dil to awara-Sanam",
    filePath: "songs/10.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "295_Sidhu_Moose_Wala",
    filePath: "songs/11.mp3",
    coverPath: "covers/3.avif",
  },
  {
    songName: "Bismilla_Amrit_mann",
    filePath: "songs/12.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Channa mereya",
    filePath: "songs/13.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Dil diya gallan-Atif Aslam",
    filePath: "songs/14.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Has ke_satveer_Aujla",
    filePath: "songs/15.mp3",
    coverPath: "covers/7.webp",
  },
  {
    songName: "Hijab e haya-Kaka",
    filePath: "songs/16.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Jhoome jo pathan-Arijit Singh",
    filePath: "songs/17.mp3",
    coverPath: "covers/1.avif",
  },
  {
    songName: "LEVELS_Sidhu_moose_wala",
    filePath: "songs/18.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Rafta Rafta_Atif Aslam",
    filePath: "songs/19.mp3",
    coverPath: "covers/3.avif",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
});

// audioElement.play()

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    document.getElementById(songIndex).parentElement.classList.add("active")
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// Listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  songItemPlay.forEach((element) => {
    element.parentElement.classList.remove("active");
    gif.style.opacity = 0;
  });
};

songItemPlay.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.parentElement.classList.add("active");
    gif.style.opacity = 1;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  });
});

next.addEventListener("click", () => {
  if (songIndex >= 20) {
    songIndex = 0;
} else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  document.getElementById(songIndex).parentElement.classList.add("active")
  document.getElementById(songIndex - 1).parentElement.classList.remove("active")
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
} else {
    songIndex -= 1; 
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  document.getElementById(songIndex).parentElement.classList.add("active")
  document.getElementById(songIndex +1).parentElement.classList.remove("active")
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

