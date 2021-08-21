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
        tipoVencedorText.innerHTML="Vencedor\n"+round+"ºRound"
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
        roundAtual.innerHTML=round+"ºRound"        
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


    player1Video = new Twitch.Embed("twitch1", {
        width: 1920,
        height: 1080,
        channel: link1,
        layout: "video",
        autoplay: true,
        muted:false
      });
    player2Video = new Twitch.Embed("twitch2", {
        width: 1920,
        height: 1080,
        channel: link2,
        layout: "video",
        autoplay: true,
        muted:true
    });


}

function sleepTime(timeS) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, timeS)
    })
}

async function runL(){
    while(true){
        c=document.querySelectorAll('[data-a-target="player-overlay-mature-accept"]')[0]
        if(c!=undefined){
            c.click()
        }
        await sleepTime(500);
    }
}

runL()


//ºRound
