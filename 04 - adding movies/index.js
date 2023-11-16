function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    var trailerFilme = document.getElementById('trailer').value;

    // pegando a div para colocar os filmes dentro
    var elementoListaFilmes = document.getElementById('listaFilmes');
    
    // inserindo a imagem e o link do trailer dentro da tag <a>
    elementoListaFilmes.innerHTML += '<a href="' + trailerFilme + '" target="_blank">' +
        '<img src="' + filmeFavorito + '" alt="Filme">' +
        '</a>';

    // limpar os campos de entrada
    document.getElementById('filme').value = '';
    document.getElementById('trailer').value = '';
}