
const init = () => {
    //variables
    let num1,num2,operacion;

    let resultado = document.getElementById("resultado");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let dividir = document.getElementById("dividir");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let multiplicar = document.getElementById("multiplicar");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let restar = document.getElementById("restar");
    let igual = document.getElementById("igual");
    let reset = document.getElementById("reset");
    let cero = document.getElementById("cero");
    let sumar = document.getElementById("sumar");

    //eventos
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }
    reset.onclick = function(e) {
       resetear(); 
    }
    sumar.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "+"; 
        limpiar();
    }
    restar.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "-"; 
        limpiar();
    }
    multiplicar.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "*";
        limpiar();  
    }
    dividir.onclick = function(e) {
        num1 = resultado.textContent;
        operacion = "/";
        limpiar();  
    }
    igual.onclick = function(e) {
        num2 = resultado.textContent;
        resolver();  
    }
    
    //Métodos

    const limpiar = () => {
        resultado.textContent = "";
    }

    const resetear = () => {
        resultado.textContent = "";
        num1 = 0;
        num2 = 0;
        operacion = "";
    }

    const resolver = () => {
        switch (operacion) {
            case "+": 
                let res = parseFloat(num1) + parseFloat(num2);
                break;    
            case "-": 
                let res = parseFloat(num1) - parseFloat(num2);
                break;
            case "*": 
                let res = parseFloat(num1) * parseFloat(num2);
                break;
            case "/": 
                let res = parseFloat(num1) / parseFloat(num2);
                break;
        }
        resultado.textContent = res;
        resetear();

    }



}