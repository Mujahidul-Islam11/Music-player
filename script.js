var arr = [
  {
    songName: "Allah-hu-allah-hu",
    url: "./songs/allah-hu-allah-hu.mp3",
    img: "./images/allah-hu.jpg",
  },
  {
    songName: "Nasheed Ya Adheeman ",
    url: "./songs/Ya-Adheeman.mp3",
    img: "./images/nasheed-ya-adheem.jpg",
  },
  {
    songName: "The beauty of existence",
    url: "./songs/the-beauty-of-existence.mp3",
    img: "./images/the-beauty.jpeg",
  },
  {
    songName: "The Way of The Tears",
    url: "./songs/The Way of The Tears Muhammad al Muqit.mp3",
    img: "./images/the-tears.jpg",
  },
];
const allSongsContainer = document.querySelector("#all-songs");
const leftPart = document.querySelector("#left");
const play = document.querySelector("#play");
const forward = document.querySelector("#forward");
const backward = document.querySelector("#backward");

// Display music dynamically
const audio = new Audio();
var selectedSong = 0;

function mainFunction() {
  var clutter = "";
  arr.forEach(function (song, index) {
    clutter += `<div class="song-card" id=${index}>
    <div class="part1">
        <img src=${song.img} alt="">
        <h2>${song.songName}</h2>
    </div>
    <h6>3:56</h6>
</div>`;
  });
  allSongsContainer.innerHTML = clutter;
  leftPart.style.backgroundImage = `url(${arr[selectedSong].img})`;
  audio.src = arr[selectedSong].url;
}
mainFunction();

// Play music onclick
allSongsContainer.addEventListener("click", function (details) {
  selectedSong = details.target.id;
  play.innerHTML = ` <i class="ri-pause-mini-line"></i>`;
  playing = true;
  mainFunction();
  audio.play();
});

// Music player controlling functionality
var playing = false;
play.addEventListener("click", function () {
  if (playing == false) {
    mainFunction();
    audio.play();
    play.innerHTML = ` <i class="ri-pause-mini-line"></i>`;
    playing = true;
  } else {
    mainFunction();
    audio.pause();
    play.innerHTML = ` <i class="ri-play-mini-line"></i>`;
    playing = false;
  }
});

forward.addEventListener("click", function(){
  if(selectedSong < arr.length - 1){
    selectedSong++;
    play.innerHTML = ` <i class="ri-pause-mini-line"></i>`;
    playing = true;
    mainFunction();
    audio.play();
    backward.style.opacity = 1;
  }else{
    forward.style.opacity = 0.6;
  }
})
backward.addEventListener("click", function(){
  if(selectedSong > 0){
    selectedSong--;
    play.innerHTML = ` <i class="ri-pause-mini-line"></i>`;
    playing = true;
    mainFunction();
    audio.play();
    forward.style.opacity = 1;
  }
  else{
    backward.style.opacity = 0.6;
  }
})
