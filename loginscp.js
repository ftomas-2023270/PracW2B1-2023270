//Script validacion login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('exampleFormControlInput1').value.trim();
    const password = document.getElementById('inputPassword6').value.trim();

    if (!email || !password) {
        event.preventDefault(); // Evita que el formulario se envíe
        alert('Por favor, completa todos los campos antes de iniciar sesión.');
    }
}); 

// Redirige a contacts.html cuando el formulario sea enviado
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    window.location.href = "contact.html"; // Redirige a la página de contactos
}); 