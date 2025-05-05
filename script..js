let ataqueJugador
let ataqueEnemigo
let resultado
let contadorTriunfosJugador = 0
let contadorTriunfosEnemigo = 0


function iniciarJuego(){
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "none";

    let piedra = document.getElementById("piedra");
    piedra.addEventListener("click", botonPiedra )
    let papel = document.getElementById("papel");
    papel.addEventListener("click", botonPapel )
    let tijeras = document.getElementById("tijeras");
    tijeras.addEventListener("click", botonTijeras )
    let lagarto = document.getElementById("lagarto");
    lagarto.addEventListener("click", botonLagarto )
    let spock = document.getElementById("spock");
    spock.addEventListener("click", botonSpock )
    let reiniciar = document.getElementById("boton-reiniciar");
    reiniciar.addEventListener("click", reiniciarJuego)
}


function botonPiedra(){
    ataqueJugador = "Piedra";
    ataqueEnemigoAleatorio();
}

function botonPapel(){
    ataqueJugador = "Papel";
    ataqueEnemigoAleatorio();
}
function botonTijeras(){
    ataqueJugador = "Tijeras";
    ataqueEnemigoAleatorio();
}
function botonLagarto(){
    ataqueJugador = "Lagarto";
    ataqueEnemigoAleatorio();
}
function botonSpock(){
    ataqueJugador = "Spock";
    ataqueEnemigoAleatorio();
}

function mensaje(){
    let sectionMensajes = document.getElementById("Mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = "Has elegido "+ ataqueJugador + " y el enemigo eligió " + ataqueEnemigo + "//" + resultado;
    sectionMensajes.appendChild(parrafo);
}

function ataqueEnemigoAleatorio(){
    ataqueEnemigo = aleatorio(1, 5);
    if (ataqueEnemigo == 1){
        ataqueEnemigo = "Piedra";
    }else if (ataqueEnemigo == 2){
        ataqueEnemigo = "Papel";
    }else if (ataqueEnemigo == 3){
        ataqueEnemigo = "Tijeras";
    }else if (ataqueEnemigo == 4){
        ataqueEnemigo = "Lagarto";
    }else if (ataqueEnemigo == 5){
        ataqueEnemigo = "Spock";
    }
    combate();

}

function contadorTriunfos(){
    if (contadorTriunfosJugador == 2){
        mensajeFinal("Felicidades, has ganado el juego");
    }else if (contadorTriunfosEnemigo == 2){
        mensajeFinal("Lo siento, has perdido el juego");
    }
}

function mensajeFinal(mensaje){
    let sectionReiniciar = document.getElementById("reiniciar");
    sectionReiniciar.style.display = "block";
    
    let sectionMensajes = document.getElementById("Mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = mensaje;
    sectionMensajes.appendChild(parrafo);

    let piedra = document.getElementById("piedra");
    piedra.disabled = true;
    let papel = document.getElementById("papel");
    papel.disabled = true;
    let tijeras = document.getElementById("tijeras");
    tijeras.disabled = true;
    let lagarto = document.getElementById("lagarto");
    lagarto.disabled = true;
    let spock = document.getElementById("spock");
    spock.disabled = true;
}


function combate(){
    if (ataqueJugador == ataqueEnemigo){
        resultado = "Empate";
    }else if (
        (ataqueJugador == "Piedra" && (ataqueEnemigo == "Tijeras" || ataqueEnemigo == "Lagarto")) ||
        (ataqueJugador == "Papel" && (ataqueEnemigo == "Piedra" || ataqueEnemigo == "Spock")) ||
        (ataqueJugador == "Tijeras" && (ataqueEnemigo == "Papel" || ataqueEnemigo == "Lagarto")) ||
        (ataqueJugador == "Lagarto" && (ataqueEnemigo == "Spock" || ataqueEnemigo == "Papel")) ||
        (ataqueJugador == "Spock" && (ataqueEnemigo == "Tijeras" || ataqueEnemigo == "Piedra"))
    ){
        resultado = "Gana el jugador";
        contadorTriunfosJugador++;
    }else{
        resultado = "Gana el enemigo";
        contadorTriunfosEnemigo++;
    }
    mensaje();
    contadorTriunfos();
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", iniciarJuego);
