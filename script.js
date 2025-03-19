document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();
    
    if (nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    if (!validarEmail(correo)) {
        alert('Por favor, ingresa un correo válido.');
        return;
    }

    alert('¡Mensaje enviado con éxito!');
    document.getElementById('formulario').reset();
});

function validarEmail(correo) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}
