var lista = document.getElementById("lista")

var caixa = document.createElement("input")
caixa.setAttribute("type", "number")
lista.appendChild(caixa)

var botao = document.createElement("button")     
botao.innerHTML = "Adicionar"
botao.onclick = function () {
    criarLista()
}
lista.appendChild(botao)

var ul = document.createElement("ul")
lista.appendChild(ul)

function criarLista(itens) {
    let voltas = caixa.value
    for (i = 1; i <= voltas; i++) {
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.setAttribute("href", "http://www.google.com.br")
        a.setAttribute("target", "_blanck")
        a.innerHTML = `Elemnento ${i}`
        ul.appendChild(li)
        li.appendChild(a)
    }
}
