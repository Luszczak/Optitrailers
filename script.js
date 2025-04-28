document.addEventListener('DOMContentLoaded', () => {

    //----------------CARTELERA------------------//
        // Datos de las películas
        const movies = {
            1: {
                title: "Minecraft la película",
                genre: "Aventura",
                duration: "1h 45m",
                rating: "PG",
                releaseDate: "20235",
                cast: "Steve, Alex, Creeper",
                director: "Markus Persson",
                trailer: "https://www.youtube.com/embed/W_l7bXqWZyY",
                imdb: "https://www.imdb.com/es/title/tt3566834/" // IMDb link
            },
    
            2: {
                title: "Blancanieves",
                genre: "Comedia",
                duration: "1h 30m",
                rating: "PG",
                releaseDate: "2025",
                cast: "John Doe, Jane Smith",
                director: "Emily Johnson",
                trailer: "https://www.youtube.com/embed/BE0BwFSYXOQ",
                imdb: "https://www.imdb.com/es/title/tt6208148/" // IMDb link
            },
    
            3: {
                title: "Thunderbolts*",
                genre: "Accion",
                duration: "2h 6min",
                rating: "PG-13",
                releaseDate: "2025",
                cast: "Florence PughLewis, PullmanSebastian Stan",
                director: "Jake Schreier",
                trailer: "https://www.youtube.com/embed/N1GAypxl3XE",
                imdb: "https://www.imdb.com/es/title/tt20969586/" // IMDb link
            },
    
            4: {
                title: "Pecadores",
                genre: "Accion",
                duration: "2h 17min",
                rating: "B15",
                releaseDate: "2025",
                cast: "Miles CatonSaul, WilliamsAndrene, Ward-Hammond",
                director: "Ryan Coogler",
                trailer: "https://www.youtube.com/embed/bAkWFyEEYSI",
                imdb: "https://www.imdb.com/es/title/tt31193180/" // IMDb link
            },
    
            5: {
                title: "Kaiju N°8",
                genre: "Accion",
                duration: "2h 10m",
                rating: "PG-13",
                releaseDate: "2025",
                cast: "Kafka Hibino, Mina Ashiro",
                director: "Shinji Higuchi",
                trailer: "https://www.youtube.com/embed/n99eH2dePnA",
                imdb: "https://www.imdb.com/es/title/tt35636950/" // IMDb link
            },
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
    
    // Función para cerrar todos los menús desplegables
         function closeAllMenus() {
             document.querySelectorAll('.menu-item ul').forEach(menu => {
                 menu.style.display = 'none';
             });
         }
     
         // Función para alternar un menú desplegable
         function toggleMenu(menuId) {
             const menu = document.getElementById(menuId);
             if (menu.style.display === 'block') {
                 menu.style.display = 'none';
             } else {
                 closeAllMenus(); // Cierra otros menús antes de abrir el seleccionado
                 menu.style.display = 'block';
             }
         }
     
         // Asignar eventos a los botones del menú
         document.querySelectorAll('.menu-item button').forEach(button => {
             const menuId = button.getAttribute('onclick').match(/toggleMenu\('(.+)'\)/)[1];
             button.addEventListener('click', (e) => {
                 e.stopPropagation(); // Evita que el clic cierre el menú
                 toggleMenu(menuId);
             });
         });
     
         // Cerrar todos los menús si se hace clic fuera de ellos
         document.addEventListener('click', () => {
             closeAllMenus();
         });
     });
