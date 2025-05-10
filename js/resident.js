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
                if (section.includes('Pago en Línea')) {
                    window.location.href = 'pago-en-linea.html';
                } else if (section.includes('Comunicados')) {
                    window.location.href = 'comunicados.html';
                } else if (section.includes('Selector de área común')) {
                    window.location.href = 'selector-area-comun.html';
                } else if (section.includes('Formulario de nueva solicitud/queja')) {
                    window.location.href = 'nueva-solicitud.html';
                }
            }
        });
    });
    
    // Funcionalidad para el calendario (si estamos en la página de eventos)
    const calendarCells = document.querySelectorAll('.has-event');
    
    if (calendarCells.length > 0) {
        calendarCells.forEach(cell => {
            cell.addEventListener('click', function() {
                const eventTitle = this.querySelector('.event-title').textContent;
                const eventTime = this.querySelector('.event-time').textContent;
                
                alert(`Evento: ${eventTitle}\nHora: ${eventTime}`);
            });
        });
    }
});