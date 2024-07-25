var setaDireita= window.document.getElementById("seta-direita")
var bruna= window.document.getElementById("bruna")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var setaEsquerda= window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    bruna.style="display:none"
    samantha.style="display:flex"
    setaEsquerda.style="display:flex; margin-top: 55px"
    setaDireita.style="display:none"

}

function RolarParaEsquerda(){
    bruna.style="display:flex"
    samantha.style="display:none"
    setaEsquerda.style="display:none"
    setaDireita.style="display:flex; margin-top: 55px"

}



