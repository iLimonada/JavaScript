function contar() {
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados')
    }
    else {
        res.innerHTML = 'Contando: '
        //Conversão de valores de string para number
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo Invalido! Será usado Passo com valor 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
        else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }
}