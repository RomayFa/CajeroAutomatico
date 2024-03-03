let usuarioLogueado = JSON.parse(localStorage.getItem("usuarioLogueado"))//=> busco el usuario guardado en el navegador

const tituloBienvenida = document.getElementById("tituloBienvenida")
const logoutButton = document.getElementById("logout")


tituloBienvenida.innerHTML += usuarioLogueado.nombre

logoutButton.addEventListener("click", function(){
    localStorage.removeItem("usuarioLogueado")// elimino el usuario de la memoria del navegador
    window.location= "./index.html"// ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML
})





























/*2- CONSULTAR SALDO => DEBE LEER Y MOSTRAR EL SALDO DEL USUARIO REGISTRADO  */
function consultarSaldo(usuario) {
    /* la función debe retornar el saldo del usuario , EJ: usuarioRegistrado = { nombre: "Lautaro", password: 123457, saldo: 120 }, */
    return usuario.saldo;
  }
  
  /*3- INGRESAR DINERO */
  function ingresarDinero(monto) {
    let saldoDelUsuario = consultarSaldo(usuarioRegistrado);
  }
  
  /*4- RETIRAR DINERO */
  function retirarDinero(monto) {
    let saldoDelUsuario = consultarSaldo(usuarioRegistrado);
  }