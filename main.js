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
    const card1 = document.getElementById('card1')
    const card2 = document.getElementById('card2');
    console.log(card2.clientHeight)
    if(mostrando1){
        div.style.display = "none";
        card1.style.height = '650px';
    } else{
        div.style.display = "block";
        card1.style.height = 650 + div.clientHeight + 'px'
    }
    mostrando1 = !mostrando1;
}

let mostrando2 = false;
function mostrar2() {
    let div = document.getElementById('verMas2');
    const card2 = document.getElementById('card2');
    if(mostrando2){
        div.style.display = "none";
        card2.style.height = '650px';
    } else{
        div.style.display = "block";
        card2.style.height = 650 + div.clientHeight + 'px'
    }
    mostrando2 = !mostrando2;
}

let mostrando3 = false;
function mostrar3() {
    let div = document.getElementById('verMas3');
    const card3 = document.getElementById('card3')
    if(mostrando3){
        div.style.display = "none";
        card3.style.height = '650px';
    } else{
        div.style.display = "block";   
        card3.style.height = 650 + div.clientHeight + 'px'
    }
    mostrando3 = !mostrando3;
}