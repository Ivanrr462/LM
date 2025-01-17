function compararNumeros() {
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var numero3 = document.getElementById("numero3").value;
    var resultadoDiv = document.getElementById("resultado");
    var mayor;

    resultadoDiv.innerHTML = "";

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || numero1 === "" || numero2 === "" || numero3 === "") {
        resultadoDiv.innerHTML = "Por favor, ingrese solo números válidos en todos los campos.";
        return;
    }

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
    numero3 = parseFloat(numero3);

    if (numero1 > numero2 && numero1 > numero2){
        mayor = numero1;
    } else if (numero2 > numero1 && numero2 > numero3){
        mayor = numero2;
    } else if (numero3 > numero1 && numero3 > numero2){
        mayor = numero3;
    } else {
        resultadoDiv.innerHTML = "Hay numeros iguales";
        return;
    }

    resultadoDiv.innerHTML = "El mayor es: " + mayor;
    resultadoDiv.style.color = "red";

}