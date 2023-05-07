const button = document.getElementById('button');
const roleta = document.getElementById('roleta');
const borda = document.getElementById('borda');

const alerta = document.getElementsByClassName('alerta')[0];
alerta.innerHTML = "GAME";
alerta.style.transform = 'translateY(40px)';

const cor = document.getElementsByClassName('cor')[0];
cor.innerHTML = "DOUBLE";
cor.style.color = '#CEA87C';
cor.style.transform = 'translateY(40px)';

const porcentagem = document.getElementsByClassName('porcentagem')[0];
porcentagem.style.color = 'black';

const entrada = document.getElementsByClassName('entrada')[0];
entrada.innerHTML = "AGUARDANDO PROXIMA RODADA..";
entrada.style.transform = 'translateY(-40px)';

function resetarPadrao() {
    const alerta = document.getElementsByClassName('alerta')[0];
    alerta.innerHTML = "GAME";
    alerta.style.transform = 'translateY(40px)';
  
    const cor = document.getElementsByClassName('cor')[0];
    cor.innerHTML = "DOUBLE";
    cor.style.color = '#CEA87C';
    cor.style.transform = 'translateY(40px)';
  
    const porcentagem = document.getElementsByClassName('porcentagem')[0];
    porcentagem.style.color = 'black';
  
    const entrada = document.getElementsByClassName('entrada')[0];
    entrada.innerHTML = "AGUARDANDO PRÓXIMA RODADA..";
    entrada.style.transform = 'translateY(-40px)';
  }

const spinner = document.createElement('span');
spinner.classList.add('spinner');
button.appendChild(spinner);

let disabledTime = 60;
let timerId;

button.addEventListener('click', () => {
  if (button.disabled) {
    return;
  }

  button.disabled = true;
  button.value = `Hackeando double...`;
  
  spinner.classList.add('active');

  timerId = setInterval(() => {
    button.value = `Oportunidade identificada`;
    disabledTime--;
    
    button.value = `Entrada valida: (${disabledTime}s)`;
    if (disabledTime === 0) {
      clearInterval(timerId);
      button.disabled = false;
      button.value = 'HACKEAR DOUBLE';
      spinner.classList.remove('active');
      disabledTime = 60;
      resetarPadrao();
    }
  }, 1000);

  roleta.style.animation = 'none';
  roleta.offsetWidth;
  roleta.style.animation = 'move 4s cubic-bezier(0.2, 0, 0.58, 5)';

  // Array com as três possíveis cores e suas porcentagens de chance
  const cores = [
    { nome: 'PRETO', chance: 0.45 },
    { nome: 'VERMELHO', chance: 0.45 },
    { nome: 'BRANCO', chance: 0.10 },
  ];
  
  // Função para escolher uma cor aleatória baseada em suas chances
  function escolherCor() {
    let random = Math.random();
    for (let i = 0; i < cores.length; i++) {
      if (random < cores[i].chance) {
        return cores[i].nome;
      }
      random -= cores[i].chance;
    }
  }

  // Array com as possíveis porcentagens
  const porcentagens = ['79', '86', '92', '95', '97', '46', '65', '71'];

  // Função para escolher uma porcentagem aleatória, dependendo da cor escolhida
  function escolherPorcentagem(corEscolhida) {
    if (corEscolhida === 'BRANCO') {
      const porcentagens = ['46', '65', '71'];
      return porcentagens[Math.floor(Math.random() * porcentagens.length)];
    } else {
      return porcentagens[Math.floor(Math.random() * 5)];
    }
  }

  setTimeout(() => {
    alerta.innerHTML = 'ALERTA';
    alerta.style.transform = '';
    const corEscolhida = escolherCor();
    cor.innerHTML = corEscolhida;
    cor.style.color = '';
    cor.style.transform = '';
  
    let porcentagemEscolhida;
    if (corEscolhida === 'BRANCO') {
      const porcentagens = ['79', '86', '92', '95', '97'];
      porcentagemEscolhida = porcentagens[Math.floor(Math.random() * porcentagens.length)];
    } else {
      porcentagemEscolhida = escolherPorcentagem(corEscolhida);
    }
  
    porcentagem.innerHTML = porcentagemEscolhida + '%';
    porcentagem.style.color = '';
    porcentagem.style.transform = '';
    entrada.innerHTML = `ENTRAR NO ${corEscolhida} (${porcentagemEscolhida}%)`;
    entrada.style.transform = '';
  }, 4000);})
