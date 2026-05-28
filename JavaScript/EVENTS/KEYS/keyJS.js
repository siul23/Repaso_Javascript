let text1 = document.getElementById('myText')


function verified_num(event){
    if(event.keyCode < 48 || event.keyCode > 57){ // el keyCode sirve para capturar el codigo ASCII
        event.preventDefault()

    }
}

text1.addEventListener('keydown', verified_num)
text1.addEventListener('keyup', function(event){
    console.log('Entrada del usuario: ' + event.target.value)
})

text1.addEventListener('keypress', function(event){
    console.log('Caracter ingresado: '+ event.key)
})


text1.addEventListener('keypress', function(event){
    console.log('Caracter ingreasado: '+ event.key)
})