const alertOk = (title) => {
  swal.fire({
    position: 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 1800
  })
}

const alertError = (title) => {
  Swal.fire({
    icon: 'error',
    title: title,
    confirmButtonText: 'Aceptar',
  })
}

const alertConfirm = (text, title) => {
  Swal.fire({
    title: 'Estas seguro?',
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Cancelar',
        title,
        'success'
      )
    }
  })
}

const registrar = () => {
  Swal.fire({
    title: 'Registrar Usuario',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Nombre Usuario">
    <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
    confirmButtonText: 'Registrar',
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!login || !password) {
        Swal.showValidationMessage(`Falta ingresar usuario i/o contraseña`)
      }
      return { login: login, password: password }
    }
  }).then((result) => {
    Login = result.value.login
    Password = result.value.password
    registrarUsuario(Login, Password)
  })
}