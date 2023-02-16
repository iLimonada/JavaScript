let contador = 0
let final = window.document.querySelector('section#inicio')

function contar() {
    contador++
    final.innerHTML = `<p>O contador está com ${contador} cliques.</p>`
}

function zerar() {
    contador = 0
    final.innerHTML = `<p> O contador zerou.</p>`
}
