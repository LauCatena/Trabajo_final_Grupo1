function guardar() {

    let nombreyapellido = document.getElementById("nombreyapellidoIngresado").value ;
    let email = document.getElementById("emailIngresado").value ;
    let tumensaje = document.getElementById("tumensajeIngresado").value ;

    document.getElementById("nombre y apellido").innerHTML = nombreyapellido ;
    document.getElementById("e-mail").innerHTML = email ;
    document.getElementById("Tu mensaje").innerHTML = tumensaje ;

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


   /* // Boton "Leer más" y la tarjeta
    const botonLeerMas = document.querySelector('boton1');
    const tarjeta = document.getElementById('card1');
  
    // Agregar un evento de clic al botón "Leer más"
    botonLeerMas.addEventListener('click', function() {
      // Agregar o quitar una clase para expandir o contraer la tarjeta
      tarjeta.idList.toggle('card1');
    });*/



let mostrando = false;
function mostrar() {
    let div = document.getElementById('verMas');
    if(mostrando){
        div.style.display = "none";
    } else{
        div.style.display = "block";
    }
    mostrando = !mostrando;
}
  