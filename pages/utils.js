// Recuperar los datos almacenados en localStorage
const userEmail = localStorage.getItem("userEmail");

// Muestra el email en el perfil de usuario
if (userEmail) {
    document.getElementById("userEmail").innerText = userEmail;
} else {
    // Si no hay datos, redirige al login
    alert("No estás autenticado. Por favor, inicia sesión.");
    window.location.href = "../index.html";
}


// Funcionalidad para alternar los detalles de los contactos
// Alternar detalles de contactos
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todos los botones de "Mostrar más"
    const toggleButtons = document.querySelectorAll(".toggle-details");

    toggleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling; // Selecciona el siguiente elemento (los detalles)
            const isVisible = details.style.display === "block"; // Verifica si está visible

            // Alternar visibilidad
            details.style.display = isVisible ? "none" : "block";

            // Cambiar texto del botón
            this.textContent = isVisible ? "Mostrar más" : "Mostrar menos";
        });
    });
});

document.getElementById("logoutButton").addEventListener("click", function () {
    // Redirige a la página de inicio de sesión
    window.location.href = "../index.html";
});
