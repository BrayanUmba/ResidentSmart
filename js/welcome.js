// Función para manejar la selección de rol
function selectRole(role) {
    // Guardar el rol seleccionado en localStorage para usarlo después
    localStorage.setItem('selectedRole', role);
    
    // Redirigir al usuario a la página de login
    window.location.href = 'index.html';
}

// Evento para el botón de volver
document.getElementById('volverBtn').addEventListener('click', function(e) {
    e.preventDefault();
    history.back();
});

// Evento para el botón de cerrar sesión
document.getElementById('cerrarSesion').addEventListener('click', function(e) {
    e.preventDefault();
    // Limpiar cualquier información de sesión
    localStorage.removeItem('selectedRole');
    // Redirigir a la página principal o de login
    window.location.href = 'index.html';
});