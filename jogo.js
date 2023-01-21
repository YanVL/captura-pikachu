var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaPikachuTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    criaPikachuTempo = 1500
} else if (nivel === 'dificil') {
    criaPikachuTempo = 1000
} else if (nivel === 'arceus') {
    criaPikachuTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth
    altura = window.innerHeight

    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaPokemon)
        window.location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000);

function posicaoRandomica() {

    if (document.getElementById('pikachu')) {
        document.getElementById('pikachu').remove()

        if (vidas > 3) {
            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/pokebola_fechada.png"
            vidas++
        }
    }

    var posicaoX = Math.floor((Math.random() * largura)) - 250
    var posicaoY = Math.floor((Math.random() * altura)) - 300

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //criar o elemento html via código 
    var poke = document.createElement('img')
    poke.src = 'imagens/pikachu.png'
    poke.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    poke.style.left = posicaoX + 'px'
    poke.style.top = posicaoY + 'px'
    poke.style.position = 'absolute'
    poke.id = 'poke'
    poke.onclick = function () {
        this.remove()
    }

    document.body.appendChild(poke)
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'poke1'
        case 1:
            return 'poke2'
        case 2:
            return 'poke3 '
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}