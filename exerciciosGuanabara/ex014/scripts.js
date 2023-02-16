function botao() {
    let weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const data = new Date()
    let clicou = window.document.querySelector('section#clique')
    clicou.innerHTML = `<p>O que eu recebi do sistema foi ${data}</p>`
}