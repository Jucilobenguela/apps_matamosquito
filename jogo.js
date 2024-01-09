var altura=0;
var largura=0;

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}
function posicaoRandomica(){
    var possicaox =Math.floor(Math.random()*largura)-90;
    var possicaoy = Math.floor(Math.random()*altura)-90;

    possicaox = possicaox < 0 ? 0 : possicaox;
    possicaoy = possicaoy < 0 ? 0 : possicaoy;

    console.log(possicaox, possicaoy);
    //criar elemento html
    var mosquito = document.createElement("img");
    mosquito.src = "imagens/mosquito.png";
    mosquito.className = tamanhoAleatorio() + " " + ladoALadoB();
    mosquito.style.left = possicaox + 'px';
    mosquito.style.top = possicaoy + 'px';
    mosquito.style.position = "absolute";
    document.body.appendChild(mosquito);
}
function tamanhoAleatorio(){
    var tamanho = Math.floor(Math.random()*3);
    switch(tamanho){
        case 0:
            return "mosquito1";
        case 1:
            return "mosquito2";
        case 2:
            return "mosquito3";
    }
}
function ladoALadoB(){
    var lado =  Math.floor(Math.random()*2);
    switch(lado){
        case 0:
            return "ladoA";
        case 1:
            return "ladoB";
    }
}




