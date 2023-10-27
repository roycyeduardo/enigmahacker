const hackers = document.getElementById('hackers');
const pontuacao = document.getElementById('pontuacao');
const tempoRestante = document.getElementById('tempoRestante');

let pontos = 0;
let tempo = 20;
let hackersClicados = 0;

function atualizarPontuacao() {
    pontuacao.textContent = `Pontuação: ${pontos}`;
}

function atualizarTempo() {
    tempoRestante.textContent = `Tempo Restante: ${tempo}s`;
}

function gerarPosicaoAleatoria() {
    const jogoHacker = document.getElementById('jogoHacker');
    const hacker = document.getElementById('hackers');
    
    const maxWidth = jogoHacker.clientWidth - hacker.clientWidth;
    const maxHeight = jogoHacker.clientHeight - hacker.clientHeight;

    const novoX = Math.random() * maxWidth;
    const novoY = Math.random() * maxHeight;

    // Use transform para animar o movimento suave do hacker
    hacker.style.transform = `translate(${novoX}px, ${novoY}px)`;
}


function clicarNohackers() {
    pontos++;
    atualizarPontuacao();
    hackersClicados++;

    if (hackersClicados > 15) {
        alert('Você avançou para a próxima fase!');
        hackersClicados = 0;
    }
}

function iniciarGeracaoDePosicaoAleatoria() {
    gerarPosicaoAleatoria();

    setInterval(gerarPosicaoAleatoria, 750);
}

hackers.addEventListener('click', clicarNohackers);

function iniciarContagemRegressiva() {
    const contador = setInterval(() => {
        tempo--;
        atualizarTempo();

        if (tempo === 0) {
            clearInterval(contador);
            alert(`Tempo esgotado! Sua pontuação final: ${pontos}`);
        }
    }, 1000);
}

iniciarGeracaoDePosicaoAleatoria();
atualizarPontuacao();
atualizarTempo();
iniciarContagemRegressiva();
