const alertOk = (title) => {
  swal.fire({
    position: 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 1800
  })
}

const alertError = (title) =>{
  Swal.fire({
    icon: 'error',
    title: title,
    confirmButtonText: 'Aceptar',
  })
}

const alertConfirm = (text, title) =>{
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
  html:
'     <p>Usuario</p>'+
'     <input type="search" id="usuarioNomReg">'+
'     <p>Contraseña</p>'+
'     <input type="password" id="usuarioPassReg">'+
'     <span id="verPass2" title="Ver password">👁</span></p>'+
'     <p>Repetir Contraseña</p>'+
'     <input type="password" id="usuarioPass2Reg">'+
'     <span id="verPass3" title="Ver password">👁</span></p>',
  // icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
    const inputNombreReg = document.querySelector("#usuarioNomReg")
    const inputPassReg = document.querySelector("#usuarioPassReg")
    const inputPass2Reg = document.querySelector("#usuarioPass2Reg")
    registrarUsuario()
  }
})
}
registrar()