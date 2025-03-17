// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de nombres
let amigos = [];

// Función para validar y agregar un nombre
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (!nombre || contieneNumeros(nombre)) {
        alert("Por favor, ingresa un nombre válido (sin números ni espacios vacíos).");
    } else {
        amigos.push(nombre);
        mostrarLista();
    }
    input.value = ""; // Limpia el campo de entrada
}

// Validar si el nombre contiene números de manera sencilla
function contieneNumeros(nombre) {
    for (let i = 0; i < nombre.length; i++) {
        if (nombre[i] >= "0" && nombre[i] <= "9") {
            return true; // Devuelve true si encuentra un número
        }
    }
    return false; // Devuelve false si no encuentra ningún número
}


// Función para mostrar la lista de nombres en el HTML
function mostrarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para realizar el sorteo y mostrar el resultado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista. Por favor, añade al menos un nombre.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[randomIndex];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 El amigo secreto es: <strong>${amigoSeleccionado}</strong> 🎉</p>`;

    // Limpia la lista y reinicia el array
    amigos = [];
    mostrarLista();
}
