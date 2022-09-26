const estado = document.getElementById("estadoLogin")
const inputNombre = document.querySelector("#usuarioNom")
const inputNombreReg = document.querySelector("#usuarioNomReg")
const inputNombreCompleto = document.querySelector("#usuarioNomComp")
const inputPass = document.querySelector("#usuarioPass")
const inputPassReg = document.querySelector("#usuarioPassReg")
const inputPass2Reg = document.querySelector("#usuarioPass2Reg")
const btnLogin = document.querySelector("#loginUsuario")
const btnRegistrar = document.querySelector("#regUsuario")
const btnRegistrarExitoso = document.querySelector("#regExitoso")
const btnRegistrarCancelar = document.querySelector("#regCancelar")
const divLogin = document.querySelector("#div-login")
const divRegistrar = document.querySelector("#div-registrar")
const btnVerPass = document.querySelector("#verPass")
const btnVerPass2 = document.querySelector("#verPass2")
const btnVerPass3 = document.querySelector("#verPass3")
const usuarios = []
let usuarioLogeado = ""

class Usuario {
    constructor(nombre, pass, nombreCompleto) {
        this.nombre = nombre
        this.pass = pass
        this.nombreCompleto = nombreCompleto
    }
}

const validarListaUsuarios = () => {
    if (JSON.parse(localStorage.getItem("usuarios"))) {
        return true
    } else {
        return false
    }
}

function registrarUsuario() {
    debugger
    if (inputNombreReg.value && inputPassReg.value && inputPass2Reg.value && inputNombreCompleto.value) {
        if (inputPassReg.value === inputPass2Reg.value) {
            if (validarListaUsuarios()) {
                let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
                if (listUsuarios.find((usuario) => usuario.nombre === inputNombreReg.value)) {
                    alert("⛔️ El nombre de usuario ya existe, por favor ingresa otro")
                    inputNombreReg.focus()
                    return
                }
            }
            usuarios.push(new Usuario(inputNombreReg.value, inputPassReg.value, inputNombreCompleto.value))
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            alert("✅ registro exitoso")
            inputNombre.value = inputNombreReg.value
            inputPass.value = inputPassReg.value
            loginUsuario()
            ocultarDiv(divRegistrar)
        } else {
            alert("⛔️ La contraseña no coincide")
            inputPassReg.focus()
        }
    } else {
        alert("⛔️ Faltan ingresar valores")
    }
}

function loginUsuario() {
    if (validarListaUsuarios()) {
        let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
        if (listUsuarios.find((usuario) => usuario.nombre === inputNombre.value && usuario.pass === inputPass.value)) {
            divLogin.classList.add("ocultar")
            estado.innerText = `Bienvenido ${inputNombre.value}`
            estado.className = ""
            usuarioLogeado = listUsuarios.find((o) => (o.nombre === inputNombre.value)).nombreCompleto;
            divInforme.classList.remove("ocultar")
        } else {
            estado.innerText = "👎 Usuario o contraseña incorrectos"
            estado.className = "text-rojo"
        }
    } else {
        alert("⛔️ No existen usuarios registrados")
        inputNombre.value = ""
        inputPass.value = ""
    }
}

btnLogin.addEventListener("click", loginUsuario)
inputPass.addEventListener("keypress", (e)=> { //e = Objeto global EVENT
    if (e.key === "Enter") {
        loginUsuario()
    }
})

btnRegistrar.addEventListener("click", () => { mostrarDiv(divRegistrar) & ocultarDiv(divLogin) })
btnRegistrarExitoso.addEventListener("click", registrarUsuario)
btnRegistrarCancelar.addEventListener("click", () => { mostrarDiv(divLogin) & ocultarDiv(divRegistrar) })
btnVerPass2.addEventListener("mousedown", () => { inputPassReg.type = "text" })
btnVerPass2.addEventListener("mouseup", () => { inputPassReg.type = "password" })
btnVerPass3.addEventListener("mousedown", () => { inputPass2Reg.type = "text" })
btnVerPass3.addEventListener("mouseup", () => { inputPass2Reg.type = "password" })
btnVerPass.addEventListener("mousedown", () => { inputPass.type = "text" })
btnVerPass.addEventListener("mouseup", () => { inputPass.type = "password" })
inputNombre.addEventListener("focus", () => estado.innerText = "")
inputPass.addEventListener("focus", () => estado.innerText = "")
inputNombre.addEventListener("keypress", (e) => { (e.key === "Enter") && inputPass.focus() })