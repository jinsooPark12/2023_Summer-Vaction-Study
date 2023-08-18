const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const STRIKE_THOUGH = "strike-through";

function deleteToDo(event) {
    const li = event.target.parentElement;
    if (event.target.checked === true) {
        li.classList.add(STRIKE_THOUGH);
    } else {
        li.classList.remove(STRIKE_THOUGH);
    }
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    span.innerText = newTodo;
    checkbox.addEventListener("click", deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function hadnleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", hadnleToDoSubmit);