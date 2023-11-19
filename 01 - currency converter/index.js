let nome = prompt("Olá, qual o seu nome?");
alert('Olá ' + nome + ". Seja bem-vindo!");



let opcao = prompt('Digite o tipo da moeda que você deseja converter: Dolar ou Euro');

if (opcao === 'Euro') {
    let valorEuro = prompt("Qual o valor do euro que você deseja converter: ");
    let cotacaoEuro = 5.27;
    let valorConvertido = valorEuro * cotacaoEuro;
    valorConvertido = valorConvertido.toFixed(2);

    alert("O valor de " + valorEuro + " em Real é: " + valorConvertido);
} else if (opcao === 'Dolar') {
    let valorDolar = prompt("Qual o valor do dolar que você deseja converter: ");
    let cotacaoDolar = 4.85;
    let valorConvertido = valorDolar * cotacaoDolar;
    valorConvertido = valorConvertido.toFixed(2);

    alert("O valor de " + valorDolar + " em Real é: " + valorConvertido)
} else {
    alert('Opção inválida. Tente novamente!');
}