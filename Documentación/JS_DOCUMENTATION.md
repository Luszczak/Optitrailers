# Documentación Detallada del JavaScript - TrailerPelis

## 1. Estructura Base del Código

### 1.1 Configuración Global
```javascript
const CONFIG = {
    animationDuration: 300,  // Duración de animaciones en ms
    modalClass: 'active'     // Clase para activar modales
};
```

### 1.2 Utilidades
```javascript
const utils = {
    // Selector simple (reemplaza document.querySelector)
    $: (selector) => document.querySelector(selector),
    
    // Selector múltiple (reemplaza document.querySelectorAll)
    $$: (selector) => document.querySelectorAll(selector),
    
    // Manejador de múltiples eventos
    addEventListeners(element, events, handler) {
        events.forEach(event => element.addEventListener(event, handler));
    }
};
```

## 2. Sistema de Películas

### 2.1 Estructura de Datos
```javascript
const movies = {
    1: {
        title: "Título",
        genre: "Género",
        duration: "Duración",
        rating: "Clasificación",
        releaseDate: "Fecha",
        cast: "Reparto",
        director: "Director",
        trailer: "URL_YouTube",
        imdb: "URL_IMDB"
    }
    // ... más películas
};
```

**Explicación**:
- Cada película es un objeto indexado por ID
- Contiene toda la información necesaria para el modal
- Facilita la actualización y mantenimiento

### 2.2 Sistema Modal

```javascript
function openModal(movieId) {
    const movie = movies[movieId];
    if (!movie) return;  // Validación

    // Actualización del contenido
    modalTitle.textContent = movie.title;
    modalTrailer.src = movie.trailer;
    
    // Construcción dinámica de detalles
    modalDetails.innerHTML = `
        <div class="detail-item">
            <i class="fas fa-film"></i>
            <span>${movie.genre}</span>
        </div>
        // ... más detalles
    `;
}
```

**Proceso del Modal**:
1. Recibe ID de película
2. Valida existencia
3. Actualiza contenido
4. Muestra modal con animación

## 3. Sistema de Menú

### 3.1 Gestión de Menús Desplegables
```javascript
function closeAllMenus() {
    utils.$$('.menu-item ul').forEach(menu => {
        menu.style.display = 'none';
    });
}

function toggleMenu(menuId) {
    const menu = utils.$(`#${menuId}`);
    const isVisible = menu.style.display === 'block';
    
    closeAllMenus();  // Cierra otros menús
    menu.style.display = isVisible ? 'none' : 'block';
}
```

**Flujo de Trabajo**:
1. Usuario hace clic en botón
2. Se cierran todos los menús
3. Se muestra/oculta el menú seleccionado

## 4. Event Listeners

### 4.1 Delegación de Eventos
```javascript
document.addEventListener('click', (e) => {
    // Botones de detalles
    if (e.target.matches('.btn-detalles')) {
        openModal(e.target.dataset.movie);
    }
    // Cierre de modal
    else if (e.target === modal || e.target.matches('.modal-close')) {
        closeModalHandler();
    }
});
```

**Ventajas**:
- Mejor performance
- Manejo centralizado
- Menos memoria utilizada

### 4.2 Teclas de Acceso Rápido
```javascript
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains(CONFIG.modalClass)) {
        closeModalHandler();
    }
});
```

## 5. Optimización y Performance

### 5.1 Cacheo de Elementos DOM
```javascript
const modal = utils.$("#movieModal");
const modalTitle = utils.$("#modalTitle");
const modalTrailer = utils.$("#modalTrailer");
```

**Beneficios**:
- Reduce queries al DOM
- Mejor performance
- Código más limpio

### 5.2 Manejo de Recursos
```javascript
function closeModalHandler() {
    modal.classList.remove(CONFIG.modalClass);
    modalTrailer.src = "";  // Libera recursos del video
}
```

## 6. Guía de Modificación

### 6.1 Agregar Nueva Película
```javascript
movies[6] = {
    title: "Nueva Película",
    genre: "Acción",
    duration: "2h 30m",
    rating: "PG-13",
    releaseDate: "2024",
    cast: "Actor 1, Actor 2",
    director: "Director",
    trailer: "URL_YouTube",
    imdb: "URL_IMDB"
};
```

### 6.2 Modificar Comportamiento Modal
```javascript
function openModal(movieId) {
    const movie = movies[movieId];
    if (!movie) {
        console.error(`Película no encontrada: ${movieId}`);
        return;
    }
    // Personaliza el contenido aquí
}
```

## 7. Debugging y Solución de Problemas

### 7.1 Problemas Comunes
1. Modal no abre:
   - Verificar ID de película
   - Confirmar estructura de datos
   - Revisar event listeners

2. Videos no cargan:
   - Validar URL de YouTube
   - Verificar permisos de iframe
   - Comprobar conexión

### 7.2 Console Logs Útiles
```javascript
function debugModal(movieId) {
    console.log('Movie ID:', movieId);
    console.log('Movie Data:', movies[movieId]);
    console.log('Modal State:', modal.classList.contains('active'));
}
```

## 8. Referencias y Recursos

1. [MDN Event Delegation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)
2. [YouTube iFrame API](https://developers.google.com/youtube/iframe_api_reference)
3. [JavaScript Performance](https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work)

## 9. Próximos Pasos Sugeridos

1. Implementar sistema de búsqueda
2. Agregar filtros por género
3. Integrar API de reseñas
4. Implementar sistema de favoritos
5. Agregar analytics
