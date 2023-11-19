document.addEventListener('DOMContentLoaded', function() {

    let lista = []

    lista[0] = 'https://img.elo7.com.br/product/original/26A89B7/big-poster-serie-friends-lo01-tamanho-90x60-cm-nerd.jpg';
    lista[1] = 'https://img.elo7.com.br/product/zoom/1E30435/big-poster-vingadores-guerra-infinita-tamanho-90x-0-cm-lo032-poster.jpg';
    lista[2] = 'https://i.ebayimg.com/images/g/BOgAAOSw0KtfjJkM/s-l1200.jpg';

    let imgSerie = document.createElement('img');
    imgSerie.src = lista[0];

    let imgFilme = document.createElement('img');
    imgFilme.src = lista[1];

    let imgAnime = document.createElement('img');
    imgAnime.src = lista[2];

    let imageContainer = document.getElementById('image-container');
    imageContainer.appendChild(imgSerie);
    imageContainer.appendChild(imgFilme);
    imageContainer.appendChild(imgAnime);
});