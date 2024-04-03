function contar(){
    var inicio = Number(document.querySelector('#txtinicio').value)
    var fim = Number(document.querySelector('#txtfim').value)
    var passos = Number(document.querySelector('#txtpassos').value)
    var result = document.querySelector('#txtresult')
    
    if (!inicio || !fim || !passos){
        window.alert('ERRO Falta dados!')
    }else{

    for(var contador = inicio; contador <= fim; contador += passos){
        result.innerHTML += `${contador}, `
    }
    }
}