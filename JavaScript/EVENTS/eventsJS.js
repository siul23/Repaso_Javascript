/* Mas usadas
event.target
event.currentTarget
event.prevent
*/


let button = document.getElementById('button1')
let div1 = document.getElementById('div1')
let link1 =  document.getElementById('link1')

function block_link(event){
    event.preventDefault()
    alert('Invalid link')
}

function showMessage(event){
    alert(event.target)
    alert(event.currentTarget)
}

button.addEventListener('click', showMessage)
button.addEventListener('click', block_link)