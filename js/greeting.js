const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#userNameInput");
const greeting = document.querySelector("#greeting");


//일반적으로 string만 포함된 변수는 대문자로 표기, string 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";
//local storage의 key값 
const USERNAME_KEY = "username";


function onLoginSubmit(evnet){
    //input의 submit을 막는 역할, submit 이벤트에서 무조건 맨 앞에 써야 함
    evnet.preventDefault();

    const userValue = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    localStorage.setItem(USERNAME_KEY, userValue);
    paintGreeting(userValue);
}


function paintGreeting(username){
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


//순서중요) savedUserName을 먼저 가져와야, form을 보여줄지/greeting을 보여줄지 선택 가능
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
        paintGreeting(savedUserName);
}