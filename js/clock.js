const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date(); //호출하는 당시의 현재 날짜와 시간을 알려줌
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //시계 바로 호출
setInterval(getClock, 1000);
