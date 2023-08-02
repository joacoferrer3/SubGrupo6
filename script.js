document.addEventListener('DOMContentLoaded', function() {
    const imagenes = document.getElementsByTagName('img');

    const ancho = 800;
    const alto = 600;

    for (let i=0; i<imagenes.length; i++){
        imagenes[i].style.width = ancho + 'px';
        imagenes[i].style.height = alto + 'px';
    }
});