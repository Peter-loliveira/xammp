//crio o evento onclick no botão e atribuo a ele a função calcula
document.getElementById("botao").setAttribute("onclick", "calcula()")

function calcula() {    
        nota1 = parseInt(document.getElementById("nota1").value)
        nota2 = parseInt(document.getElementById("nota2").value)
        nota3 = parseInt(document.getElementById("nota3").value)
        nota4 = parseInt(document.getElementById("nota4").value)
        var media = (nota1 + nota2 + nota3 + nota4) / 4
        document.getElementById("resultado").value = media
}


function name(params) {
        
}

