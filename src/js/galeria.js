document.addEventListener('DOMContentLoaded', function (){
    crearGaleria();
});

function crearGaleria (){
    const galeria = document.querySelector('.galeria-imagenes');

    for( let i = 1; i <=12; i ++ ){
        const imagen = document. createElement('IMG');
        imagen.src= `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añadir la funcion de mostrarImagen

        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }
}

function mostrarImagen(e){
    console.log(e.target.dataset.imagenId);

    const id = parseInt(e.target.dataset.imagenId);
    // Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //Cuando se da click, cerrar la imagen
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }


    //boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent= 'X';
    cerrarImagen.classList.add('btn-cerrar');
    
    overlay.appendChild(cerrarImagen);

    //Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    //Mostrar en el html
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
    
}
