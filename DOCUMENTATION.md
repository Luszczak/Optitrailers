# Documentación del Proyecto TrailerPelis

## Estructura del Proyecto
```
TrailerPelis-main/
├── index.html      # Estructura principal
├── styles.css      # Estilos y diseño
└── script.js       # Lógica y funcionalidad
```

## Componentes Principales

### 1. Sistema de Navegación
- Menú responsive
- Dropdowns interactivos
- Iconografía con Font Awesome

### 2. Cartelera de Películas
- Grid responsivo
- Tarjetas con hover effects
- Optimización de imágenes

### 3. Sistema Modal
- Diseño backdrop con blur
- Reproductor de trailers
- Información detallada

## Guía de Estilos

### Colores
- Primary: #8B1A0E
- Background: #010113
- Text: #e0e0e0

### Tipografía
- Font principal: Arial
- Tamaños: 
  - Títulos: 2.5rem
  - Subtítulos: 1.2rem
  - Texto: 1rem

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Mejores Prácticas Implementadas

### CSS
1. Variables CSS para consistencia
2. Metodología BEM para naming
3. Flexbox y Grid para layouts
4. Animaciones optimizadas
5. Media queries estratégicos

### JavaScript
1. Event delegation
2. Gestión de estado
3. Manejo de errores
4. Código modular

### Optimización
1. Lazy loading de imágenes
2. Minificación de recursos
3. Cacheo de selectores DOM
4. Animaciones hardware-accelerated

## Guía de Mantenimiento

### Agregando Nuevas Películas
1. Actualizar objeto `movies` en script.js
2. Optimizar imágenes (max 300x500px)
3. Validar enlaces de trailers

### Modificando Estilos
1. Usar variables CSS existentes
2. Seguir estructura de componentes
3. Mantener consistencia en naming

## Notas de Desarrollo
- Compatibilidad: IE11+
- Frameworks: Vanilla JS
- APIs: YouTube Embed
- Performance: 90+ Lighthouse

## Roadmap
1. Implementar sistema de búsqueda
2. Agregar filtros por género
3. Sistema de reseñas
4. Dark/Light mode
