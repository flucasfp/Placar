nome1Atual = document.getElementById("nome1Atual")
nome2Atual = document.getElementById("nome2Atual")

nome1Futuro = document.getElementById("nome1Futuro")
nome2Futuro = document.getElementById("nome2Futuro")


placarAtual1 = document.getElementById("placarAtual1")
placarAtual2 = document.getElementById("placarAtual2")

placarFuturo1 = document.getElementById("placarFuturo1")
placarFuturo2 = document.getElementById("placarFuturo2")


faseAtual = document.getElementById("faseAtual")
faseFuturo = document.getElementById("faseFuturo")

roundAtual = document.getElementById("roundAtual")
roundFuturo = document.getElementById("roundFuturo")


vencedor=document.getElementById("vencedor")
tipoVencedor=document.getElementById("tipoVencedor")
nomeVencedor=document.getElementById("nomeVencedor")

tipoVencedorText=document.getElementById("tipoVencedorText")
nomeVencedorText=document.getElementById("nomeVencedorText")


inpNomePlayer1=document.getElementById("inpNomePlayer1")
inpNomePlayer2=document.getElementById("inpNomePlayer2")

inpTwitchPlayer1=document.getElementById("inpTwitchPlayer1")
inpTwitchPlayer2=document.getElementById("inpTwitchPlayer2")

inpFaseAtual=document.getElementById("inpFaseAtual")

playerTwitch1=document.getElementById("twitch1")
playerTwitch2=document.getElementById("twitch2")



document.getElementById("audioPlayer1").addEventListener('click', ()=>{setAudio(1)} ,false);
document.getElementById("audioPlayer2").addEventListener('click', ()=>{setAudio(2)} ,false);

document.getElementById("rematch").addEventListener('click', ()=>{setVitoria(0)} ,false);
document.getElementById("vitoriaPlayer1").addEventListener('click', ()=>{setVitoria(1)} ,false);
document.getElementById("vitoriaPlayer2").addEventListener('click', ()=>{setVitoria(2)} ,false);

document.getElementById("aplicar").addEventListener('click',aplicar,false);


player1Nome="Player 1"
player2Nome="Player 2"

player1Pontos=0
player2Pontos=0
ultimoPonto=0

round=1
  
player1Video=undefined
player2Video=undefined


function setAudio(player){
    if(player1Video!=undefined && player2Video != undefined){
        if(player==1){
            player1Video.getPlayer().setMuted(false);
            player2Video.getPlayer().setMuted(true);
        }else{
            player1Video.getPlayer().setMuted(true);
            player2Video.getPlayer().setMuted(false);
        }
    }
}

function setVitoria(player){
    if(player==0){
        tipoVencedorText.innerHTML=""
        nomeVencedorText.innerHTML="Rematch"
        if(ultimoPonto==1){
            player1Pontos--;
            changePoint(1)
        }else if(ultimoPonto==2){
            player2Pontos--;
            changePoint(2)
        }
        ultimoPonto=0
        changeRound(false)
    }else{
        tipoVencedorText.innerHTML="Vencedor\n"+round+"º Round"
        if(player==1){
            nomeVencedorText.innerHTML=player1Nome
            player1Pontos++
            ultimoPonto=1
            changePoint(1)
        }else{
            nomeVencedorText.innerHTML=player2Nome
            player2Pontos++
            ultimoPonto=2
            changePoint(2)
        }
        tipoVencedor.classList.remove("aniTipo")
        tipoVencedor.offsetWidth
        tipoVencedor.classList.add("aniTipo")
        changeRound(true)
    }
    nomeVencedor.classList.remove("aniNome")
    vencedor.classList.remove("aniVencedor")
    tipoVencedor.offsetWidth
    nomeVencedor.classList.add("aniNome")
    vencedor.classList.add("aniVencedor")
}

function changePoint(player){

    if(player==1){
        placarFuturo1.innerHTML=placarAtual1.innerHTML
        placarAtual1.innerHTML=player1Pontos

        placarAtual1.classList.remove("aniIn")
        placarFuturo1.classList.remove("aniOut")
        placarFuturo2.offsetWidth
        placarAtual1.classList.add("aniIn")
        placarFuturo1.classList.add("aniOut")
    }else{
        placarFuturo2.innerHTML=placarAtual2.innerHTML
        placarAtual2.innerHTML=player2Pontos

        placarAtual2.classList.remove("aniIn")
        placarFuturo2.classList.remove("aniOut")
        placarFuturo2.offsetWidth
        placarAtual2.classList.add("aniIn")
        placarFuturo2.classList.add("aniOut")
    }

}

function changeRound(change){


    roundFuturo.innerHTML=roundAtual.innerHTML
    if(change){
        round++
        roundAtual.innerHTML=round+"º Round"        
    }else{
        round--
        roundAtual.innerHTML="Rematch"
    }
    roundAtual.classList.remove("aniIn")
    roundFuturo.classList.remove("aniOut")
    tipoVencedor.offsetWidth
    roundAtual.classList.add("aniIn")
    roundFuturo.classList.add("aniOut")

}

function aplicar(){

    

    player1Nome=inpNomePlayer1.value
    player2Nome=inpNomePlayer2.value

    
    nome1Futuro.innerHTML=nome1Atual.innerHTML
    nome2Futuro.innerHTML=nome2Atual.innerHTML

    nome1Atual.innerHTML=player1Nome
    nome2Atual.innerHTML=player2Nome

    faseFuturo.innerHTML=faseAtual.innerHTML

    faseAtual.innerHTML=inpFaseAtual.value

    nome1Atual.classList.remove("aniIn")
    nome2Atual.classList.remove("aniIn")
    nome1Futuro.classList.remove("aniOut")
    nome2Futuro.classList.remove("aniOut")

    faseAtual.classList.remove("aniIn")
    faseFuturo.classList.remove("aniIn")

    faseFuturo.offsetWidth

    nome1Atual.classList.add("aniIn")
    nome2Atual.classList.add("aniIn")
    nome1Futuro.classList.add("aniOut")
    nome2Futuro.classList.add("aniOut")

    faseAtual.classList.add("aniIn")
    faseFuturo.classList.add("aniIn")    


    player1Pontos=0
    player2Pontos=0
    ultimoPonto=0

    round=0

    changePoint(1)
    changePoint(2)
    changeRound(true)

    l1t=inpTwitchPlayer1.value
    l2t=inpTwitchPlayer2.value

    link1Index=l1t.lastIndexOf("/")+1
    link2Index=l2t.lastIndexOf("/")+1

    link1=l1t.substring(link1Index,l1t.length)
    link2=l2t.substring(link2Index,l2t.length)

    console.log(link1)
        
    playerTwitch1.innerHTML=""
    playerTwitch2.innerHTML=""

    if(link1!=""){
        player1Video = new Twitch.Embed("twitch1", {
            width: 1708,
            height: 962,
            channel: link1,
            layout: "video",
            autoplay: true,
            muted:false
        });  
    }
    
    if(link2!=""){
        player2Video = new Twitch.Embed("twitch2", {
            width: 1708,
            height: 962,
            channel: link2,
            layout: "video",
            autoplay: true,
            muted:true
        });
    }


}

function sleepTime(timeS) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeS)
    })
}

async function runL(){
    console.log("entrou")
    while(true){
        iff=document.getElementsByTagName("iframe")
        if(iff[0]!=undefined){
            // console.log(iff)
            c=iff[0].querySelectorAll('[data-a-target="player-overlay-mature-accept"]')[0]
            if(c!=undefined){
                console.log("clicou")
                c.click()
            }
    
        }
        if(iff[1]!=undefined){
            // console.log(iff)
            c=iff[1].querySelectorAll('[data-a-target="player-overlay-mature-accept"]')[0]
            if(c!=undefined){
                console.log("clicou")
                c.click()
            }    
        }
        await sleepTime(500);
    }
}

var PLAYER_LIST = [];
var FASE_LIST = [];

function selectPlayer(value, playerPosition) {  // trigger to dropdown selection
    // playerPosition means if it is player 1 or player 2, value is the player Index
    if(value >= 0 && value < PLAYER_LIST.length) {
        player = PLAYER_LIST[value];
        if (playerPosition == 1) {
            $("#inpNomePlayer1").val(player.playerName);
            $("#inpTwitchPlayer1").val(player.playerTwitch);            
            // do more
        } else {
            $("#inpNomePlayer2").val(player.playerName);
            $("#inpTwitchPlayer2").val(player.playerTwitch);
            // do more
        }        
    } else {
        $("#inpNomePlayer1").val("");
        $("#inpTwitchPlayer1").val("");
    }
}

function selectMap(map) {
    console.log("Selected", map);
}
function setMapas(maps) {
    $("#select-mapa option").each(function() {
        $(this).remove();
    })
    $("#select-mapa").append(new Option("[Nenhum]", -1));
    for(let i=0; i<maps.length; i++) {
        let map = maps[i];
        $("#select-mapa").append(new Option(map.songName.substring(0, 20)+" - "+map.levelAuthorName.substring(0,14), i));
    }
    $("#select-mapa").selectpicker("refresh");
    $("#select-mapa").change(() => selectMap(maps[$("#select-mapa").val()]));
}

function selectFase(faseObjId) {  // trigger to dropdown selection fase
    let fase = FASE_LIST[faseObjId];
    if (!fase) {
        $("#inpFaseAtual").val("");    
        return;
    }

    $("#inpFaseAtual").val(fase.nome);
    setMapas(fase.mapas);
}

function init() {
    $.getJSON("players.json", function(playerList) {
        PLAYER_LIST = playerList
        for (let i=0; i<playerList.length; i++) { 
            player = playerList[i];
            $("#select-player1").append(new Option(player.playerName, i));
            $("#select-player2").append(new Option(player.playerName, i));
        }
        $("#select-player1").change((a) => selectPlayer(playerPosition=$("#select-player1").val(), 1));
        $("#select-player2").change((a) => selectPlayer(playerPosition=$("#select-player2").val(), 2));
    });
    $.getJSON("fases.json", function(fasesList) {
        FASE_LIST = fasesList;
        for (let faseObjId in fasesList) {
            $("#select-fase").append(new Option(fasesList[faseObjId].nome, faseObjId))
        }
        $("#select-fase").change(() => selectFase($("#select-fase").val()))
    })
}

console.log("Starting...")
init();

runL();


//ºRound
