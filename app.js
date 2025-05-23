const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

function onLoginBtnClick(){
    const userName = loginInput.value;
    if(userName === ""){
        alert("Please write your name!");
    } else if(userName.length > 15){
        alert("Your name is too long~");
    }
}

loginBtn.addEventListener("click", onLoginBtnClick);