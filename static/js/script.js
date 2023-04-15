document.body.style.backgroundColor = "#000";
const table = document.querySelector("table");
const cells = document.querySelectorAll("td");
const countdownElement = document.getElementById("countdown");
const pElement = document.getElementById("p");
const gerarHackBtn = document.getElementById("gerar-hack");
const loading = document.getElementById("loading");
const loadingText = document.getElementById("loading-text");

let numBombs = 0;
let numStars = 0;
let count = 0;

gerarHackBtn.addEventListener("click", function() {
  table.style.display = "flex";
  loading.style.display = "flex";
  loadingText.innerHTML = "Hackeando Mines...";

  setTimeout(function() {
    numBombs= Math.floor(Math.random() * 4) + 3;
    numStars = (numStars === 3) ? 4 : (numStars === 4) ? 3 : 5;
    
    const randomCells = [];
    while (randomCells.length < numBombs) {
      const randomIndex = Math.floor(Math.random() * cells.length);
      if (!randomCells.includes(cells[randomIndex])) {
        randomCells.push(cells[randomIndex]);
      }
    }
  
    let count = 0;
    const interval = setInterval(function() {
      abrirCelula(randomCells[count]);
      count++;
  
      if (count === numStars) {
        clearInterval(interval);
        startCountdown();
  
        loading.style.display = "none";
        table.style.display = "table";
        gerarHackBtn.classList.add("disabled");
        gerarHackBtn.removeEventListener("click", this);
      }
    }, 1000);
  }, 0);
  
  
});

function abrirCelula(cell) {
  setTimeout(function() {
    cell.innerHTML = '<img src="/static/img/star.png" alt="Star" class="animated-star">';
    cell.querySelector("img").classList.add("rotate-animation");
  }, 5000);
}

function startCountdown() {
  let timeLeft = 60;
  countdownElement.style.opacity = "1";
  pElement.style.opacity = "1";
  pElement.innerHTML = ` Acertividade: 96% | ${numBombs} Estrelas e ${numStars} Bombas`;

  const countdownInterval = setInterval(function() {
    timeLeft--;
    countdownElement.innerHTML = `Entrada válida: ${timeLeft} segundos`;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      countdownElement.style.opacity = "0";
      gerarHackBtn.classList.remove("disabled");
      pElement.style.opacity = "0";
      numBombs = 0;
      numStars = 0;
      resetTable();
    }
  }, 1000);
}

function resetTable() {
  const starCells = document.querySelectorAll('td img[src="/static/img/star.png"]');
  starCells.forEach(function(starCell) {
    starCell.setAttribute("src", "/static/img/no-star.png");
    starCell.classList.add("animated-star");
    numBombs = 0;
    numStars = 0;
    count = 0;
  });
}
