const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const STRIKE_THOUGH = "strike-through";
const TODOS_KEY = "todos";
const CHECK_BOX = "check";

let toDos = [];

let checkBox = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function saveCheck() {
    localStorage.setItem(CHECK_BOX, JSON.stringify(checkBox));
}

function switchCheckBox(id) {
    const Check = document.getElementById(`${parseInt(id) + 1}`);
    Check.checked = true;
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const is_checked = event.target.checked;
    if (is_checked === true) {
        li.classList.add(STRIKE_THOUGH);
        checkBox.push(li.id);
        saveCheck();
    } else {
        li.classList.remove(STRIKE_THOUGH);
        checkBox = checkBox.filter((check) => check !== li.id);
        saveCheck();
    }
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    const checkbox = document.createElement("INPUT");
    checkbox.id = newTodo.id + 1;
    checkbox.setAttribute("type", "checkbox");
    span.innerText = newTodo.text;
    checkbox.addEventListener("click", deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function hadnleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", hadnleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

const savedCheck = localStorage.getItem(CHECK_BOX);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

if (savedCheck !== null) {
    const parsedCheck = JSON.parse(savedCheck);
    checkBox = parsedCheck;
    parsedCheck.forEach(switchCheckBox);
}