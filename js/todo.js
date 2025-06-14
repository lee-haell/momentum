const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//let으로 선언 > 기존에 작성된 배열도 유지
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todo list를 지우는 함수
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    //반드시 true를 리턴 > array의 item을 유지하고 싶으면 true를 리턴
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}


//todolist에 html element 추가
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo.text;
    toDoList.appendChild(li);
}

//todo input에 값을 입력할 때 함수
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now()
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

//parsedToDos.forEach((item) => console.log("Thhis is the turn of", item))와 같은 결과
// function sayHello(item){
//     console.log("This is the turn of ", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



