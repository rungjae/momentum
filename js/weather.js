const API_KEY = "3f28f696d5d79c07c04cfbe9ac2b14ac";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        weather.innerText = `현재 날씨 : ${data.weather[0].main} | 현재 온도 : ${data.main.temp}ºC`;
        city.innerText = `현재 위치 : ${data.name}`;
    });
}

function onGeoError(){
    alert("위치를 찾을수 없어 날씨를 표시할수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 위치를 추적성공시onGeoOk, 추적불가시 onGeoError 실행