const form = document.querySelector(".js-form"),
    input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");


const USER_N = "currentUser";
const SHOWING = "showing";

function saveName(text){
    localStorage.setItem(USER_N,text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function paintGreeting(text){
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener("submit",handleSubmit);
}

function loadName(){
    const currentUser = localStorage.getItem(USER_N);
    
    if(currentUser === null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName();
}
init();

