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

function registrarUsuario(nombre, pass) {
    if (validarListaUsuarios()) {
        let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
        if (listUsuarios.find((usuario) => usuario.nombre === nombre)) {
            alertError("El nombre de usuario ya existe, por favor ingresa otro")
            return
        }
    }
    usuarios.push(new Usuario(nombre, pass))
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    inputNombre.value = nombre
    inputPass.value = pass
    loginUsuario()
}

function loginUsuario() {
    if (validarListaUsuarios()) {
        let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
        if (listUsuarios.find((usuario) => usuario.nombre === inputNombre.value && usuario.pass === inputPass.value)) {
            estado.innerText = `Bienvenido ${inputNombre.value}!!!`
            estado.className = "bienvenida"
            usuarioLogeado = listUsuarios.find((o) => (o.nombre === inputNombre.value)).nombre;
            alertOk("Ingreso exitoso")
            ocultarDiv(divLogin)
            cargarPredicciones()
        } else {
            alertError("Usuario o contraseña incorrectos")
        }
    } else {
        alertError("No existen usuarios registrados")
        inputNombre.value = ""
        inputPass.value = ""
    }
}

function mostrarDiv(div) {
    div.classList.remove("ocultar")
}

function ocultarDiv(div) {
    div.classList.add("ocultar")
}

btnLogin.addEventListener("click", loginUsuario)
btnRegistrar.addEventListener("click", () => { registrar() })
btnVerPass.addEventListener("mousedown", () => { inputPass.type = "text" })
btnVerPass.addEventListener("mouseup", () => { inputPass.type = "password" })
inputNombre.addEventListener("focus", () => estado.innerText = "")
inputNombre.addEventListener("keypress", (e) => { (e.key === "Enter") && inputPass.focus() })
inputPass.addEventListener("focus", () => estado.innerText = "")
inputPass.addEventListener("keypress", (e) => {if (e.key === "Enter") {loginUsuario()}})