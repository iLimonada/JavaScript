function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'img/fotoManha.png'
        document.body.style.background = '#73E0E8'
    }
    else if (hora >= 12 && hora < 18) {
        // BOM TARDE!
        img.src = 'img/fotoTarde.png'
        document.body.style.background = '#DF9C29'
    }
    else {
        // BOA NOITE!
        img.src = 'img/fotoNoite.png'
        window.document.body.style.background = '#120443'
    }
}