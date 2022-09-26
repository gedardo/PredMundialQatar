function registrarUsuario() {
    if (inputNombre.value && inputPass.value) {
        let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
        let existe = listUsuarios.find((usuario) => usuario.nombre === inputNombre.value)
        if (existe) {
            alert("El nombre de usuario ya existe, por favor ingrese otro")
            return
        }
        usuarios.push(new Usuario(inputNombre.value, inputPass.value))
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        alert("registro exitoso")
        inputNombre.value = ""
        inputPass.value = ""
    } else {
        alert("Falta ingresar un valor")
    }
}

function loginUsuario() {
    let encontrado = false
    let listUsuarios = JSON.parse(localStorage.getItem("usuarios"))
    listUsuarios.forEach((usuario) => {
        if (encontrado) {
            return
        }
        if (usuario.nombre === inputNombre.value && usuario.pass === inputPass.value) {
            divLogin.innerHTML = ""
            estado.innerHTML = `Bienvenido ${inputNombre.value}`
            estado.className = ""
            encontrado = true
        }
        else {
            estado.innerText = "usuario o contraseña incorrectos"
            estado.className = "text-rojo"
        }
    })
}