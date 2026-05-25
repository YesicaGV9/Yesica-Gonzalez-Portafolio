// efecto de bienvenida 


window.addEventListener('load', () => {
    const welcome = document.getElementById('bienvenidaScreen');

    setTimeout(() => {
        welcome.classList.add('hidden');
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 800);
    }, 2000);
});


// ============================================================================================
// estado activo del banner segun el scroll

const secciones = document.querySelectorAll("section");
const links = document.querySelectorAll(".navbarGlass a");

window.addEventListener("scroll", () => {

    let seccionActual = "";

    secciones.forEach((seccion) => {

        const top = seccion.offsetTop - 150;
        const alto = seccion.clientHeight;

        if(scrollY >= top && scrollY < top + alto){
            seccionActual = seccion.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("activo");

        if(link.getAttribute("href") === "#" + seccionActual){
            link.classList.add("activo");
        }

    });

});

// ======================================================================================
// efecto de scroll suavecito a la seccion

document.querySelectorAll('.navbarGlass a').forEach(link => {

    link.addEventListener('click', function(e){
        e.preventDefault();
        const destino = document.querySelector(
            this.getAttribute('href')
        );
        destino.scrollIntoView({
            behavior:'smooth',
            block:'start'
        });
    });

});

// ========================================================================
// efecto burbujas en banner

const contenedorBurbujas = document.getElementById('burbujas-container');

function crearBurbuja() {
    const div = document.createElement('div');
    div.classList.add('burbuja');
    div.style.left = `${Math.random() * 100}%`;
    const size = Math.random() * 15 + 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.animationName = "subirBurbuja";
    div.style.animationDuration = `${Math.random() * 5 + 5}s`;
    contenedorBurbujas.appendChild(div);

    div.addEventListener('animationend', () => {
        div.remove();
    });
}

window.addEventListener("DOMContentLoaded", () => {
    setInterval(crearBurbuja, 300);
});



// ========================================================================================
// carrusel de proyectos 


const slide = document.querySelector('.slide');
 
document.querySelector('.siguiente').addEventListener('click', function () {
    // Tomar SOLO los .elementos (excluye cualquier cosa fuera)
    const elementos = slide.querySelectorAll('.elementos');
    slide.appendChild(elementos[0]);
});
 
document.querySelector('.atras').addEventListener('click', function () {
    const elementos = slide.querySelectorAll('.elementos');
    slide.prepend(elementos[elementos.length - 1]);
});



// ========================================================================================
// voltear las cartas

function voltearCarta(elemento) {
    elemento.classList.toggle('volteada');
}


// ================================================================================================
// formulario de contactame

document.getElementById('form-contacto').addEventListener('submit', async function(e) {
    e.preventDefault(); // Evita que Formspreen te redirija a otra página

    const formulario = this;
    const botonEnviar = formulario.querySelector('button[type="submit"]');
    const modal = document.getElementById('modal-exito');
    
    // Feedback visual: deshabilitamos el botón mientras se procesa el envío
    botonEnviar.innerText = "Enviando...";
    botonEnviar.disabled = true;

    // Recolectamos los datos de tus inputs automáticamente
    const datos = new FormData(formulario);

    try {
        // Hacemos la petición HTTP a la URL de tu atributo 'action'
        const respuesta = await fetch(formulario.action, {
            method: formulario.method,
            body: datos,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (respuesta.ok) {
            // Si todo sale bien, abrimos el modal y limpiamos el formulario
            modal.classList.add('mostrar-modal');
            formulario.reset();
        } else {
            alert("Oops! Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.");
        }
    } catch (error) {
        alert("Error de red. Por favor, verifica tu conexión a internet.");
    } finally {
        // Restauramos el botón a su estado original pase lo que pase
        botonEnviar.innerText = "Enviar";
        botonEnviar.disabled = false;
    }
});

// Evento para cerrar el modal al hacer clic en "Entendido"
document.getElementById('btn-cerrar-modal').addEventListener('click', function() {
    document.getElementById('modal-exito').classList.remove('mostrar-modal');
});


// ============================================================================
// contacto rapidpo por Ws
const mensaje = `¡Hola! Estuve viendo tu portafolio web y me encantó la estética de tus desarrollos. Estoy interesado en desarrollar un proyecto contigo. ¿Me podrías dar más información sobre tus servicios y cotizaciones?`;

const telefono = "573026734063";

const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

document.getElementById("whatsappLink").href = url;

// ========================================================================================
// menú hamburguesa responsive
 
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
 
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-abierto');
        menuToggle.classList.toggle('abierto');
    });
 
    // Cerrar el menú al hacer clic en un enlace
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('nav-abierto');
            menuToggle.classList.remove('abierto');
        });
    });
}
 