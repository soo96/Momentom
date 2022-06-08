const images = [
  "barca.jpg",
  "chelsea.jpg",
  "mancity.jpg",
  "manu.jpg",
  "real.jpg",
  "son1.jpg",
  "son2.jpg",
  "tot.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");  // 태그 만들기!!

bgImage.classList.add("background");

bgImage.src = `img/${chosenImage}`; // img 태그에 src 속성값 지정해주기

document.body.appendChild(bgImage);