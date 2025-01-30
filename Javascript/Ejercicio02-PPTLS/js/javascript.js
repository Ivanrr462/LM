function jugar() {
    document.getElementById("boton").addEventListener("click", jugar);

    let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
    let opcion = document.getElementById("opcion").value;
    let opcionMaquina = opciones[Math.floor(Math.random() * opciones.length)];
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    if (opcion === "piedra" && (opcionMaquina === "tijera" || opcionMaquina === "lagarto")) {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Ganaste</p>";
    } else if (opcion === "papel" && (opcionMaquina === "piedra" || opcionMaquina === "spock")) {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Ganaste</p>";
    } else if (opcion === "tijera" && (opcionMaquina === "papel" || opcionMaquina === "lagarto")) {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Ganaste</p>";
    } else if (opcion === "lagarto" && (opcionMaquina === "papel" || opcionMaquina === "spock")) {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Ganaste</p>";
    } else if (opcion === "spock" && (opcionMaquina === "tijera" || opcionMaquina === "piedra")) {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Ganaste</p>";
    } else if (opcion === opcionMaquina) {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Es un empate</p>";
    } else {
        resultado.innerHTML = "<img src='./imagenes/" + opcion + ".png'></img> VS <img src='./imagenes/" + opcionMaquina + ".png'></img><p>Perdiste</p>";
    }

}   