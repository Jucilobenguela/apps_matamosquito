
var altura=0;
var largura=0;
var vida=1;
var tempo = 10;
var criarMosquitoTempo = 1500;

var nivel = window.location.search.replace("?", "");
if(nivel === "normal"){
    criarMosquitoTempo = 1500;

}else if(nivel==="dificil"){
    criarMosquitoTempo = 1000;

}else if (nivel === "muitoDificil") {
    criarMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(altura, largura);
}

var cronometro =setInterval(function(){
    tempo--;
    if(tempo<0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        document.location.href = "vitoria.html";
    }else{
        document.getElementById("cronometro").innerHTML=tempo;
    }
}, 1000);

function posicaoRandomica(){
    if(document.getElementById("mosquito")){
        document.getElementById("mosquito").remove();
        if(vida>3){
            document.location.href = "fim_do_jogo.html"
        }else{
            document.getElementById("v"+vida).src="imagens/coracao_vazio.png";
             vida++;
        }
    }
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
    mosquito.id = "mosquito";
    mosquito.onclick=function(){this.remove()}
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




