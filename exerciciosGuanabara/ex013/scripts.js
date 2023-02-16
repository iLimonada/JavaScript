function botao() {
    let clicou = window.document.querySelector('section#clique')
    let numero1 = Number(window.prompt("Digite um número: "))
    let numero2 = Number(window.prompt("Digite outro número: "))

    if (numero1 > numero2) {
        clicou.innerHTML = `<p>Foi verificado e o número ${numero1} é maior que o número ${numero2}</p>`
    }
    else if (numero2 > numero1) {
        clicou.innerHTML = `<p>Foi verificado e o número ${numero2} é maior que o número ${numero1}</p>`
    }
    else {
        clicou.innerHTML = `<p>Foi verificado e os números ${numero1} e ${numero2} são iguais</p>`
    }
}