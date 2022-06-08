const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

// TODO 문자열로 저장하기 local storage에
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // 뭐든지 String화 시켜줌
}

// TODO 지우기
function deleteToDo(event){
  const li = event.target.parentElement;  //중요!!!
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // toDos 배열 업데이트!
  saveToDos(); //로컬 스토리지에 저장!!
}

// TODO 화면에 생성하기(그리기)
function paintToDo(newTodo){  //매개변수로 Object를 받는다
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;    
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// submit 제어하기 
function handleToDoSubmit(event){
  event.preventDefault();   // 디폴트 막기  - 새로고침 되는거
  const newTodo = toDoInput.value;  // 입력값 저장!
  toDoInput.value = ""; // input 안에 value 값 초기화
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);  // input 입력값 받아서 배열에 저장
  paintToDo(newTodoObj);   // 화면에 TODO 표시 - li 태그 추가!
  saveToDos();          // local storage에 배열을 String으로 바꿔 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY); //local storage에 저장된거 가져오기

if(savedToDos !== null){  //local storage가 비어있지 않으면 불러오기!
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;  //기존값 덮어씌우기
  parsedToDos.forEach(paintToDo);    // array 다음에 forEach 사용가능
}

