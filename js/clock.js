const clock = document.querySelector("#clock");

clock.innerText = "lalala";

function sayHello(){
    console.log("Hello");
}

setInterval(sayHello, 5000);