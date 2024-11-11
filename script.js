//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega

document.addEventListener("DOMContentLoaded", function () {
    // Oculta todas las secciones inicialmente
    const sections = document.querySelectorAll("section");
    sections.forEach(section => section.style.display = "none");

    // Selecciona el footer
    const footer = document.querySelector(".footer");

    // Función para mostrar solo una sección y ocultar las demás
    function showSection(id) {
        sections.forEach(section => {
            section.style.display = (section.id === id) ? "block" : "none";
        });

        // Oculta el footer en las secciones especificadas
        if (["sobre-mi", "habilidades", "aficiones", "formacion", "proyectos"].includes(id)) {
            footer.style.display = "none";
        } else {
            footer.style.display = "block";
        }
    }

    // Selecciona todos los enlaces del menú de navegación
    const navLinks = document.querySelectorAll(".navegacion__elemento a");

    // Añade el evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el comportamiento de desplazamiento predeterminado

            // Obtener el ID de la sección a mostrar desde el href del enlace
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);
        });
    });

    // Muestra la sección de "Inicio" (presentación) por defecto al cargar la página
    showSection("inicio");

    // Manejar el clic en el botón de menú
    const menuButton = document.querySelector(".boton__menu");
    const navList = document.querySelector(".navegacion__lista");

    menuButton.addEventListener("click", function () {
        // Alternar la visibilidad de la lista de navegación
        if (navList.style.display === "flex") {
            navList.style.display = "none"; // Ocultar
        } else {
            navList.style.display = "flex"; // Mostrar
        }
    });
});

