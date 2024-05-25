function mostrarAba(aba) {
  document.getElementById('footer').style.display = 'none';
  var abas = document.querySelectorAll('section');
  abas.forEach(function(element) {
    element.style.display = 'none';
  });

  document.getElementById(aba).style.display = 'block';
}

function verificarRespostasTextos() {
  var resposta1 = document.getElementById('pergunta1').value.toLowerCase();
  var resposta2 = document.getElementById('pergunta2').value.toLowerCase();

  if (resposta1 === 'luz' && resposta2 === 'nana') {
    document.getElementById('resultadoTextos').textContent = 'Você acertou! Você errou ' + (tentativasTextos - 1) + ' vezes.';
    tentativasTextos = 0;
    document.getElementById('textos').style.display = 'none'; // Esconder as perguntas
    document.getElementById('textos-especial').style.display = 'block'; // Exibir a frase especial
  } else {
    document.getElementById('resultadoTextos').textContent = 'Você errou. Tente novamente.';
    tentativasTextos++;
  }
}

function verificarRespostasFotos() {
  var resposta3 = document.getElementById('pergunta3').value.toLowerCase();
  var resposta4 = document.getElementById('pergunta4').value.toLowerCase();

  if (resposta3 === 'mil milhões' && resposta4 === 'orelha') {
    document.getElementById('resultadoFotos').textContent = 'Você acertou! Você errou ' + (tentativasFotos - 1) + ' vezes.';
    tentativasFotos = 0;
    document.getElementById('fotos').style.display = 'none'; // Esconder as perguntas
    document.getElementById('fotos-especial').style.display = 'block'; // Exibir a aba de fotos
  } else {
    document.getElementById('resultadoFotos').textContent = 'Você errou. Tente novamente.';
    tentativasFotos++;
  }
}

function verificarRespostasMusicas() {
  var resposta5 = document.getElementById('pergunta5').value.toLowerCase();
  var resposta6 = document.getElementById('pergunta6').value.toLowerCase();

  if (resposta5 === 'açai' && resposta6 === 'musica') {
    document.getElementById('resultadoMusicas').textContent = 'Você acertou! Você errou ' + (tentativasMusicas - 1) + ' vezes.';
    tentativasMusicas = 0;
    document.getElementById('musicas').style.display = 'none'; // Esconder as perguntas
    document.getElementById('musicas-especial').style.display = 'block'; // Exibir a aba de músicas
    document.getElementById('background-music').pause(); // Parar a música
    document.getElementById('background-musics').play(); // Tocar a música
  } else {
    document.getElementById('resultadoMusicas').textContent = 'Você errou. Tente novamente.';
    tentativasMusicas++;
  }
}

var tentativasTextos = 1;
var tentativasFotos = 1;
var tentativasMusicas = 1;

// Exemplo simples para mostrar e ocultar o ursinho após alguns segundos
setTimeout(() => {
  document.querySelector('.ursinho').style.display = 'none';
}, 10000); // Esconde o ursinho após 10 segundos (10000 milissegundos)