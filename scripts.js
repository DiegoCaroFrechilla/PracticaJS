//Variables
const numeroAleatorio = Math.floor(Math.random() * 90000) + 10000; //Numero al azar
console.log("Numero Aleatorio: " + numeroAleatorio);
var numeroAleatorioString = numeroAleatorio.toString(); //Lo pasamos a String 
var numeroAleatorioArray = numeroAleatorioString.split('').map(Number); //El String lo convertimos en array
var numerosArray;
var filasCreadas = 0;
var numeros;
var victoria = false;
//Codigo
// Leemos el número del usuario
function prenValorForm() {
  numeros = document.getElementsByName("numero")[0].value;
  // Verificamos que el valor ingresado sea un número de 5 dígitos
  if (/^\d{5}$/.test(numeros)) {
    numerosArray = numeros.split('').map(Number);
    crearCuadricula();
  } else {
    // Mostramos un mensaje de error si no se introduce un número de 5 dígitos
    const error = document.createElement('p');
    error.innerHTML = 'Escriba un numero de 5 digitos.';
    info.innerHTML = '';
    info.appendChild(error);
  }
}

//Se crea las filas y cuadrados que indican al jugador los intentos
function crearCuadricula() {
  const botonCrearCuadrados = document.getElementById('comprobar_boton');
  const cuadradosPorFila = 5;
  //Creamos la fila
  if (filasCreadas < 5 && victoria == false) {
    const fila = document.createElement('div');
    fila.className = 'fila';
    //Por fila creamos 5 cuadrados
    for (let i = 0; i < cuadradosPorFila; i++) {
      const cuadrado = document.createElement('div');
      cuadrado.className = 'cuadrado';
      fila.appendChild(cuadrado);
      const numeroSolucion = document.createElement('p');
      numeroSolucion.innerHTML = numerosArray[i];
      numeroSolucion.id = 'codigo_numero';
      cuadrado.appendChild(numeroSolucion);
      cuadrado.style.display = "block";
      cuadrado.style.animation = "slide-fwd-center 1s ease";
      //Pintamos el fondo si 
      if (numerosArray[i] === numeroAleatorioArray[i]) { //Se acierta posicion del numero
        cuadrado.style.backgroundColor = 'green';
      } else if (numeroAleatorioArray.includes(numerosArray[i])) { //Se acierta el numero pero no la posicion
        cuadrado.style.backgroundColor = 'yellow';
      }
    }
    contenedor.appendChild(fila);
    filasCreadas++;
    resultado();
  }
}

function resultado() {
  const info = document.getElementById('info');
  //En info ponemos el turno que es
  if (filasCreadas >= 1 && filasCreadas <= 4 && numeroAleatorioString != numeros) {
    const turno = document.createElement('p');
    turno.innerHTML = `Turno ${filasCreadas} de 5`;
    info.innerHTML = '';
    info.appendChild(turno);
    //Si hemos acabado todos los turnos y no hemos adivinado el numero perdemos
  } else if (filasCreadas == 5 && numeroAleatorioString != numeros) {
    const lose = document.createElement('p');
    lose.innerHTML = 'Has Perdido!';
    info.innerHTML = '';
    mostrarImagenDerrota();
    info.appendChild(lose);
    for (let i = 0; 1 < 5; i++) {
      document.getElementsByName('numero_secreto')[i].innerText = numeroAleatorioArray[i];
    }
    //Si adivinamos el numero
  } else if (numeroAleatorioString === numeros) {
    const win = document.createElement('p');
    win.innerHTML = '¡Felicidades! Has acertado';
    info.innerHTML = '';
    info.appendChild(win);
    victoria = true; //Hacemos que no se puedan poner mas cuadrados una vez ganado
    mostrarImagenVictoria();
    for (let i = 0; 1 < 5; i++) {
      document.getElementsByName('numero_secreto')[i].innerHTML = numeroAleatorioArray[i];
    }
  }
}
//Hacemos aparecer una foto cuando se gana o pierde
function mostrarImagenVictoria() {
  setTimeout(() => {
    const imgVictoria = document.getElementById('imgVictoria');
    imgVictoria.style.left = '450px';
    imgVictoria.style.top = '100px';
    imgVictoria.style.transform = 'translate(-50%, -50%)';
    imgVictoria.style.display = 'block';
    imgVictoria.animate(
      [
        { transform: 'rotate(0) scale(0)' },
        { transform: 'rotate(360deg) scale(1)' }
      ],
      {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
    comprobar.style.display = "none"
  }, 1000);
}
function mostrarImagenDerrota() {
  setTimeout(() => {
    const imgVictoria = document.getElementById('imgDerrota');
    imgVictoria.style.left = '450px';
    imgVictoria.style.top = '100px';
    imgVictoria.style.transform = 'translate(-50%, -50%)';
    imgVictoria.style.display = 'block';
    imgVictoria.animate(
      [
        { transform: 'rotate(0) scale(0)' },
        { transform: 'rotate(360deg) scale(1)' }
      ],
      {
        duration: 1000,
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );
    comprobar.style.display = "none"
  }, 1000);
}
