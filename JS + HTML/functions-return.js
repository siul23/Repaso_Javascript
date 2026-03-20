
function suma(a, b){
    result = a + b
    return result
}

document.write(suma(30, 70))
document.write('<br>')


function saludar(){
    return 'Hello Yall'
}
var mensaje = saludar()
document.write(mensaje)


function verColor(valor){
    valor = parseInt(prompt('Ingrese Valor 1 / 3... '))
    switch (valor){
        case 1:
            return 'RED'
        case 2:
            return 'GREEN'
        case 3:
            return 'YELLOW'
        default: 
            return 'VALOR INCORRECTO'
    }
}
alert(verColor())


// document.write('<br>')