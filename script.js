const photos = [
  "./images/PhotoGallery/cr=w_600,h_300.webp",
  "./images/PhotoGallery/rs=w_600,h_300,cg_true.webp",
  "./images/PhotoGallery/rs=w_984,h_655 (1).webp",
  "./images/PhotoGallery/rs=w_984,h_655 (2).webp",
  "./images/PhotoGallery/rs=w_984,h_655 (3).webp",
  "./images/PhotoGallery/rs=w_984,h_655.webp",
  "./images/PhotoGallery/rs=w_984,h_656 (1).webp",
  "./images/PhotoGallery/rs=w_984,h_656.webp",
];

let index = 0;
let interval;

const mainImg = document.getElementById("mainImg");
const prevImg = document.getElementById("prevImg");
const nextImg = document.getElementById("nextImg");
const thumbRow = document.getElementById("thumbRow");
const thumbs = [];

photos.forEach((src, i) => {
  const img = document.createElement("img");
  img.src = src;
  img.onclick = () => {
    setPhoto(i);
    resetInterval();
  };
  thumbRow.appendChild(img);
  thumbs.push(img);
});

function setPhoto(i) {
  index = i;
  mainImg.src = photos[i];
  prevImg.src = photos[(i - 1 + photos.length) % photos.length];
  nextImg.src = photos[(i + 1) % photos.length];
  [mainImg, prevImg, nextImg].forEach((img) => {
    img.style.transition = "opacity 0.7s ease-in-out";
    img.style.opacity = "0";
    requestAnimationFrame(() => (img.style.opacity = "1"));
  });
  thumbs.forEach((thumb, idx) => {
    thumb.style.opacity = idx === i ? "1" : "0.6";
    thumb.style.transform = idx === i ? "scale(1.05)" : "scale(1)";
  });
}

function nextPhoto() {
  setPhoto((index + 1) % photos.length);
}

function prevPhoto() {
  setPhoto((index - 1 + photos.length) % photos.length);
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextPhoto, 5000);
}

setPhoto(0);
resetInterval();

document.addEventListener("DOMContentLoaded", function () {
  const daySelect = document.getElementById("day-select");
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  daySelect.value = days[new Date().getDay()];
});

document.querySelector(".left-arrow").onclick = prevPhoto;
document.querySelector(".right-arrow").onclick = nextPhoto;
