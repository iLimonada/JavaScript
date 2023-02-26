function gerarTabuada() {
    let num = window.document.getElementById('txtn')
    let tab = window.document.getElementById('seltab')
    let n = Number(num.value)
    
    tab.innerHTML = ''
    for (let cont = 1; cont <= 10; cont++) {
        let item = window.document.createElement('option')
        item.text = `${n} x ${cont} = ${n * cont}`
        item.value = `tab${cont}`
        tab.appendChild(item)
    }
}