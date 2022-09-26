const titulo = document.getElementById("titulo")
const tabla = document.getElementById("tablaPred")
const divLogin = document.querySelector("#lolo")
const divCard = document.querySelector("cards")
const botonGuardar = document.querySelector("#guardarPred")
const botonBorrar = document.querySelector("#borrarPred")
const estado = document.getElementById("estadoLogin")
// const inputNombre = document.querySelector("#usuarioNom")
// const inputPass = document.querySelector("#usuarioPass")
// const btnLogin = document.querySelector("#loginUsuario")
// const btnRegistrar = document.querySelector("#regUsuario")

botonGuardar.addEventListener("click", () => chec())
botonBorrar.addEventListener("click", ()=> borrarRadios())
// btnLogin.addEventListener("click", () => loginUsuario())
// btnRegistrar.addEventListener("click", () => registrarUsuario())

function agregarPrediccion() {
    let fila = ""
    predicciones.forEach(Prediccion => {
        fila = `<tr>
                     <td>${Prediccion.id}</td>
                    <td>${Prediccion.partido}</td>
                    <td>${Prediccion.resultado}</td>
                </tr>`
        tabla.innerHTML += fila
    })
}

function cargarPredicciones(PredUsuario) {
    estado.innerText = "Predicciones realizadas"
    estado.className = ""
    tabla.innerHTML = ""
    let columna = `<thead>
                        <tr>
                            <th>ID</th>
                            <th>PARTIDO A DISPUTAR</th>
                            <th>PREDICCION ELEGIDA</th>
                        </tr>
                    </thead>`
    tabla.innerHTML += columna
    let fila = ""
    PredUsuario.forEach(Prediccion => {
        fila = `<tr>
                     <td>${Prediccion.id}</td>
                    <td>${Prediccion.partido}</td>
                    <td>${Prediccion.resultado}</td>
                </tr>`
        tabla.innerHTML += fila
    })
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

/*
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

// inputFiltrar.addEventListener("keypress", (e)=> {      //Cuando presionamos ENTER
//     if (e.key === "Enter") {
//         filtrarProductos()
//     }
// })*/