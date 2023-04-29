document.body.style.backgroundColor = "#092541";
const table = document.querySelector("table");
const cells = document.querySelectorAll("td");
const countdownElement = document.getElementById("countdown");
const pElement = document.getElementById("p");
const gerarHackBtn = document.getElementById("gerar-hack");
const loading = document.getElementById("loading");
const loadingText = document.getElementById("loading-text");


let numStars = 0;
let count = 0;
let possibleBombs = [8, 6, 4, 2];
let numBombs = possibleBombs[Math.floor(Math.random() * possibleBombs.length)];

gerarHackBtn.addEventListener("click", function() {
  table.style.display = "flex";
  loading.style.display = "flex";
  loadingText.innerHTML = "Hackeando Mines...";

  setTimeout(function() {
    numBombs = possibleBombs[Math.floor(Math.random() * possibleBombs.length)];
    if (numBombs === 8) {
      numStars = 2;
    } else if (numBombs === 6) {
      numStars = 3;
    } else if (numBombs === 4 || numBombs === 2) {
      numStars = 6;
    } else {
      // Número inválido de bombas
      numStars = 0;
    }
    const randomCells = [];
    while (randomCells.length < numStars) {
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
    cell.innerHTML = "<img src='/star' alt='Star' class='animated-star'>";
    $(cell).find("img").addClass("rotate-animation");
  }, 5000);
}


function startCountdown() {
  let timeLeft = 60;
  countdownElement.style.opacity = "1";
  pElement.style.opacity = "1";
  pElement.innerHTML = ` Assertividade: 96% | ${numStars} Estrelas e ${numBombs} Bombas`;

  const countdownInterval = setInterval(function() {
    timeLeft--;
    countdownElement.innerHTML = `Entrada válida: ${timeLeft} segundos`;

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      countdownElement.style.opacity = "0";
      gerarHackBtn.classList.remove("disabled");
      pElement.style.opacity = "0";
      resetTable();
    }
  }, 1000);
}

function resetTable() {
  const starCells = document.querySelectorAll('td img[src="/star"]');
  starCells.forEach(function(starCell) {
    starCell.setAttribute("src", "/nostar");
    starCell.classList.add("animated-star2");
    count = 0;
  });
}



function animateSVG(svgContainer) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  var vx = (Math.random() - 0.5) * 2;
  var vy = (Math.random() - 0.5) * 2;
  setInterval(function() {
    x += vx;
    y += vy;
    if (x < -svgContainer.offsetWidth || x > window.innerWidth) {
      vx = -vx;
    }
    if (y < -svgContainer.offsetHeight || y > window.innerHeight) {
      vy = -vy;
    }
    svgContainer.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  }, 5);
}

window.onload = function() {
  var containers = document.querySelectorAll('.svg-container');
  for (var i = 0; i < containers.length; i++) {
    animateSVG(containers[i]);
  }
}
