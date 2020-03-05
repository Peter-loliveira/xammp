var nome = document.getElementById("nome")
var email = document.getElementById("email")
var telefone = document.getElementById("telefone")
var texto = document.getElementById("texto")
var botao = document.getElementById("enviar")
botao.setAttribute("onclick", "fnEnviar()")


function fnEnviar() {
    alert(
        `
        - Nome: ${nome.value}
        - Email: ${email.value}
        - Telefone: ${telefone.value}
        - Texto: ${texto.value}
        `
    )
}

