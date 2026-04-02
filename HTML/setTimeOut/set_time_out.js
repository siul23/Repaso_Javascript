let alarmElement = document.getElementById('alarmElement');
let seconds = document.getElementById('selectedTime').value;

function startTime(){
    setTimeout(completedTime, 1000 * seconds);
}

function completedTime(){
    alarmElement.textContent = 'POWER ON!';
    alarmElement.style.color = '#00bb2d';
}