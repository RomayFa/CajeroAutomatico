const saldo = document.getElementById('saldo');
const retiro = document.getElementById('retiro');
const ingreso = document.getElementById('ingreso');
const cantidadRetiro = document.getElementById('cantidad-retiro');
const cantidadIngreso = document.getElementById('cantidad-ingreso');

let presupuesto = 200;

// Función para mostrar/ocultar el saldo
function mostrarOcultarSaldo() {
    if (saldo.style.display === 'none') {
        saldo.style.display = 'block';
    } else {
        saldo.style.display = 'none';
    }
}

// Función para mostrar el formulario de retiro
function mostrarRetiro() {
    retiro.style.display = 'block';
   
}

// Función para mostrar el formulario de ingreso
function mostrarIngreso() {
    ingreso.style.display = 'block';
    
}

// Función para confirmar un retiro
function confirmarRetiroFn() {
    const retiroValor = parseInt(cantidadRetiro.value);
    if (retiroValor > 0) {
        if (presupuesto - retiroValor < 10) {
            alert('El saldo no puede ser menor a $10');
        } else {
            presupuesto -= retiroValor;
            actualizarSaldo();
            
        }
    } else {
        alert('Ingrese un valor positivo');
    }
}

// Función para confirmar un ingreso
function confirmarIngresoFn() {
    const ingresoValor = parseInt(cantidadIngreso.value);
    if (ingresoValor > 0) {
        if (presupuesto + ingresoValor > 990) {
            alert('El saldo no puede superar los $990');
        } else {
            presupuesto += ingresoValor;
            actualizarSaldo();
            
        }
    } else {
        alert('Ingrese un valor positivo');
    }
}

// Función para actualizar el saldo
function actualizarSaldo() {
    saldo.textContent = `Saldo: $${presupuesto}`;
}
