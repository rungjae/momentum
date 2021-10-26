const clock = document.querySelector(".clock");
const toDay = document.querySelector(".today");


function getClock() {
    const date = new Date();
    const years = String(date.getFullYear()).padStart(4,"0");
    const months = String(date.getMonth()+1).padStart(2,"0");
    const days = String(date.getDate()).padStart(2,"0");
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const week = WEEKDAY[date.getDay()];

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    toDay.innerText = `${years} / ${months} / ${days} / ${week}`;
}

getClock();
setInterval(getClock, 1000);