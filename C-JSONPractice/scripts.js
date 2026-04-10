let photo = document.createElement("img")
photo.src = "homero.jpg"

function consult(){
    let datosjson
    fetch('resume.json')
    .then(respuesta =>respuesta.json())
    .then((exit)=>{datosjson = exit
    
     document.getElementById("titular")
     titular.textContent = exit.titular

     document.getElementById("no_miembro")
     no_miembro.textContent = 'No. de miembro: '+ exit.no_miembro

     document.getElementById("direccion")
     direccion.textContent = 'Direccion: '+exit.direccion

     document.getElementById("telefono")
     telefono.textContent = 'Teléfono: '+exit.telefono

     document.getElementById("email")
     email.textContent = 'email: '+exit.email

     document.getElementById("saldo_usd")
     saldo_usd.textContent = 'Saldo $US: '+exit.saldo[0].monto

     document.getElementById("saldo_eu")
     saldo_eu.textContent = 'Saldo EU: '+exit.saldo[1].monto

     document.getElementById("miembro_desde")
     miembro_desde.textContent = 'Miembro desde: '+exit.miembro_desde

     let imagen = document.getElementById("photo")
     imagen.appendChild(photo)
    })
}
