// efecto de bienvenida 


window.addEventListener('load', () => {
    const welcome = document.getElementById('bienvenidaScreen');

    setTimeout(() => {
        welcome.classList.add('hidden');
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 800);

    }, 3000);
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


let siguiente = document.querySelector('.siguiente');
let atras = document.querySelector('.atras');

siguiente.addEventListener('click', function(){
    let elementos = document.querySelectorAll('.elementos');
    document.querySelector('.slide').appendChild(elementos[0]);
});

atras.addEventListener('click', function() {
    let elementos = document.querySelectorAll('.elementos');
    document.querySelector('.slide').prepend(elementos[elementos.length - 1]);
});




// ========================================================================================
// voltear las cartas

function voltearCarta(elemento) {
    elemento.classList.toggle('volteada');
}