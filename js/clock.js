const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); //시계 바로 호출
setInterval(getClock, 1000);
