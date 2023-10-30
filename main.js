function guardar() {

    let nombreyapellido = document.getElementById("nombreyapellidoIngresado").value ;
    let email = document.getElementById("emailIngresado").value ;
    let tumensaje = document.getElementById("tumensajeIngresado").value ;

    document.getElementById("nombre y apellido").innerHTML = nombre ;
    document.getElementById("e-mail").innerHTML = apellido ;
    document.getElementById("Tu mensaje").innerHTML = sexo ;

    console.log(formulario) ;
}
