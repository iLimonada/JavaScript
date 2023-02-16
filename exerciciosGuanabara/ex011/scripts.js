let resultado = window.document.querySelector('p#dados')

function calcular() {
    let nome = window.prompt("Qual o seu nome?")
    let nota1 = Number(window.prompt(`Digite a primeira nota de ${nome}`))
    let nota2 = Number(window.prompt(`Digite a segunda nota de ${nome}`))

    let media = (nota1 + nota2) / 2
    let situacaoFinal

    if(media >= 6){
        situacaoFinal = `Parabens ${nome}, você foi APROVADO!`
    }
    else if (media < 6) {
        situacaoFinal = `Que triste ${nome}, você foi REPROVADO!`
    }
    
    resultado.innerHTML = `<p>Calculando a média final de ${nome}</p>` 
    resultado.innerHTML += `<p>As notas obtidas foram ${nota1} e ${nota2} 🖖</p>`    
    resultado.innerHTML += `<p>A média final será ${media}!🖖</p>`
    resultado.innerHTML += `<p>Situacao Final: <strong>${situacaoFinal}</strong></p>`     
}