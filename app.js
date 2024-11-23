let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';
function verificarConsole() {
    console.log('O botão foi clicado')
}

function verificarAlert() {
    alert('Eu amo JS');
}

function verificarPrompt() {
    let respostaCidade = prompt('Digite o nome de uma cidade brasileira:');
    alert(`Estive em ${respostaCidade} e lembrei de você`);
    
}

function verificarSoma() {
    let primeiroNumero = parseInt(prompt('Digite um número inteiro:'));
    let segundoNumero = parseInt(prompt('Digite outro número inteiro:'))
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
    
}