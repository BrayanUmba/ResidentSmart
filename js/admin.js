document.addEventListener('DOMContentLoaded', function() {
    // Manejar clics en los elementos del menú lateral
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Si no es el enlace de cerrar sesión y no tiene un href específico
            if (!this.textContent.includes('Cerrar sesión') && this.getAttribute('href') === '#') {
                e.preventDefault();
                
                // Quitar la clase active de todos los enlaces
                navLinks.forEach(item => {
                    item.classList.remove('active');
                });
                
                // Agregar la clase active al enlace clickeado
                this.classList.add('active');
                
                // Aquí se podría agregar lógica para cargar el contenido correspondiente
                const section = this.textContent.trim();
                console.log(`Navegando a la sección: ${section}`);
                
                // Redireccionar según la opción seleccionada
                if (section.includes('Comunicación con Residentes')) {
                    window.location.href = 'comunicacion-residentes.html';
                } else if (section.includes('Historial de pagos')) {
                    window.location.href = 'historial-pagos.html';
                }
            }
        });
    });
    
    // Manejar el envío del formulario de respuesta
    const responseForm = document.querySelector('form');
    if (responseForm) {
        responseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const comentario = document.getElementById('comentario').value;
            
            if (!comentario) {
                alert('Por favor, escribe un comentario antes de enviar.');
                return;
            }
            
            // Aquí iría la lógica para enviar la respuesta
            console.log('Enviando respuesta:', comentario);
            
            // Limpiar el formulario y mostrar confirmación
            this.reset();
            alert('Respuesta enviada correctamente.');
        });
    }
});