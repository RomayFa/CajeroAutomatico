/* LOGIN */
/* Que al ingresar un usuario y contraseña me dirija a la página del cajero */
/* Debo declarar usuarios (3) */
const cuentas = [
  { nombre: "Mali", password: "1234", saldo: 200 },
  { nombre: "Gera", password: "1234", saldo: 290 },
  { nombre: "Maui", password: "1234", saldo: 67 },
  { nombre: "Lautaro", password: "1234", saldo: 120 },
];
let usuarioRegistrado = null; //Variable para modificar con el usuario que ingrese , EJ:  { nombre: "Lautaro", password: 123457, saldo: 120 },

/* 1- LOGIN DE USUARIO => COMPARAR USUARIO Y CONTRASEÑA */
function login(usuario, password) {
  /* - recorrer el array de cuentas y preguntar si el nombre de usuario y contraseña coincide con alguno del array  */
  /* - Retornar algo que me haga dar cuenta si el usuario y contraseña son correctos: true, el usuario, "ingreso correcto" */
  let usuarioEncontrado = cuentas.find(
    (cuenta) => usuario === cuenta.nombre && password === cuenta.password
  );

  return usuarioEncontrado;
}



/* --------MANEJO DEL DOM------------------------ */
const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const loginButton = document.getElementById("login");

let usuarioIngresado = "";
let passwordIngresado = "";

usuario.addEventListener("change", function (event) {
  console.log("Usuario=>", event.target.value); //esta variable me dirá que está escrito en el input  => event.target.value
  usuarioIngresado = event.target.value;
});

password.addEventListener("change", function (event) {
  console.log("contraseña=>", event.target.value); //esta variable me dirá que está escrito en el input => event.target.value
  passwordIngresado = event.target.value;
});

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  usuarioRegistrado = login(usuarioIngresado, passwordIngresado);

  if (usuarioRegistrado) {
    localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioRegistrado));//setearme en la memoria del navegador el usuario
    window.location= "./home.html"// ME DIRIGE A OTRA PARTE DE MI SITIO, EJ, OTRO HTML
   
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});

console.log("HAY USUARIO REGISTRADO??????????????????????", usuarioRegistrado);


