var botaoCriarCliente = document.getElementById("salvar")
// botaoCriarCliente.onclick = function(){
   
// }

var mudaCorLinhas = true

function criarCleinte(){
    let tabela = document.getElementById("tablela")
    let linha = document.createElement("tr")
    if (mudaCorLinhas) {
        linha.style.backgroundColor = "#686868";

        mudaCorLinhas = false
    }else {
        mudaCorLinhas = true
    }
    tabela.appendChild(linha)

    let colNome = document.createElement("td")
    let nome = document.getElementById("nome").value
    colNome.innerHTML = nome
    linha.appendChild(colNome)

    let colEmail = document.createElement("td")
    let email = document.getElementById("email").value
    colEmail.innerHTML = email
    linha.appendChild(colEmail)

    let colIDade = document.createElement("td")
    let idade = document.getElementById("idade").value
    colIDade.innerHTML = idade
    linha.appendChild(colIDade)

    let colPais = document.createElement("td")
    let pais = document.getElementById("pais").value 
    colPais.innerHTML = pais
    linha.appendChild(colPais)    

    let colAcoes = document.createElement("td")    
    
    let buttonDetalhes = document.createElement("button")
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

}


{/* <button class="btn btn-success btn-peter">Editar<i class="fa fa-pencil-square" aria-hidden="true"></i></button>
<button class="btn btn-danger btn-peter">Deletar<i class="fa fa-trash-o" aria-hidden="true"></i></button> */}