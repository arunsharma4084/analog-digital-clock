let analog_clock = document.querySelector(".analog-clock");

for(let i = 0; i < 60; i++){
    analog_clock.innerHTML += "<div class='lines'></div>";
    const clock_lines = document.querySelectorAll(".lines");
    let degreesToRotate = `${6 * i}deg`
    clock_lines[i].style.transform = `rotate(${degreesToRotate})`;
}

const hour_hand = document.querySelector(".hour")
const minute_hand = document.querySelector(".minute")
const second_hand = document.querySelector(".second")

function showTime(){
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

    const today = new Date();
    const hours = addZeroToTime(today.getHours() > 12 ? today.getHours() - 12 : today.getHours());
    const minutes = addZeroToTime(today.getMinutes());
    const seconds = addZeroToTime(today.getSeconds());
    const date = today.getDate();
    const month = MONTHS[today.getMonth()];
    const year = today.getFullYear();
    const day = DAYS[today.getDay()];
 
    let timeSuffix;
    if(today.getHours() < 12){
        timeSuffix = 'AM';
    }else{
        timeSuffix = 'PM';
    }

    let hourDegree, minuteDegree, secondDegree

    hourDegree = (today.getHours() > 12 ? today.getHours() - 12 : today.getHours()) * 30 + today.getMinutes() * (1/2) + 180;
    minuteDegree = today.getMinutes() * 6 + today.getSeconds() * (1/10) + 180;
    secondDegree = today.getSeconds() * 6 + 180;

    hour_hand.style.transform = `rotate(${hourDegree}deg)`;
    minute_hand.style.transform = `rotate(${minuteDegree}deg)`;
    second_hand.style.transform = `rotate(${secondDegree}deg)`;

    const clock = document.querySelector('.digital-clock');
    clock.innerHTML = `
    <span class="time">${hours}:${minutes}:${seconds} ${timeSuffix}</span>
    <p class="date-desc">${day}</p>
    <p class="date-desc">${date} ${month},${year}</p>
    `;
}

function addZeroToTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(showTime, 100)