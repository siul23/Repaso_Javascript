//Programa que calcula AVG de estudiante las notas de los estudiantes...

function calculeAverage(grades){
    if (grades.length === 0) return 0
    const sum = grades.reduce((acc, grade) => acc + grade, 0)
    return sum / grades.length
}

const obtenerCalificacion = function(promedio){
    if (promedio<= 60) return "Reprobado"
    else if (promedio <= 80) return "Aceptable"
    else return "Excelente"
}

const mostrarReporte = (student)=>{
    const promedio = calculeAverage(student.calificaciones)
    const estado = obtenerCalificacion(promedio)
    console.log(`El reporte de ${student.nombre}:`)
    console.log(`Su promedio es ${promedio.toFixed(2)}`)
    console.log(`Su calificación es ${estado}`)
}

// Notas de un estudiante
const student ={
    nombre: "Carlos",
    calificaciones:[85, 90, 70, 95, 60]
}

console.log(hello(student.nombre))
mostrarReporte(student)

console.log(`El reporte de ${student.nombre}:<br>`)
console.log(`Su promedio es ${calculeAverage(student.calificaciones).toFixed(2)}<br>`)
console.log(`Su calificación es ${obtenerCalificacion(calculeAverage(student.calificaciones))}<br>`)      