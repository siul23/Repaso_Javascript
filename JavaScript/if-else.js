let nombre, edad

nombre = prompt("Whats your name?")
edad = prompt("Whats your age?")
edad = parseInt(edad) // Convertir la edad a un número entero, para tratarlo como "Null" en caso de que el usuario no ingrese campo vacio.


if (edad >= 18){
    document.write(`<h1>Welcome, ${nombre}!</h1><p>You are ${edad} years old, so you can enter.</p>`)
} else {
    if (edad < 18){
        document.write(`<h1>Sorry, ${nombre}!</h1><p>You are ${edad} years old, so you cannot enter.</p>`)
    }
    else{
        document.write(`<h1>Invalid input
             ${nombre}!</h1><p>Please enter a valid age.</p>`)
    }
    
}

/* "document.write()" actualmente puede generar problemas de rendimiento y seguridad, especialmente 
si se usa después de que la página ha terminado de cargarse. En su lugar, es recomendable usar métodos 
como "innerHTML" o "appendChild" para manipular el DOM de manera más segura y eficiente. */ 