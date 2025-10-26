// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    agregarGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extraer los valores
        const { presupuesto, restante } = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    inprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        // Agregar clase según el tipo de mensaje
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar la alerta después de 3 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    agregarGastoListado(gastos) {
        // Limpiar el HTML
        this.limpiarHTML();

        gastos.forEach(gasto => {
            const { nombre, cantidad, id } = gasto;

            // Crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className =
                'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // Agregar el gasto
            nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
            `;

            // Boton de borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                // Eliminar el gasto
                presupuesto.eliminarGasto(id);
                ui.agregarGastoListado(presupuesto.gastos);
            };

            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while (gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    ActualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    ComprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // Comprobar el 25%
        if (presupuesto / 4 > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        // Comprobar el 50%
        } else if (presupuesto / 2 > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el total es 0 o menor
        if (restante <= 0) {
            ui.inprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cuál es tu presupuesto semanal?');

    // Validar el presupuestoUsuario
    if (presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    // Si todo es correcto, asignar a la variable presupuesto
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if (nombre === '' || cantidad === '') {
        ui.inprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.inprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    // Si todo es correcto, agregar el gasto
    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad: Number(cantidad), id: Date.now() };

    // Añadir un nuevo gasto
    presupuesto.agregarGasto(gasto);

    // Mensaje de todo bien
    ui.inprimirAlerta('Gasto agregado correctamente');

    // Agregar al HTML
    const { gastos, restante } = presupuesto;

    ui.agregarGastoListado(gastos);

    ui.ActualizarRestante(restante);

    ui.ComprobarPresupuesto(presupuesto);

    // Reiniciar el formulario
    formulario.reset();
}