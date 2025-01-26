//Script validacion login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    const email = document.getElementById('exampleFormControlInput1').value.trim();
    const password = document.getElementById('inputPassword6').value.trim();

    if (!email || !password) {
        event.preventDefault(); // Evita que el formulario se envíe
        alert('Por favor, completa todos los campos antes de iniciar sesión.');
    }
});

// Funcionalidad para alternar los detalles de los contactos
document.querySelectorAll('.toggle-details').forEach(button => {
    button.addEventListener('click', function() {
        const details = this.nextElementSibling;
        const isVisible = details.style.display === 'block';
        details.style.display = isVisible ? 'none' : 'block';
        this.textContent = isVisible ? 'Mostrar más' : 'Mostrar menos';
    });
});