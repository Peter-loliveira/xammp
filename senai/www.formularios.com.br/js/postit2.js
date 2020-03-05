var teste = document.getElementById("app")
var texto = document.createElement("h2")
texto.innerHTML = "teste de postit"
teste.appendChild(texto)

var caixaTexto1 = document.createElement("input")
caixaTexto1.setAttribute("type", "range")
caixaTexto1.setAttribute("min", "2")
caixaTexto1.setAttribute("max", "300")
var caixaTexto2 = document.createElement("input")


caixaTexto1.style.width = "120px"
caixaTexto2.setAttribute("width", "120px")

// caixaTexto.style.borderRadius = "5px"
// caixaTexto.setAttribute("placeholder", "TESTE")
teste.appendChild(caixaTexto1)
teste.appendChild(caixaTexto2)
