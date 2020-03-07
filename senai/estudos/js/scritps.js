/*
Queremos fazer com que ao usuário clicar em um botão, ele crie uma serie de Post Its que tenham em seu interior o Nome qualquer seguida do número do Post Its e uma cor que será selecionada em um input tipo color e jogue essa cor nos Post Its criados.
Vamos fazer esses passos, UM a UM:

/* MÃO À OBRA */

// 1.	Criar uma variável areaTotal e associar ela à div areaSite do HTML
// 2.	Criar uma segunda div, que ficará no topo de seu site.(var "areaConfiguracoes")
// 3.	Definir que essa div terá uma classe “campos” .
// 4.	Essa div terá uma largura de 1400px. Obs. Não terá altura definida pois vai se adaptando à quantidade de elementos que inserirmos.
// 5.	Criar um Label com o innerHTML "Nome:"(var labelNome)
// 6.	Criar nela um input, do tipo “texto”, que terá um valor "nome" e uma largura de 300px. (var inputNome)
// 7.	Criar um Label com o innerHTML “Quantidade:” (var labelQuantidade)
// 8.	Criar um input, do tipo “number”, que terá 70px de largura, um valor mínimo de 1 e um valor máximo de 50. (var inputQuantidade)
// 9.	Criar um Label com o innerHTML “Cor:”. (var labelCor)
// 10.	Criar um input, do tipo “color” com um valor padrão de "#ff3355". (var inputCor)
// 11.	Inserir na div “areaConfiguracoes” os elementos criados acima na seguinte ordem:
//labelNome, inputNome, labelQuantidade, inputQuantidade, labelCor, inputCor
// 12.  Criar uma div
// 13.	Inserir essa div na div areaConfiguracoes.
// 14.	Criar um botão com innerHTML “Gerar” e com as classe Bootstrap "btn" e "btn-success"(var buttonGerarPostit)
// 15.	Inserir esse botão na div areaConfirmar
// 16.	Criar OUTRA div com uma classe “campos”.(var “areaPostIts”)
// 17.	Criar e inserir um elemento h1 (var h1AreaPostits) na div areaPostIts. 
// 18.	Inserir essa div na div “areaTotal”. Obs Ambas as divs “areaConfiguracoes” e “areaPostIts” ficarão uma após a outra. 

/*1º*/
var areaTotal = document.getElementById("areaSite")
areaTotal.setAttribute("id", "areaCompleta")

/*2º*/
var areaConfiguracoes = document.createElement("div")

/*3º*/
areaConfiguracoes.setAttribute("class", "campos")
areaConfiguracoes.setAttribute("id", "campoConfiguracoes")

/*4º*/
areaConfiguracoes.style.width = "1000px"
areaTotal.appendChild(areaConfiguracoes)

/*5º*/
var labelNome = document.createElement("label")
labelNome.innerHTML = "Nome:"

/*6º*/
var inputNome = document.createElement("input")
inputNome.value = "Nome"
inputNome.style.width = "300px"

/*7º*/
var labelQuantidade = document.createElement("label")
labelQuantidade.innerHTML = "Quantidade:"

/*8º*/
var inputQuantidade = document.createElement("input")
inputQuantidade.setAttribute("type", "number")
inputQuantidade.value = 1
inputQuantidade.setAttribute("min", "1")
inputQuantidade.setAttribute("max", "50")

/*9º*/
var labelCor = document.createElement("label")
labelCor.innerHTML = "Cor:"

/*10º*/
var inputCor = document.createElement("input")
inputCor.setAttribute("type", "color")
inputCor.value = "#ff3355"

/*11º*/
areaConfiguracoes.appendChild(labelNome)
areaConfiguracoes.appendChild(inputNome)
areaConfiguracoes.appendChild(labelQuantidade)
areaConfiguracoes.appendChild(inputQuantidade)
areaConfiguracoes.appendChild(labelCor)
areaConfiguracoes.appendChild(inputCor)

//12
var areaConfirma = document.createElement("div")

// 13º
areaConfiguracoes.appendChild(areaConfirma)

// 14º
var buttonGerarPostit = document.createElement("button")
buttonGerarPostit.innerHTML = "Gerar Post Its"
buttonGerarPostit.setAttribute("class", "btn btn-success")
buttonGerarPostit.style.margin = "10px 0px"

// 15º
areaConfirma.appendChild(buttonGerarPostit)

// 16º
var areaPostIts = document.createElement("div")
areaPostIts.setAttribute("class", "campos")

// 17º
var h1AreaPostits = document.createElement("h1")
h1AreaPostits.innerHTML = "Área dos Postits"
areaPostIts.appendChild(h1AreaPostits)

// 18º
areaTotal.appendChild(areaPostIts)


/*
Agora iremos criar a função necessária para os postits aparecerem corretamente.

A função vai se chamar "gerarPostits" e deverá:

01 - Ter um laço de repetição FOR que irá contar de 1 até o total que foi digitado no campo Quantidade
Para cada vez que o laço se repetir ele ira:
02 - Criar um elemento "button"  - ele será o postit em si
03 - Configurar seu InnerHTML com o que esta digitado no inputNome
04 - Configurar seu ESTILO(style) de fonte para negrito
05 - Configurar seu ESTILO de arredondamento de borda para 5px
06 - Configurar seu ESTILO de borda para 1px solido preto
07 - Configurar seus ESTILOS tamanho e altura para 150px - isso deixa ele quadrado
08 - Configurar seu ESTILO de cor de fondo para a cor que o inputCor está configurado
09 - Configurar seu ESTILO margens (todas) para 1px - Isso dá a ele uma mergenzinha em todas as direções
10 - Inserir o Postits na div "areaPostIts"
Isso se repetira um total de vezes que foi configurado no "inputQuantidade"

*/

function gerarPostits(quantidadeDePostits) {
    for (let i = 0; i < inputQuantidade.value; i++) {        //01
        var buttonPostits = document.createElement("button") //02
        buttonPostits.innerHTML = inputNome.value            //03
        buttonPostits.style.fontWeight = "bold"              //04
        buttonPostits.style.borderRadius = "5px"             //05
        buttonPostits.style.border = "1px solid black"       //06
        buttonPostits.style.width = "150px"                  //07
        buttonPostits.style.height = "150px"                 //07
        buttonPostits.style.backgroundColor = inputCor.value //08
        buttonPostits.style.margin = "1px"                   //09
        areaPostIts.appendChild(buttonPostits)               //10
    }
}

//Inserir a função gerarPostits no evento onclick do botão buttonGerarPostit
buttonGerarPostit.onclick = function () {
    gerarPostits()
}