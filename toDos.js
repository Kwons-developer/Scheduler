const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS = "todos";
let toDos = [];


function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDos));
}

function deleteLi(event) {
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo) {
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function setIdOfToDos() {
    const len = toDos.length;
    for (let i = 0; i < len; i++) {
    toDos[i].id = i + 1;
    }
}

function makeToDoLi(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("mousedown", deleteLi);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}


function handdleToDoSubmit(event) {
    setIdOfToDos()
    event.preventDefault();
    const currentValue = toDoInput.value;
    makeToDoLi(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const currentToDo = localStorage.getItem(TODOS);
    if(currentToDo !== null) {
        const parsedToDo = JSON.parse(currentToDo);
        parsedToDo.forEach(function(todo) {
            makeToDoLi(todo.text);
        });
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handdleToDoSubmit);
}
init();