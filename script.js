// Función para alternar entre "Iniciar sesión" y "Cerrar sesión"
function toggleLogin() {
    const loginButton = document.getElementById("loginButton");
    if (loginButton.innerText === "Iniciar sesión") {
        loginButton.innerText = "Cerrar sesión";
    } else {
        loginButton.innerText = "Iniciar sesión";
    }
}

// Función para ocultar el botón "Agregar Definición"
function hideButton() {
    const addDefinitionButton = document.getElementById("addDefinitionButton");
    addDefinitionButton.style.display = "none";
}

// Función para incrementar el número de "me gusta" y mostrar una alerta
function incrementLike(button, title) {
    let currentLikes = parseInt(button.innerText);
    currentLikes++;
    button.innerText = currentLikes + " me gusta";

    // Mostrar alerta con el título de la definición
    alert(`${title} was liked`);
}
