const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) { 
  event.preventDefault();   // 1.디폴트를 막아준다.(submit 하면 새로고침되는거)
  loginForm.classList.add("hidden");  //2. form태그를 숨긴다.
  const username = loginInput.value;    //3. 유저이름 username 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); //4. local storage에 username 저장
  paintGreetings(username); // 
}

function paintGreetings(username){    // h1태그 보이게하는 함수(중복제거)
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){   // 로컬스토리지에 있으면
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else{   // 로컬스토리지에 없으면
  paintGreetings(savedUsername);
}

