function botao() {
    let clicou = window.document.querySelector('section#clique')
    let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    let diasSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    let date = new Date
    let dia = date.getDate()
    let mes = meses[date.getMonth()]
    let ano = date.getFullYear()
    let diaSemana = diasSemana[date.getDay()]
    let hora = date.getHours()
    let minuto = date.getMinutes()
    let segundo = date.getSeconds()
    clicou.innerHTML = `<p>Dia:${dia}</p><p>Mês: ${mes}</p><p>Ano: ${ano}</p><p>Dia da semana: ${diaSemana}</p><p>Hora: ${hora}</p><p>Minutos: ${minuto}</p><p>Segundos: ${segundo}</p>`
}