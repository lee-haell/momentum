const API_KEY = "3f51032d45ddba76e71fdfd2fdf8ccc4";

//사용자가 위치 허용했을 때,
function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

//사용자가 위치를 거부했을 때,
function onGeoError(){
    alert("위치를 찾을 수 없어 날씨를 알려드릴 수 없습니다.");
}

//사용자의 위치 정보 얻기기 > getCurrentPosition > success와 error 함수 필요
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);