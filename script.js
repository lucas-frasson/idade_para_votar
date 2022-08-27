function verificar() {
    var idade = window.document.querySelector('input#txtnota')
    var res = window.document.querySelector('div#resposta')
    var idade = Number.parseInt(txtidade.value)
    res.innerHTML = `<p> Com <strong>${idade}</strong> anos de idade</p>`
    if (idade >= 16 && idade < 18 || idade >= 70) 
    {
        resposta.innerHTML += `<p> Você pode votar! (Voto opcional)</p>`
    }
    else if (idade >= 18) 
    {
        resposta.innerHTML += `<p> Você pode votar! (Voto obrigatório)</p>`
    }
    else
    {
        resposta.innerHTML += `<p> Você não pode votar! </p>`
    }
}