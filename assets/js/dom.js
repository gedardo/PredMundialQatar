const estado = document.querySelector("#estadoLogin")
const inputNombre = document.querySelector("#usuarioNom")
// const inputNombreReg = document.querySelector("#usuarioNomReg")
// const inputNombreCompleto = document.querySelector("#usuarioNomComp")
const inputPass = document.querySelector("#usuarioPass")
// const inputPassReg = document.querySelector("#usuarioPassReg")
// const inputPass2Reg = document.querySelector("#usuarioPass2Reg")
const btnLogin = document.querySelector("#loginUsuario")
const btnRegistrar = document.querySelector("#regUsuario")
const btnRegistrarExitoso = document.querySelector("#regExitoso")
const btnRegistrarCancelar = document.querySelector("#regcancelar")
const divLogin = document.querySelector("#div-login")
const divRegistrar = document.querySelector("#div-registrar")
const divBotonesGuardarPred = document.querySelector("#botonesPredicciones")
const btnVerPass = document.querySelector("#verPass")
const btnVerPass2 = document.querySelector("#verPass2")
const btnVerPass3 = document.querySelector("#verPass3")
const titulo = document.getElementById("titulo")
const tabla = document.getElementById("tablaPred")
const botonGuardar = document.querySelector("#guardarPred")
const botonBorrar = document.querySelector("#borrarPred")
const resEquipo1 = document.querySelector("#resEquipo1")
const resEquipo2 = document.querySelector("#resEquipo2")
const divCards = document.querySelector("#divCardsPred")
const divPred = document.querySelector("#divPredicciones")
const partidos = []
const usuarios = []
let usuarioLogeado = ""

class Prediccion {
    constructor(idPartido, resEquipo1, resEquipo2, resultado) {
        this.idPartido = idPartido
        this.resEquipo1 = resEquipo1
        this.resEquipo2 = resEquipo2
        this.resultado = resultado
    }
}

class Partido {
    constructor(idPartido, idGrupo, equipo1, equipo2) {
        this.idPartido = idPartido
        this.idGrupo = idGrupo
        this.equipo1 = equipo1
        this.equipo2 = equipo2
    }
}

function generadorPartidos() {
    partidos.push(new Partido(11, "ga", "argentina", "brasil"))
    partidos.push(new Partido(12, "ga", "argentina", "mexico"))
    partidos.push(new Partido(13, "ga", "brasil", "mexico"))
    partidos.push(new Partido(14, "ga", "honduras", "colombia"))
    partidos.push(new Partido(15, "ga", "honduras", "chile"))
    partidos.push(new Partido(16, "ga", "colombia", "chile"))
    partidos.push(new Partido(21, "gb", "peru", "uruguay"))
    partidos.push(new Partido(22, "gb", "paraguay", "peru"))
    partidos.push(new Partido(23, "gb", "paraguay", "uruguay"))
    partidos.push(new Partido(24, "gb", "argentina", "brasil"))
    partidos.push(new Partido(25, "gb", "argentina", "mexico"))
    partidos.push(new Partido(26, "gb", "brasil", "mexico"))
    partidos.push(new Partido(31, "gc", "honduras", "colombia"))
    partidos.push(new Partido(32, "gc", "honduras", "chile"))
    partidos.push(new Partido(33, "gc", "colombia", "chile"))
    partidos.push(new Partido(34, "gc", "peru", "uruguay"))
    partidos.push(new Partido(35, "gc", "paraguay", "peru"))
    partidos.push(new Partido(36, "gc", "paraguay", "uruguay"))
}

generadorPartidos()
// generadorPredicciones()