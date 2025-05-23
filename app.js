const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#userNameInput");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기, string 저장하고 싶을 때 사용
const USERNAME_KEY = "username";
function onLoginSubmit(evnet){
    evnet.preventDefault(); //input의 submit을 막는 역할

    const userName = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    
    localStorage.setItem(USERNAME_KEY, userName);
    // greeting.innerText = "Hello, " + userName;
    paintGreeting(userName);
}

function paintGreeting(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
        paintGreeting(savedUserName);
}