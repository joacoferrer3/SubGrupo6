document.addEventListener('DOMContentLoaded', function () {
    const imagenes = document.getElementsByTagName('img');

    const nuevoAncho = 800;
    const nuevoAlto = 600;

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.width = nuevoAncho + 'px';
        imagenes[i].style.height = nuevoAlto + 'px';
    }
});
