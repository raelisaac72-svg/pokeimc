document.getElementById('imc-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const pesoInput = parseFloat(document.getElementById('peso').value);
  let alturaInput = parseFloat(document.getElementById('altura').value);

  if (!pesoInput || !alturaInput || pesoInput <= 0 || alturaInput <= 0) {
    alert('Por favor, insira valores válidos para peso e altura do Treinador.');
    return;
  }

  // Trata altura digitada em centímetros (ex: 175)
  if (alturaInput > 3) {
    alturaInput = alturaInput / 100;
  }

  const imc = pesoInput / (alturaInput * alturaInput);
  const imcFormatado = imc.toFixed(1);

  let classificacaoText = '';
  let classeCor = '';
  let categoriaPokemon = '';
  let pokemonEmoji = '';

  // Definição das faixas com temática Pokémon
  if (imc < 18.5) {
    classificacaoText = 'Abaixo do peso';
    classeCor = 'tipo-eletrico';
    categoriaPokemon = 'Categoria: Ágil & Veloz (Ex: Pikachu / Haunter)';
    pokemonEmoji = '⚡';
  } else if (imc >= 18.5 && imc < 25) {
    classificacaoText = 'Peso ideal';
    classeCor = 'tipo-grama';
    categoriaPokemon = 'Categoria: Equilibrado (Ex: Lucario / Charizard)';
    pokemonEmoji = '🌿';
  } else if (imc >= 25 && imc < 30) {
    classificacaoText = 'Sobrepeso';
    classeCor = 'tipo-fogo';
    categoriaPokemon = 'Categoria: Tanque Resistente (Ex: Blastoise / Dragonite)';
    pokemonEmoji = '🔥';
  } else {
    classificacaoText = 'Obesidade';
    classeCor = 'tipo-lutador';
    categoriaPokemon = 'Categoria: Força Peso-Pesado (Ex: Snorlax / Slaking)';
    pokemonEmoji = '🥊';
  }

  // Atualiza os elementos na tela
  const resultadoDiv = document.getElementById('resultado');
  const valorImcSpan = document.getElementById('valor-imc');
  const classificacaoP = document.getElementById('classificacao');
  const categoriaP = document.getElementById('categoria-pokemon');
  const avatarDiv = document.getElementById('pokemon-avatar');

  valorImcSpan.textContent = imcFormatado;
  classificacaoP.textContent = `Status: ${classificacaoText}`;
  classificacaoP.className = 'classificacao ' + classeCor;
  categoriaP.textContent = categoriaPokemon;
  avatarDiv.textContent = pokemonEmoji;

  resultadoDiv.classList.remove('hidden');

  // Pisca as luzes da Pokédex ao calcular
  piscarLuzes();
});

function piscarLuzes() {
  const blueLight = document.querySelector('.big-blue-light');
  blueLight.style.boxShadow = '0 0 25px #ffffff, 0 0 15px #0055ff';
  setTimeout(() => {
    blueLight.style.boxShadow = '0 0 10px #0055ff';
  }, 400);
}