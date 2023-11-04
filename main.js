function guardar() {

    let nombreyapellido = document.getElementById("nombreyapellidoIngresado").value ;
    let email = document.getElementById("emailingresado").value ;
    let tumensaje = document.getElementById("tumensaje").value ;

    document.getElementById("nombreyapellidoIngresado").innerHTML = nombreyapellido ;
    document.getElementById("emailingresado").innerHTML = email ;
    document.getElementById("tumensaje").innerHTML = tumensaje ;

}
// console.log(formulario);


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



let mostrando1 = false;
function mostrar1() {
    let div = document.getElementById('verMas1');
    if(mostrando1){
        div.style.display = "none";
    } else{
        div.style.display = "block";
    }
    mostrando1 = !mostrando1;
}

let mostrando2 = false;
function mostrar2() {
    let div = document.getElementById('verMas2');
    if(mostrando2){
        div.style.display = "none";
    } else{
        div.style.display = "block";
    }
    mostrando2 = !mostrando2;
}

let mostrando3 = false;
function mostrar3() {
    let div = document.getElementById('verMas3');
    if(mostrando3){
        div.style.display = "none";
    } else{
        div.style.display = "block";
    }
    mostrando3 = !mostrando3;
}