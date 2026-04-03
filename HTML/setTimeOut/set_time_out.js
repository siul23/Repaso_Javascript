let alarmElement = document.getElementById('alarmElement')
let soundElement = document.getElementById('soundAlarm')

function startTime(){
    let seconds = document.getElementById('selectedTime').value
    setTimeout(completedTime, 1000*seconds)
}

function completedTime(){
    alarmElement.style.color = '#00bb2d'
    soundElement.play()
}

function startClock(){
    setTimeout(tictac, 1000)
}

function tictac(){
    let actualTime = new Date()
    let hour = String(actualTime.getHours()).padStart(2,'0')
    let minutes = String(actualTime.getMinutes()).padStart(2,'0')
    let seconds = String(actualTime.getSeconds()).padStart(2,'0')
    let hourText = hour + ':' + minutes + ':' + seconds
    alarmElement.textContent = hourText
}