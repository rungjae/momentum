const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");


const USERNAME_KEY = "username"; // 에러 방지를 위해 String을 변수에 대입
const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(event) { // 제출 클릭시
    event.preventDefault(); //브라우져에서 제공하는 기능 무효화 (새고로침)
    loginForm.classList.add(HIDDEN_CLASSNAME); //로그인폼 숨기기
    const username = loginInput.value;//username 변수에 이름값 저장
    localStorage.setItem(USERNAME_KEY, username);//localstorage 공간에 입력한 값을 저장
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Have a nice day ${username}!`; //텍스트 넣기
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에 hidden 클래스 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);//savedUsername 변수에 입력받은 이름 키값을 저장

if(savedUsername === null) { // 입력받은 이름이 null 일시
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginSubmit);
}
else {//입력받은 이름이 존재할시
    paintGreetings(savedUsername);
}