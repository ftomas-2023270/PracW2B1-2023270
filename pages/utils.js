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