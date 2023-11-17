var ana = {
    nome: "Ana",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var pupo = {
    nome: "Pupo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};

var gustavo = {
    nome: "Gustavo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
};


var elementoTabela = document.getElementById('players');

exibirTela();

function exibirTela() {

    elementoTabela.innerHTML = `
<tr>
    <td>${ana.nome}</td>
    <td>${ana.vitoria}</td>
    <td>${ana.empate}</td>
    <td>${ana.derrota}</td>
    <td>${ana.pontos}</td>
    <td><button onClick="adicionarVitoria(ana)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(ana)">Empate</button></td>
    <td><button onClick="adicionarDerrota(ana)">Derrota</button></td>
</tr>
<tr>
    <td>${gustavo.nome}</td>
    <td>${gustavo.vitoria}</td>
    <td>${gustavo.empate}</td>
    <td>${gustavo.derrota}</td>
    <td>${gustavo.pontos}</td>
    <td><button onClick="adicionarVitoria(gustavo)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(gustavo)">Empate</button></td>
    <td><button onClick="adicionarDerrota(gustavo)">Derrota</button></td>
</tr>
<tr>
    <td>${pupo.nome}</td>
    <td>${pupo.vitoria}</td>
    <td>${pupo.empate}</td>
    <td>${pupo.derrota}</td>
    <td>${pupo.pontos}</td>
    <td><button onClick="adicionarVitoria(pupo)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(pupo)">Empate</button></td>
    <td><button onClick="adicionarDerrota(pupo)">Derrota</button></td>
</tr>
`;
}

function adicionarVitoria(jogador) {
    jogador.vitoria++
        jogador.pontos = jogador.pontos + 3;
    exibirTela()
}

function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos = jogador.pontos + 1;
    exibirTela();

}

function adicionarDerrota(jogador) {
    jogador.derrota++

        if (jogador.pontos > 0) {
            jogador.pontos = jogador.pontos - 3;
        } else {
            jogador.pontos = jogador.pontos;
        }
    exibirTela()
}