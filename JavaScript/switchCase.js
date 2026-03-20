//simple

/*
let valor
valor = parseInt(prompt(`Ingrese valor en pantalla`)) //"valor" entero

switch (valor){
    case 1:
        document.write(`Ingreso Uno`)
    break
    case 2:
        document.write(`Ingreso Dos`)
    break
    case 3:
        document.write(`Ingreso Tres`)
    break

    default : document.write("Ingreso numero mayor que 3")
    break
}
*/

//ej 2

let color = prompt(`Ingrese un color: ROJO / VERDE / AZUL`)

switch (color){
    case `rojo`:
        document.write(`Ingreso color Rojo`)
    break

    case `verde`:
        document.write(`Ingreso color verde`)
    break

    case `azul`:
        document.write(`Ingreso color azul`)
    break

    default : document.write(`Ingreso un color no permitido`)
    break
}