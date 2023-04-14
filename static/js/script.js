document.body.style.backgroundColor = "#0775cc";

document.getElementById("gerar-hack").addEventListener("click", function () {
  document.querySelector("table").style.display = "flex";
  document.getElementById("loading").style.display = "flex";
  document.getElementById("loading-text").innerHTML = "Hackeando Mines...";

  setTimeout(function () {
    var cells = document.querySelectorAll("td");
    var randomCells = [];

    var numBombs = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
    var numStars = 0;
    switch (numBombs) {
      case 3:
        numStars = 0;
        numBombs = 7;
        numStars = 3;
        break;
      case 4:
        numStars = 4;
        break;
      case 5:
        numStars = 5;
        break;
      case 6:
        numStars = 2;
        break;
      case 7:
        numStars = 2;
        break;
      case 8:
        numStars = 2;
        break;
    }


    for (var i = 0; i < numBombs; i++) {
      var randomIndex = Math.floor(Math.random() * cells.length);
      if (!randomCells.includes(cells[randomIndex])) {
        randomCells.push(cells[randomIndex]);
      } else {
        i--;
      }
    }

    var count = 0;
    var interval = setInterval(function () {
      abrirCelula(randomCells[count]);

      count++;
      if (count === numStars) {
        clearInterval(interval);
        startCountdown(numStars, numBombs);

        document.getElementById("loading").style.display = "none";
        document.querySelector("table").style.display = "table";
        document.getElementById("gerar-hack").classList.add("disabled");
        document.getElementById("gerar-hack").removeEventListener("click", this);
      }
    }, 1000);

  }, 250);

});

function abrirCelula(cell) {
  setTimeout(function () {
    cell.innerHTML = '<img src="/static/img/star2.jpg" alt="Star" class="animated-star">';
    cell.querySelector("img").classList.add("rotate-animation");
  }, 5000);
}

function startCountdown(numBombs, numStars) {
  document.getElementById("countdown").style.opacity = "1";
  document.body.style.backgroundColor = "#0775cc";

  var countdownElement = document.getElementById("countdown");
  var pElement = document.getElementById("p");
  var timeLeft = 60;
  document.getElementById("p").style.opacity = "1";
  countdownElement.innerHTML = "Entrada válida: " + timeLeft + " segundos";
  pElement.innerHTML = " Acertividade: 96% | " + numBombs + " Estrelas e " + numStars + " Bombas";

  var countdownInterval = setInterval(function () {
    timeLeft--;
    countdownElement.innerHTML = "Entrada válida: " + timeLeft + " segundos";
    pElement.innerHTML = " Acertividade: 96% | " + numBombs + " Estrelas e " + numStars + " Bombas";

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdown").style.opacity = "0";
      document.getElementById("gerar-hack").classList.remove("disabled");
      document.getElementById("p").style.opacity = "0";
      numBombs = 0
      numStars = 0
      function resetTable() {
        // Selecionar todas as células com a imagem "star2.jpg"
        var cells = document.querySelectorAll('td img[src="/static/img/star2.jpg"]');

        // Alterar o atributo src e adicionar a classe "animated-star2" nas imagens
        for (var i = 0; i < cells.length; i++) {
          cells[i].setAttribute('src', '/static/img/1.jpg');
          cells[i].classList.add('animated-star');
        }
      }
      resetTable()
    }
  }, 1000);
}
