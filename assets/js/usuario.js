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
    if (inputNombreReg.value && inputPassReg.value && inputPass2Reg.value && inputNombreCompleto.value) {
        if (inputPassReg.value === inputPass2Reg.value) {
            if (validarListaUsuarios()) {
                let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
                if (listUsuarios.find((usuario) => usuario.nombre === inputNombreReg.value)) {
                    alertError("El nombre de usuario ya existe, por favor ingresa otro")
                    inputNombreReg.focus()
                    return
                }
            }
            usuarios.push(new Usuario(inputNombreReg.value, inputPassReg.value, inputNombreCompleto.value))
            localStorage.setItem("usuarios", JSON.stringify(usuarios))
            alertOk("Registro exitoso")
            inputNombre.value = inputNombreReg.value
            inputPass.value = inputPassReg.value
            loginUsuario()
            ocultarDiv(divRegistrar)
        } else {
            alertError("La contraseña no coincide")
            inputPassReg.focus()
        }
    } else {
        alertError("Faltan ingresar valores")
    }
}

function loginUsuario() {
    if (validarListaUsuarios()) {
        let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
        if (listUsuarios.find((usuario) => usuario.nombre === inputNombre.value && usuario.pass === inputPass.value)) {
            estado.innerText = `Bienvenido ${inputNombre.value}!!!`
            estado.className = "bienvenida"
            usuarioLogeado = listUsuarios.find((o) => (o.nombre === inputNombre.value)).nombreCompleto;
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

inputPass.addEventListener("keypress", (e)=> { //e = Objeto global EVENT
    if (e.key === "Enter") {
        loginUsuario()
    }
})

function mostrarDiv(div) {
    div.classList.remove("ocultar")
}

function ocultarDiv(div) {
    div.classList.add("ocultar")
}

btnLogin.addEventListener("click", loginUsuario)
btnRegistrar.addEventListener("click", () => { mostrarDiv(divRegistrar) & ocultarDiv(divLogin) })
btnRegistrarExitoso.addEventListener("click", () => {registrarUsuario()})
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