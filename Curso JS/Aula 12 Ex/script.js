function carregar(){
    var msg = document.querySelector('#msg')
    var msg2 = document.querySelector('#msg2')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'images/dia.png'
        document.body.style.background = '#46c0b8'
        msg2.innerHTML = 'Bom Dia'

    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'images/tarde.png'
        document.body.style.background = '#dc5302'
        msg2.innerHTML = 'Boa Tarde'
    }else{
        //BOA NOITE
        img.src = 'images/noite.png'
        document.body.style.background = '#1d3863'
        msg2.innerHTML = 'Boa Noite'
    }
}