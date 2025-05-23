const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#userNameInput");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함된 변수는 대문자로 표기, string 저장하고 싶을 때 사용
function onLoginSubmit(evnet){
    evnet.preventDefault(); //input의 submit을 막는 역할
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(userName);
    localStorage.setItem("username", userName);
    // greeting.innerText = "Hello, " + userName;
    greeting.innerText = `Hello, ${userName}`; //위의 코드와 같은 의미, string+변수명 함께 쓸 때
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
