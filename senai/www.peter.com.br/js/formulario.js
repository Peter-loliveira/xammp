var enviar = document.getElementById("enviar")
enviar.setAttribute("onclick","exibirDadosDigitados()")
// enviar.onclick(exibirDadosDigitados())

function exibirDadosDigitados(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var telefone = document.getElementById("telefone").value
    var mensagem = document.getElementById("mensagem").value
    
    alert(`
    -Nome: ${nome}
    -E-mail: ${email} 
    -Telefone: ${telefone}
    -Mensagem: ${mensagem}`
    )    
}
    