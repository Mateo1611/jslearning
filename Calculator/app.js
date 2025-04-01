let display = document.getElementById('display');
let numeroActual = ''; // Número actualmente ingresado
let numeroPrevio = ''; // El número anterior para realizar operaciones
let operacionActual = ''; // La operación seleccionada
let resultado = ''; // El resultado final después de la operación

// Agregar el número al display
function agregarNumero(numero) {
    if (resultado !== '') {
        numeroPrevio = resultado; // Si ya hay un resultado, lo usamos como el número anterior
        numeroActual = ''; // Reseteamos el número actual
        resultado = ''; // Limpiamos el resultado
    }
    numeroActual += numero;
    display.value = numeroActual; // Actualizamos el display con el número ingresado
}

// Limpiar todo
function limpiador() {
    numeroActual = '';
    numeroPrevio = '';
    operacionActual = '';
    resultado = '';
    display.value = '';
}

// Borrar el último dígito
function borrador() {
    numeroActual = numeroActual.slice(0, -1);
    display.value = numeroActual;
}

// Funciones para las operaciones
function sumador() {
    if (numeroActual !== '') {
        realizarOperacion();
        operacionActual = '+';
        numeroPrevio = numeroActual;
        numeroActual = '';
    }
}

function restador() {
    if (numeroActual !== '') {
        realizarOperacion();
        operacionActual = '-';
        numeroPrevio = numeroActual;
        numeroActual = '';
    }
}

function multiplicador() {
    if (numeroActual !== '') {
        realizarOperacion();
        operacionActual = '*';
        numeroPrevio = numeroActual;
        numeroActual = '';
    }
}

function division() {
    if (numeroActual !== '') {
        realizarOperacion();
        operacionActual = '/';
        numeroPrevio = numeroActual;
        numeroActual = '';
    }
}

// Realizar la operación pendiente
function realizarOperacion() {
    if (operacionActual === '' || numeroActual === '') return;

    let resultadoTemp = 0;
    const num1 = parseFloat(numeroPrevio);
    const num2 = parseFloat(numeroActual);

    switch (operacionActual) {
        case '+':
            resultadoTemp = num1 + num2;
            break;
        case '-':
            resultadoTemp = num1 - num2;
            break;
        case '*':
            resultadoTemp = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                pantalla.value = 'Error'; // No se puede dividir entre cero
                return;
            }
            resultadoTemp = num1 / num2;
            break;
    }

    resultado = resultadoTemp.toString();
    display.value = resultado;
    numeroActual = resultado;
    operacionActual = ''; // Reseteamos la operación actual
}

// Calcular el resultado cuando se presiona el botón igual
function igualador() {
    if (numeroActual !== '' && numeroPrevio !== '') {
        realizarOperacion();
        numeroPrevio = ''; // Reiniciar para evitar hacer la misma operación de nuevo
    }
}
