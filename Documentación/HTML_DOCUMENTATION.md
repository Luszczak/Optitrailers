# Documentación Técnica del HTML - Proyecto TrailerPelis

## Estructura General

```html
<!DOCTYPE html>
<html lang="en">
    <!-- Configuración básica -->
    <head>...</head>
    <!-- Contenido principal -->
    <body>
        <!-- Encabezado y navegación -->
        <div class="encabezado">...</div>
        <!-- Cartelera de películas -->
        <div class="cartelera">...</div>
        <!-- Sistema de modales -->
        <div class="modal">...</div>
    </body>
</html>
```

## 1. Componentes Principales

### 1.1 Sistema de Navegación
```html
<div class="menu-container">
    <div class="menu-item">
        <button onclick="toggleMenu('community-options')">
            <i class="fas fa-users"></i> Comunidad
        </button>
        <ul id="community-options">
            <!-- Opciones del menú -->
        </ul>
    </div>
</div>
```

**Características**:
- Uso de Font Awesome para iconografía
- Menús desplegables interactivos
- Event handling con JavaScript

### 1.2 Tarjetas de Películas
```html
<div class="pelicula">
    <img src="ruta_imagen" alt="título">
    <div class="info-pelicula">
        <h3>Título</h3>
        <p>Descripción</p>
        <button class="btn-detalles" data-movie="id">Ver detalles</button>
    </div>
</div>
```

**Atributos importantes**:
- `data-movie`: ID único para cada película
- `alt`: Texto alternativo para accesibilidad
- Clases semánticas para estilos

### 1.3 Sistema Modal
```html
<div class="modal" id="movieModal">
    <div class="modal-content">
        <!-- Contenido dinámico -->
    </div>
</div>
```

## 2. Integración con APIs

### 2.1 YouTube Embed
```html
<iframe id="modalTrailer"
        class="modal-trailer"
        src="https://www.youtube.com/embed/VIDEO_ID"
        allowfullscreen>
</iframe>
```

**Parámetros importantes**:
- `allowfullscreen`: Permite pantalla completa
- `src`: URL dinámica del trailer
- Dimensiones responsivas

### 2.2 IMDb Links
```html
<a href="https://www.imdb.com/title/IMDB_ID/"
   target="_blank"
   rel="noopener noreferrer">
    Más información en IMDb
</a>
```

## 3. Mejores Prácticas Implementadas

### 3.1 Accesibilidad
- Uso de atributos ARIA
- Contraste de colores adecuado
- Textos alternativos en imágenes
- Estructura semántica

### 3.2 SEO
- Meta tags optimizados
- Estructura jerárquica de títulos
- URLs amigables
- Contenido semántico

### 3.3 Performance
- Lazy loading de imágenes
- Minificación de recursos
- Optimización de assets
- Cacheo efectivo

## 4. Referencias y Recursos

### 4.1 Documentación Oficial
- [MDN Web Docs](https://developer.mozilla.org/es/)
- [W3C HTML5](https://www.w3.org/TR/html52/)
- [Font Awesome](https://fontawesome.com/docs)

### 4.2 Herramientas Utilizadas
- Font Awesome 6.0.0-beta3
- YouTube iFrame API
- IMDb API Integration

## 5. Ejemplos de Implementación

### 5.1 Agregar Nueva Película
```html
<div class="pelicula">
    <img src="ruta_imagen" alt="Nueva Película">
    <div class="info-pelicula">
        <h3>Título Nueva Película</h3>
        <p>Descripción de la película</p>
        <button class="btn-detalles" data-movie="nuevo_id">
            Ver detalles
        </button>
    </div>
</div>
```

### 5.2 Personalizar Modal
```html
<div class="modal-details">
    <div class="detail-item">
        <i class="fas fa-film"></i>
        <span>Género Personalizado</span>
    </div>
    <!-- Más detalles personalizados -->
</div>
```

## 6. Checklist de Mantenimiento

### 6.1 Al Agregar Contenido
- [ ] Validar HTML (W3C Validator)
- [ ] Verificar accesibilidad (WCAG)
- [ ] Optimizar imágenes
- [ ] Actualizar meta tags

### 6.2 Al Modificar Estructura
- [ ] Mantener jerarquía semántica
- [ ] Verificar responsividad
- [ ] Actualizar documentación
- [ ] Probar cross-browser

## 7. Futuras Mejoras

1. Implementación de microdata
2. Schema.org para películas
3. PWA capabilities
4. Web Components
