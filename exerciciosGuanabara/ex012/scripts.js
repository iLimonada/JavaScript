let clicou = window.document.querySelector('section#clique')

function botao() {
    let numero = Number(window.prompt("Digite um número: "))

    if (numero % 2 == 0) {
        clicou.innerHTML = `<p>O número ${numero} digitado é <strong>PAR</strong></p>`
    }
    else {
        clicou.innerHTML = `<p>O número ${numero} digitado é <strong>ÍMPAR</strong></p>`
    }
        
}