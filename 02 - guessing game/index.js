var numeroSecreto = parseInt(Math.random() * 51);
var quantidadeVezes = 0;
var quantidadeTentativas = 10;

while(numeroChute != numeroSecreto){

    var numeroChute = prompt('Digite um número entre 0 e 50');
    quantidadeVezes = quantidadeVezes + 1;
    quantidadeTentativas = quantidadeTentativas - 1;

    if(numeroChute == numeroSecreto){
        alert('O número está correto' + '\nSeu número de tentativas foi de ' + quantidadeVezes + ' vezes.');

    } else if(numeroChute < numeroSecreto){
        alert('Errou... O número secreto é maior.' + '\nAinda restam ' + quantidadeTentativas + ' tentativas.');

    } else if (numeroChute > numeroSecreto){
        alert('Errou... o número secreto é menor.' + '\nAinda restam ' + quantidadeTentativas + ' tentativas.')
    }

    if(quantidadeTentativas == 0){
        alert('A quantidade de tentativas acabou. \nSinto muito :(')
    }
}