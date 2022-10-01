/*
function listarRadios(radios) {
    radios.forEach((radio) => {
        console.log(radio.id)
    })
}

function borrarRadios(){
    let radios = document.querySelectorAll("input:checked")
    radios.forEach((input) => input.checked = false)
    tabla.innerHTML = ""
    estado.innerText = ""
}

function chec() {
    let predUsuario = []
    const radios = document.querySelectorAll("input:checked")
    if (radios.length > 0) {
        radios.forEach(value => {
            predicciones.forEach((pred) => {
                if (value.id === pred.id) {
                    predUsuario.push(new Prediccion(pred.id, pred.partido, pred.resultado))
                }
            })
        })
        cargarPredicciones(predUsuario)
    } else {
        alert('No hay ninún elemento activo');
    }
    listarRadios(radios)
}

function generarPrediccion() {
    let idPartido = parseInt(prompt("ingresa el numero de partido a predecir:"))
    let resultado = partidos.find((partido) => partido.id === idPartido)
    if (resultado !== undefined) {
        let prediccionPartido = prompt(`el partido es: ${resultado.partido}. Ingresa tu prediccion:`)
        nuevaPrediccion = new Prediccion(resultado.id, resultado.partido, prediccionPartido)
        console.log(nuevaPrediccion)
    } else {
        console.warn("No se encontró el numero de partido.")
    }
}

const inputFiltrar = document.querySelector("input")

function filtrarProductos() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = productos.filter(producto => producto.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarProductos(productos)
              } else {
                cargarProductos(resultado)
              }
    } else {
        cargarProductos(productos)
    }
}

inputFiltrar.addEventListener("input", filtrarProductos) //A medida que escribimos.

inputFiltrar.addEventListener("keypress", (e)=> {      //Cuando presionamos ENTER
    if (e.key === "Enter") {
        filtrarProductos()
    }
})
*/