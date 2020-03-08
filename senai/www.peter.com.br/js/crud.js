// var inputNome = document.getElementById("nome")
// var inputEmail = document.getElementById("email")
// var inputIdade = document.getElementById("idade")
// var inputPais = document.getElementById("pais")
// var buttonSalvar = document.getElementById("salvar")

// inputNome.onkeypress = function () {
//     document.addEventListener('keydown', function (event) {
//         if (event.keyCode !== 13) return
//         inputEmail.focus()

//     })
// }

// inputEmail.onkeypress = function () {
//     document.addEventListener('keydown', function (event) {
//         if (event.keyCode !== 13) return
//         inputIdade.focus()
//     })
// }

// inputIdade.onkeypress = function () {
//     document.addEventListener('keydown', function (event) {
//         if (event.keyCode !== 13) return
//         inputPais.focus()
//     })
// }

// inputPais.onkeypress = function () {
//     document.addEventListener('keydown', function (event) {
//         if (event.keyCode !== 13) return
//         buttonSalvar.focus()
//     })
// }

var mudaCorLinhas = true

function criarCleinte() {
    let tabela = document.getElementById("tablela")
    let linha = document.createElement("tr")
    if (!mudaCorLinhas) {
        linha.style.backgroundColor = "#f2f2f2";
        mudaCorLinhas = true
    } else {
        mudaCorLinhas = false
    }
    tabela.appendChild(linha)

    let colNome = document.createElement("td")
    colNome.setAttribute("class", "colunaNome")
    colNome.innerHTML = document.getElementById("nome").value
    linha.appendChild(colNome)

    let colEmail = document.createElement("td")
    colEmail.setAttribute("class", "colunaEmail")
    colEmail.innerHTML = document.getElementById("email").value
    linha.appendChild(colEmail)

    let colIDade = document.createElement("td")
    colIDade.setAttribute("class", "colunaIdade")
    colIDade.innerHTML = document.getElementById("idade").value
    linha.appendChild(colIDade)

    let colPais = document.createElement("td")
    colPais.setAttribute("class", "colunaPais")
    colPais.innerHTML = document.getElementById("pais").value
    linha.appendChild(colPais)

    let colAcoes = document.createElement("td")
    colAcoes.setAttribute("class", "colunaAcoes")

    var buttonDetalhes = document.createElement("button")
    buttonDetalhes.innerHTML = "Detalhes"
    buttonDetalhes.setAttribute("class", "btn btn-primary btn-peter")
    let i_Detalhes = document.createElement("i")
    i_Detalhes.setAttribute("class", "fa fa-info-circle")
    i_Detalhes.setAttribute("aria-hidden", "true")
    buttonDetalhes.appendChild(i_Detalhes)
    colAcoes.appendChild(buttonDetalhes)

    let buttonEditar = document.createElement("button")
    buttonEditar.innerHTML = "Editar"
    buttonEditar.setAttribute("class", "btn btn-success btn-peter")
    let i_Editar = document.createElement("i")
    i_Editar.setAttribute("class", "fa fa-pencil-square")
    i_Editar.setAttribute("aria-hidden", "true")
    buttonEditar.appendChild(i_Editar)
    colAcoes.appendChild(buttonEditar)

    let buttonApagar = document.createElement("button")
    buttonApagar.innerHTML = "Apagar"
    buttonApagar.setAttribute("class", "btn btn-danger btn-peter")
    let i_Apagar = document.createElement("i")
    i_Apagar.setAttribute("class", "fa fa-trash-o")
    i_Apagar.setAttribute("aria-hidden", "true")
    buttonApagar.appendChild(i_Apagar)
    colAcoes.appendChild(buttonApagar)

    linha.appendChild(colAcoes)
    // inputNome.value = ""    
    // inputEmail.value = ""
    // inputIdade.value = ""
    // inputPais.value = ""
    // inputNome.focus()    
}