// Cogemos el numero aleatorio
const numeroAleatorio = Math.floor(Math.random() * 90000) + 10000;
console.log("Numero Aleatorio: " + numeroAleatorio);
var numeroAleatorioString = numeroAleatorio.toString(); //Lo pasamos a String 
var numeroAleatorioArray = numeroAleatorioString.split('').map(Number); //El String lo convertimos en array
var numerosArray;

//Leemos el numero del usuario
function prenValorForm() {
  var numeros = document.getElementsByName("numero")[0].value;
  console.log(`Numero del usuario: ${numeros}`);
  numerosArray = numeros.split('').map(Number); //Pasamos el numero a un Array 
  crearCuadricula();
}
//Se crea las
function crearCuadricula(){ 
  const botonCrearCuadrados = document.getElementById('comprobar_boton');
  let filasCreadas = 0;
  const cuadradosPorFila = 5;
  if (filasCreadas < 5) {
    const fila = document.createElement('div');
    fila.className = 'columna';
    for (let i = 0; i < cuadradosPorFila; i++) {
      const cuadrado = document.createElement('div');
      cuadrado.className = 'cuadrado';
      fila.appendChild(cuadrado);
      const numeroSolucion = document.createElement('p');
      numeroSolucion.innerHTML = numerosArray[i];
      numeroSolucion.id = 'codigo_numero';
      cuadrado.appendChild(numeroSolucion);
    }
    contenedor.appendChild(fila);
    filasCreadas++;
  }
}
