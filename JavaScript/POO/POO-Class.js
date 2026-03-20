class Persona{
    nombre = 'Homer'
    apellido = 'Simpson'
    direccion = 'Ave. Simpreviva 742'
    telefono = '319130213'
    email = 'support@correo.tiadmn.co'

    trabajar(){
        return 'Trabaja en la planta central de Sprinfield'
    }

    estudiar(){
        return 'Tecnologico de antioquia'
    }

}

// crear un objeto para una clase

const homer = new Persona()
const bart = new Persona()
const Lenny = new Persona()

document.write(homer.nombre,' ',homer.apellido, '<br>')
document.write(homer.trabajar(), '<br>', '<br>')

document.write('Bart ',bart.apellido, '<br>')
document.write('Estudia en: ', bart.estudiar(), '<br>', '<br>')

document.write('Lenny ', '<br>', Lenny.trabajar())

