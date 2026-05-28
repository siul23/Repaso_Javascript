let menu = document.getElementById('myMenu') 
let button = document.getElementById('myButton')


//al pasar el puntero por encima del boton "Open Menu" abre lista
button.addEventListener('mouseover', function(){
    menu.style.display = 'block'
})


//al quitar el mouse del boton "Open Menu" cierra la lista
button.addEventListener('mouseout', function(){
    menu.style.display = 'none'
})

//al mover el puntero sobre la pagina actua el MOUSEMOVE... Usa event para registrar las cordenadas de movieminto del puntero.
document.addEventListener('mousemove', function(event){
    console.log('Posicion X: '+ event.clientX + 
        ' -Posicion Y: '+ event.clientY) //Abre la consola con F12 en tu nevegador
})

