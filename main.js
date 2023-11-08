function guardar() {

    let nombreyapellido = document.getElementById("nombreyapellidoIngresado").value ;
    let email = document.getElementById("emailingresado").value ;
    let tumensaje = document.getElementById("tumensaje").value ;

    document.getElementById("nombreyapellidoIngresado").innerHTML = nombreyapellido ;
    document.getElementById("emailingresado").innerHTML = email ;
    document.getElementById("tumensaje").innerHTML = tumensaje ;

}




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