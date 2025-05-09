# Documentación Detallada del CSS - TrailerPelis

## 1. Sistema de Variables
```css
:root {
    --primary: #8B1A0E;        /* Color principal (rojo oscuro) */
    --primary-hover: #a8231a;  /* Versión hover del color principal */
    --bg-dark: #010113;        /* Fondo principal (casi negro) */
    --bg-card: #14142369;      /* Fondo semi-transparente para tarjetas */
    --bg-modal: #05052092;     /* Fondo semi-transparente para modales */
    --text-light: #e0e0e0;     /* Color de texto claro */
    --shadow: 0 4px 8px rgba(0, 0, 0, 0.3);  /* Sombra estándar */
    --border-radius: 10px;     /* Radio de borde estándar */
}
```

**Uso de Variables**:
- Mantiene consistencia en todo el diseño
- Facilita cambios globales
- Mejora mantenibilidad

## 2. Componentes Principales

### 2.1 Encabezado
```css
.encabezado {
    background-color: #1e1e2f;
    border-bottom: 4px solid var(--primary);
    /* Estilos para crear un header llamativo */
}
```

**Características**:
- Borde inferior distintivo
- Espaciado interno generoso
- Texto centrado

### 2.2 Cartelera de Películas
```css
.cartelera {
    background-color: var(--bg-modal);
    border: 2px solid var(--primary);
    max-width: 1500px;
    /* Grid responsivo para películas */
}

.peliculas {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    /* Sistema de layout flexible */
}
```

**Sistema de Grid**:
- Flex para alineación
- Gap para espaciado consistente
- Wrap para responsividad

### 2.3 Tarjetas de Películas
```css
.pelicula {
    background-color: var(--bg-card);
    width: 350px;
    height: 700px;
    transition: transform 0.3s ease;
}

.pelicula:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(139, 0, 0, 0.515);
}
```

**Efectos y Animaciones**:
- Escala al hover
- Sombra dinámica
- Transiciones suaves

### 2.4 Sistema Modal
```css
.modal {
    position: fixed;
    background-color: #01011336;
    backdrop-filter: blur(5px);
    /* Sistema de modal con blur */
}

.modal-content {
    background-color: var(--bg-modal);
    backdrop-filter: blur(10px);
    max-width: 900px;
    /* Contenido del modal */
}
```

**Características del Modal**:
- Efecto blur en fondo
- Animaciones de entrada/salida
- Diseño responsivo

## 3. Técnicas Avanzadas

### 3.1 Efectos de Cristal (Glassmorphism)
```css
.modal-content {
    background-color: var(--bg-modal);
    backdrop-filter: blur(10px);
    border: 2px solid var(--primary);
}
```

### 3.2 Animaciones
```css
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

## 4. Sistema Responsivo

### 4.1 Media Queries
```css
@media (max-width: 768px) {
    .peliculas {
        flex-direction: column;
    }
    
    .pelicula {
        width: 90%;
    }
    
    .modal-trailer {
        height: 250px;
    }
}
```

### 4.2 Layouts Flexibles
- Uso de unidades relativas
- Flexbox para alineación
- Grid para estructura

## 5. Consejos de Personalización

### 5.1 Cambiar Tema de Color
```css
:root {
    --primary: #nuevo-color;
    --primary-hover: #nuevo-color-hover;
    /* Actualizar variables de color */
}
```

### 5.2 Modificar Animaciones
```css
.pelicula {
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 6. Optimización

### 6.1 Performance
- Uso de transform en lugar de propiedades que causan reflow
- Animaciones optimizadas
- CSS modular y reutilizable

### 6.2 Buenas Prácticas
- Nombres de clases semánticos
- Especificidad controlada
- Comentarios descriptivos

## 7. Debugging

### 7.1 Problemas Comunes
1. Overlapping de elementos:
   - Revisar z-index
   - Verificar posicionamiento

2. Responsividad:
   - Comprobar breakpoints
   - Validar unidades relativas

## 8. Referencias

1. [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
2. [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
3. [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
4. [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)

## 9. Próximas Mejoras Sugeridas

1. Implementar temas light/dark
2. Agregar más animaciones
3. Mejorar accesibilidad
4. Optimizar para diferentes dispositivos
5. Implementar CSS Grid areas
