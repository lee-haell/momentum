const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

//todo list를 지우는 함수
function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
}

//todolist에 html element 추가
function paintToDo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newToDo;
    toDoList.appendChild(li);
}

//todo input에 값을 입력할 때 함수
function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(toDoInput.value);

    toDoInput.value = "";
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);