// Validación y almacenamiento de datos del usuario
document.getElementById("loginForm").addEventListener("submit", function (event) {
    const email = document.getElementById("exampleFormControlInput1").value.trim();
    const password = document.getElementById("inputPassword6").value.trim();

    if (!email || !password) {
        event.preventDefault(); // Evita el envío del formulario
        alert("Por favor, completa todos los campos antes de iniciar sesión.");
    } else {
        event.preventDefault(); // Detenemos el envío del formulario

        // Almacena los datos en localStorage o sessionStorage
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password); // Solo si es necesario (no recomendado para contraseñas reales)

        // Redirige a la página de contactos
        window.location.href = "pages/contact.html";
    }
});
