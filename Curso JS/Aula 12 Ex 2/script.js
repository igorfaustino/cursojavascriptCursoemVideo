function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
        res.innerHTML = 'Não calculado'
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade} anos`
        if (fsex[0].checked){
            genero = 'homem'
        }else if(fsex[1].checked){
            genero = 'mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}