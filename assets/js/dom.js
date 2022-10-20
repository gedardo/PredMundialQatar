const estado = document.querySelector("#estadoLogin")
const inputNombre = document.querySelector("#usuarioNom")
const inputPass = document.querySelector("#usuarioPass")
const btnLogin = document.querySelector("#loginUsuario")
const btnRegistrar = document.querySelector("#regUsuario")
const divLogin = document.querySelector("#div-login")
const divBotonesGuardarPred = document.querySelector("#botonesPredicciones")
const btnVerPass = document.querySelector("#verPass")
const titulo = document.getElementById("titulo")
const tabla = document.getElementById("tablaPred")
const botonGuardar = document.querySelector("#guardarPred")
const botonBorrar = document.querySelector("#borrarPred")
const resEquipo1 = document.querySelector("#resEquipo1")
const resEquipo2 = document.querySelector("#resEquipo2")
const divCards = document.querySelector("#divCardsPred")
const divPred = document.querySelector("#divPredicciones")
const loader = document.querySelector(".loader")
const URL = "https://github.com/gedardo/PredMundialQatar/blob/eea334fbe551f07d577bfa05c1dbc6b6fb090f6c/assets/bbdd/partidos.json"

const partidos = []
let array = []
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
