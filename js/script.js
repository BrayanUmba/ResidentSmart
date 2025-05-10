document.addEventListener('DOMContentLoaded', function() {
    // Obtener el rol seleccionado del almacenamiento local
    const selectedRole = localStorage.getItem('selectedRole');
    
    // Mostrar el rol seleccionado en la página
    const rolElement = document.getElementById('rolSeleccionado');
    if (rolElement && selectedRole) {
        rolElement.textContent = `Rol seleccionado: ${selectedRole}`;
    }
    
    // Manejar el envío del formulario de inicio de sesión
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validación simple
            if (!email || !password) {
                alert('Por favor, complete todos los campos.');
                return;
            }
            
            // Simulación de inicio de sesión según el rol
            if (selectedRole === 'administrador') {
                if (email === 'administrador' && password === 'administrador') {
                    // Redirigir al panel de administrador
                    window.location.href = 'admin-panel.html';
                } else {
                    // Simulación de inicio de sesión fallido
                    alert('Credenciales incorrectas para administrador');
                }
            } else if (selectedRole === 'residente') {
                if (email === 'administrador' && password === 'administrador') {
                    // Redirigir a la página de eventos del residente
                    window.location.href = 'residente-eventos.html';
                } else {
                    // Simulación de inicio de sesión fallido
                    alert('Credenciales incorrectas para residente');
                }
            } else if (selectedRole === 'concejo') {
                if (email === 'concejo' && password === 'concejo') {
                    // Redirigir a la página del concejo (aún no implementada)
                    alert('Inicio de sesión exitoso como concejo. Redirección pendiente.');
                } else {
                    // Simulación de inicio de sesión fallido
                    alert('Credenciales incorrectas para concejo');
                }
            } else {
                alert('Por favor, seleccione un rol antes de iniciar sesión.');
            }
        });
    }
});