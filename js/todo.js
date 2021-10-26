const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = document.querySelector(".todo-form input");

const TODOS_KEY = "todos";

let toDos = []; // 배열선언

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //todo들을 String형식으로 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement; //어떤 lsit를 지울것인가에대한 정보를 Li에전달
    li.remove();//해당 lsit를 삭제
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); //li.id는 String 형태이므로 INT형으로 변경
    saveToDos();
}


function paintToDo(newTodo) {
    const li = document.createElement("li"); // html에 li생성
    li.id = newTodo.id;
    const span = document.createElement("span"); // html에 span 생성
    span.innerText = newTodo.text; 
    const button = document.createElement("button"); // html에 button 생성
    button.innerText = "❌"; // button안에 X 텍스트 표시
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); // Li 안에 Span을 넣는다
    li.appendChild(button);// li안에 button을 넣는다
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //newTodo변수에 첫입력 값들의 value를 저장함
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // parse 해서 Array형식으로 변환
    toDos = parsedToDos; // loscaStorage에 저장된 이전의 리스트를 toDos 배열에 저장
    parsedToDos.forEach(paintToDo);
}