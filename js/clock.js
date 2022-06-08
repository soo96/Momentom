const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();  // 그 시점의 시간정보를 객체로 담음.
  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);