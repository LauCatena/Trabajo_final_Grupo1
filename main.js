function guardar() {

    let nombreyapellido = document.getElementById("nombreyapellidoIngresado").value ;
    let email = document.getElementById("emailIngresado").value ;
    let tumensaje = document.getElementById("tumensajeIngresado").value ;

    document.getElementById("nombre y apellido").innerHTML = nombre ;
    document.getElementById("e-mail").innerHTML = apellido ;
    document.getElementById("Tu mensaje").innerHTML = sexo ;

}
console.log(formulario) ;
//esta funcion es para cuando quede organizado lo de las cartas//
// (function(){
//     let card = document.querySelectorAll('.card-content');
//     for(let i = 0; i < card.length; i++){
//       card[i].addEventListener('mouseleave', function(event) {
//         let target = event.target;
//         if(target.scrollTop) {
//           target.scrollTop = 0;
//         }
//       });
//     };
//   })();


    // Obtener el botón "Leer más" y la tarjeta
    const botonLeerMas = document.querySelector('boton1');
    const tarjeta = document.getElementById('card1');
  
    // Agregar un evento de clic al botón "Leer más"
    botonLeerMas.addEventListener('click', function() {
      // Agregar o quitar una clase para expandir o contraer la tarjeta
      tarjeta.idList.toggle('card1');
    });