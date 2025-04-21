document.addEventListener('DOMContentLoaded', () => {

    //----------------CARTELERA------------------//
        // Datos de las películas
        const movies = {
            1: {
                title: "Minecraft la película",
                description: "Explora el mundo de Minecraft en esta emocionante aventura.",
                genre: "Aventura",
                duration: "1h 45m",
                rating: "PG",
                releaseDate: "2023-05-01",
                cast: "Steve, Alex, Creeper",
                director: "Markus Persson",
                trailer: "https://www.youtube.com/embed/W_l7bXqWZyY",
                imdb: "https://www.imdb.com/es/title/tt3566834/" // IMDb link
            },
            2: {
                title: "Kaiju N°8",
                description: "Una historia llena de acción y monstruos gigantes.",
                genre: "Acción",
                duration: "2h 10m",
                rating: "PG-13",
                releaseDate: "2023-06-15",
                cast: "Kafka Hibino, Mina Ashiro",
                director: "Shinji Higuchi",
                trailer: "https://www.youtube.com/embed/n99eH2dePnA",
                imdb: "https://www.imdb.com/es/title/tt35636950/" // IMDb link
            },
            3: {
                title: "Blancanieves",
                description: "Una joven princesa, perseguida por una reina celosa, encuentra refugio con inesperados aliados y descubre su verdadero poder.",
                genre: "Comedia",
                duration: "1h 30m",
                rating: "PG",
                releaseDate: "2023-07-20",
                cast: "John Doe, Jane Smith",
                director: "Emily Johnson",
                trailer: "https://www.youtube.com/embed/BE0BwFSYXOQ",
                imdb: "https://www.imdb.com/es/title/tt6208148/" // IMDb link
            }
        };
    
        // Referencias al modal y sus elementos
        const modal = document.getElementById("movieModal");
        const modalTitle = document.getElementById("modalTitle");
        const modalTrailer = document.getElementById("modalTrailer");
        const modalDetails = document.getElementById("modalDetails");
        const closeModal = document.getElementById("closeModal");
    
        // Función para abrir el modal con los datos de la película
        function openModal(movieId) {
            const movie = movies[movieId];
            if (!movie) {
                console.error(`No se encontró la película con ID: ${movieId}`);
                return;
            }
    
            modalTitle.textContent = movie.title;
            modalTrailer.src = movie.trailer;
            modalDetails.innerHTML = `
                <div class="detail-item"><i class="fas fa-film"></i><span>${movie.genre}</span></div>
                <div class="detail-item"><i class="fas fa-clock"></i><span>${movie.duration}</span></div>
                <div class="detail-item"><i class="fas fa-star"></i><span>${movie.rating}</span></div>
                <div class="detail-item"><i class="fas fa-calendar-alt"></i><span>${movie.releaseDate}</span></div>
                <div class="detail-item"><i class="fas fa-users"></i><span>${movie.cast}</span></div>
                <div class="detail-item"><i class="fas fa-video"></i><span>${movie.director}</span></div>
                <div class="detail-item imdb-link">
                    <i class="fas fa-link"></i>
                    <a id="modalIMBd" href="${movie.imdb}" target="_blank" rel="noopener noreferrer">Más información en IMDb</a>
                </div>
            `;
            modal.classList.add("active");
        }
    
        // Función para cerrar el modal
        function closeModalHandler() {
            modal.classList.remove("active");
            modalTrailer.src = ""; // Detener el video
        }
    
        // Asignar eventos a los botones "Ver detalles"
        document.querySelectorAll(".btn-detalles").forEach(button => {
            button.addEventListener("click", (e) => {
                const movieId = e.target.getAttribute("data-movie");
                openModal(movieId);
            });
        });
    
        // Asignar evento al botón de cerrar
        closeModal.addEventListener("click", closeModalHandler);
    
        // Cerrar el modal al hacer clic fuera de él
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModalHandler();
        });
    
        // Cerrar el modal al presionar la tecla "Escape"
        window.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modal.classList.contains("active")) closeModalHandler();
        });
    
    
    
    //---------------HEADER------------------//
    
        
