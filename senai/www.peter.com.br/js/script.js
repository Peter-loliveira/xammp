// alert("ALERTA")
// console.log("LOG")
// console.warn("Warn")
// console.error("Erro")

// Area geral do site
var app = document.getElementById("APP")

var divLogin = document.createElement("div")
divLogin.setAttribute("id", "AreaLogin")
divLogin.setAttribute("class", "Areas")
app.appendChild(divLogin)


var lbTituloLogin = document.createElement("h2")
lbTituloLogin.innerHTML = "LOGIN"
divLogin.appendChild(lbTituloLogin)

//Label NOME
var lbNome = document.createElement("label")
lbNome.innerHTML = "Nome: "
divLogin.appendChild(lbNome)

//  INPUT Nome
var inputNome = document.createElement("input")
inputNome.setAttribute("type", "Text")
inputNome.setAttribute("placeholder", "Insira seu Nome")
inputNome.setAttribute("id", "usuario")
divLogin.appendChild(inputNome)

// Label SENHA
var lbSenha = document.createElement("label")
lbSenha.innerHTML = "Senha: "
divLogin.appendChild(lbSenha)

//INPUT Senha
var inputSenha = document.createElement("input")
inputSenha.setAttribute("type", "password")
inputSenha.setAttribute("placeholder", "Digite Sua Senha")
inputSenha.setAttribute("id", "senha")
divLogin.appendChild(inputSenha)

// Botaõ Logar
var btEnviar = document.createElement("Button")
btEnviar.innerHTML = "LOGAR"
btEnviar.setAttribute("onclick", "checaLogin()")
divLogin.appendChild(btEnviar)
//Fim da Area de Login

// DIV interna separando a área com a função de criar elementos de acordo com o valor digitado
var divRepete = document.createElement("div")
divRepete.setAttribute("id", "AreaRepeticao")
divRepete.setAttribute("class", "Areas")
app.appendChild(divRepete)

//Label Quantidade
var h2Titulo = document.createElement("h2")
h2Titulo.innerHTML = "Quantos conjuntos de componentes devem ser criados?"
divRepete.appendChild(h2Titulo)

// Input NUNBER para colocar o total de elementos a serem criados na página
var inputTotalComponentes = document.createElement("input")
inputTotalComponentes.setAttribute("type", "number")
inputTotalComponentes.setAttribute("id", "quantidade")
inputTotalComponentes.setAttribute("min", "10")
inputTotalComponentes.setAttribute("max", "100")

divRepete.appendChild(inputTotalComponentes)
divRepete.appendChild(document.createElement("br"))

// Botão para criar os componentes
var btCriarComponentes = document.createElement("button")
btCriarComponentes.setAttribute("onclick", "gerar()")
btCriarComponentes.innerHTML = "Gerar"
divRepete.appendChild(btCriarComponentes)

// Area em que os componentes criados aparecerão
var divComponentes = document.createElement("div")
divComponentes.setAttribute("id", "AreaComponentes")
divRepete.appendChild(divComponentes)

var divInputNumero = document.createElement("div")
divInputNumero.setAttribute("id", "AreaNumero")
divInputNumero.setAttribute("class", "Areas")
app.appendChild(divInputNumero)

var lbNumero = document.createElement("h2")
lbNumero.innerHTML = "Tamanho das Fonte"
lbNumero.setAttribute("id", "numeros")
divInputNumero.appendChild(lbNumero)

var inpRangeNumero = document.createElement("input")
inpRangeNumero.setAttribute("type", "range")
inpRangeNumero.setAttribute("id", "intervalo")
inpRangeNumero.setAttribute("value", "10")
inpRangeNumero.setAttribute("min", "10")
inpRangeNumero.setAttribute("max", "50")
divInputNumero.appendChild(inpRangeNumero)

var lbFonte = document.createElement("h2")
lbFonte.innerHTML = "Fonte tamanho: "
lbFonte.setAttribute("id", "tamanhoFonte")
lbFonte.setAttribute("font-size", "50")
divInputNumero.appendChild(lbFonte)

// INICIO DAS funções
var usuario = "Peter"
var senha = "123"

function checaLogin() {
    if ((usuario === inputNome.value) && (senha === inputSenha.value)) {
        alert("Login efetuado com sucesso")
    } else {
        alert("Bote os dados certos mané")
    }
}

function gerar() {
    let x = parseFloat(document.getElementById("quantidade").value)
    for (let i = 1; i <= x; i++) {
        var btGerado = document.createElement("button")
        btGerado.setAttribute("class", "botaoGerado")
        if (i < 10) {
            btGerado.innerHTML = "Botão 00" + i
        } else {
            if ((i >= 10) && (i < 100)) {
                btGerado.innerHTML = "Botão 0" + i
            } else {
                btGerado.innerHTML = "Botão " + i
            }
        }
        divComponentes.appendChild(btGerado)
    }
}

