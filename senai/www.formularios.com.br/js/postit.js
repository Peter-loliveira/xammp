    var app = document.getElementById("Postit")
    app.style.textAlign = "center"
    app.style.width = "1000px"
    app.style.margin = "0 auto"
    app.style.marginTop = "20px"
    

    //Cria uma área só para os componentes que determinarão as caracteristicas e estilos dos postits
    var divComponentes = document.createElement("div")
    // divComponentes.setAttribute("id", "areaGeral")
    divComponentes.setAttribute("class", "areaComponentes")
    divComponentes.style.textAlign = "Center"
        
    app.appendChild(divComponentes)

    var imgPostit = document.createElement("img")
    imgPostit.setAttribute("src", "img/postit.png")
    imgPostit.style.width = "300px"
    
    // imgPostit.style.border = "1px solid black"
    // imgPostit.style.borderRadius = "10%"
    imgPostit.style.opacity = "70%"

    divComponentes.appendChild(imgPostit)

    //Cria uma área DENTRO DA divComponentes só para os componentes irão determinar o texto INTERNO dos Postits
    var divTextoPostit = document.createElement("div")
    divTextoPostit.setAttribute("class", "divs-atributos")
    divTextoPostit.style.alignItems = "center"

    var texto = document.createElement("label")
    texto.innerHTML = "Texto interno do Postit: "
    texto.style.fontWeight = "bold"

    var inpTexto = document.createElement("input")
    inpTexto.placeholder = "Texto do Postit"
    inpTexto.style.textAlign = "center"
    inpTexto.style.borderRadius = "5px"

    divComponentes.appendChild(divTextoPostit)

    //Cria uma área DENTRO DA divComponentes só para os componentes irão determinar a OPACIDADE dos Postits
    var divOpacidadePostit = document.createElement("div")
    divOpacidadePostit.setAttribute("class", "divs-atributos")
    divOpacidadePostit.style.alignItems = "center"
    //Label
    var lbOpacidade = document.createElement("label")
    lbOpacidade.innerHTML = "Opacidade(max 70%): "
    lbOpacidade.style.fontWeight = "bold"
    //Input tipo range
    var inpOpacidade = document.createElement("input")
    inpOpacidade.setAttribute("type", "range")
    inpOpacidade.setAttribute("min", 0)
    inpOpacidade.setAttribute("max", 70)
    inpOpacidade.style.marginRight = "20px"
    inpOpacidade.value = "0"//Deixa a barra de RANGE selecionada no inicio

    //Evento disparado quando mudamos o valor da opacidade POR MOUSE
    inpOpacidade.onclick = function () {
        opacidade()
    }
    //Evento disparado quando mudamos o valor da opacidade POR MOVIMENTO DO MOUSE
    inpOpacidade.onmousemove = function () {
        opacidade()
    }
    //Evento disparado quando mudamos o valor da opacidade POR TECLADO
    inpOpacidade.onkeydown = function () {
        opacidade()
    }
    var totalOpacidade = inpOpacidade.value//Guarda o valor da opacidade

    //label mostrando em quantos % de opacidade o postit deverá aparecer
    var lbOpacidadeEscolhida = document.createElement("label")
    lbOpacidadeEscolhida.innerHTML = "0%"
    lbOpacidadeEscolhida.style.fontWeight = "bold"

    //insere a div de opacidade e totos os seus componentes na div de componentes
    divComponentes.appendChild(divOpacidadePostit)

    //Cria uma área só para os componentes que farão com que a div dos postits apareca ou suma
    var divVisibilidadePostits = document.createElement("div")
    divVisibilidadePostits.setAttribute("class", "areaComponentes")
    divVisibilidadePostits.style.alignItems = "center"
    divComponentes.appendChild(divVisibilidadePostits)

    // Inserie dois elemntos (label + checkbox) para fazer com que os postits aparecam ou desapareçam
    var lbVisualizarPostits = document.createElement("label")
    lbVisualizarPostits.innerHTML = "Ver Postits"
    lbVisualizarPostits.style.fontWeight = "bold"

    var cbVisualizarPostits = document.createElement("input")
    cbVisualizarPostits.setAttribute("type", "checkbox")
    cbVisualizarPostits.checked = true
    cbVisualizarPostits.onclick = function () {
        morreDiabo()
    }
    lbVisualizarPostits.appendChild(cbVisualizarPostits)

    var btAddPostit = document.createElement("button")
    btAddPostit.innerHTML = "Adicione Postit"
    btAddPostit.style.fontWeight = "bold"
    btAddPostit.style.marginTop = "5px"
    btAddPostit.onclick = function () {
        inserirPostit()//Chama a função de inserir postits
    }

    //adiciona os componentes dessa área
    divTextoPostit.appendChild(texto)
    divTextoPostit.appendChild(inpTexto)
    divComponentes.appendChild(document.createElement("br"))

    divOpacidadePostit.appendChild(lbOpacidade)
    divOpacidadePostit.appendChild(inpOpacidade)
    divOpacidadePostit.appendChild(lbOpacidadeEscolhida)
    divComponentes.appendChild(document.createElement("br"))

    divComponentes.appendChild(btAddPostit)
    divComponentes.appendChild(btAddPostit)
    divComponentes.appendChild(document.createElement("br"))
    divComponentes.appendChild(document.createElement("br"))

    divComponentes.appendChild(divVisibilidadePostits)
    // divVisibilidadePostits.appendChild(cbVisualizarPostits)
    divVisibilidadePostits.appendChild(lbVisualizarPostits)

    var areaPostits = document.createElement("div")
    areaPostits.setAttribute("class", "areaComponentes")

    var textoAreaPostis = document.createElement("h1")
    textoAreaPostis.innerHTML = "Postits Criados"
    areaPostits.appendChild(textoAreaPostis)

    app.appendChild(areaPostits)

    function inserirPostit() {
        let postit = document.createElement("button")
        postit.innerHTML = inpTexto.value
        postit.setAttribute("class", "postit")
        postit.style.width = "200px"
        postit.style.height = "200px"
        postit.style.borderRadius = "5px"
        postit.style.border = "1px solid black"
        postit.style.textAlign = "center"
        postit.style.marginBottom = "5px"
        postit.style.marginTop = "5px"
        postit.style.marginLeft = "5px"
        postit.style.fontSize = "15px"
        postit.style.fontWeight = "bold"
        postit.style.overflow = "auto" //Faz com que, SE o texto interno do Postit for maior que ele, apareçam barras de rolagem internas
        postit.style.opacity = `${100 - totalOpacidade}%`
        postit.ondblclick = function () {
            postit.style.display = "none"
        }
        postit.style.backgroundColor = gera_cor()
        postit.onclick = function () {
            postit.style.backgroundColor = gera_cor()
        }
        let textOpacidade = document.createElement("p")
        textOpacidade.innerHTML = `Opacidade de ${totalOpacidade}%`
        textOpacidade.style.fontWeight = "bold"
        postit.appendChild(textOpacidade)
        areaPostits.appendChild(postit)
    }

    function gera_cor() {
        var hexadecimais = '0123456789ABCDEF';
        var cor = '#';
        // Pega um número aleatório no array acima
        for (var i = 0; i < 6; i++) {
            //E concatena à variável cor
            cor += hexadecimais[Math.floor(Math.random() * 16)];
        }
        return cor;
    }

    function opacidade() {
        totalOpacidade = inpOpacidade.value
        lbOpacidadeEscolhida.innerHTML = `${totalOpacidade}%`
    }

    function morreDiabo() {
        var x = document.getElementsByClassName("postit")
        for (i = 0; i < x.length; i++) {
            if (cbVisualizarPostits.checked) {
                x[i].style.display = "inline-flex"
            } else {
                x[i].style.display = "none"
            }
        }
    }