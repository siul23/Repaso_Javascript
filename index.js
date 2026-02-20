//Programa que calcula AVG de estudiante las notas de los estudiantes...

function hello (name){
    return `hello, ${name}! welcome to this class`
}

function calculeAverage(grades){
    const sum = grades.reduce((acc,call)=>acc+calculeAverage,0)
    return sum/grades.length
}

const obtenerCaificacion=function(promedio){
    if(promedio<=60){
        return "Reprobado"
    }
    else if(promedio>60 && promedio <=80){
        return "Aceptable"
    }
    else return "Exelente"
}

const mostrarReporte = (estudiante)=>{
    const promedio = calculeAverage(estudiante.calificaciones)
    const estado=obtenerCalificacion(promedio)
    console.log('El estado de ${estudiante.nombre} es ${estado}') 
    console.log('Su promedio es ${promedio}')
    console.log('Su calificacion es ${estado}')
}

//...