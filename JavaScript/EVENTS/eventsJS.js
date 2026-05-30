//this code is just a demonstration

let socket = new WebSocket('ws://localhost:8080')
let messageEntered = document.getElementById('messageEntered')
let submitButton = document.getElementById('submitButton')

function showMessage(content){
    let messageContainer = document.getElementById('chatMessage')
    let messageElement = document.createElement('p')
    messageElement.innerText = content
    messageContainer.appendChild(messageElement)

}

submitButton.onclick = function(){
    let message = messageEntered.value
    showMessage(message)
    socket.send(message)
}

//another event (onmessage)

socket.onmessage = function(event){
    let message = event.data
    showMessage(message)
}