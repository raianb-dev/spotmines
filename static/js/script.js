document.body.style.backgroundColor = "#0775cc";


document.getElementById("gerar-hack").addEventListener("click", function () {
  document.querySelector("table").style.display = "flex";
  document.getElementById("loading").style.display = "flex";
  document.getElementById("loading-text").innerHTML = "Hackeando Mines...";

  setTimeout(function () {
    var cells = document.querySelectorAll("td");
    var randomCells = [];

    for (var i = 0; i < 6; i++) {
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
      if (count === 6) {
        clearInterval(interval);
        startCountdown();
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

function startCountdown() {
  document.getElementById("countdown").style.display = "flex";
  document.getElementById("countdown").style.opacity = "1";
  document.body.style.backgroundColor = "#0775cc";

  var countdownElement = document.getElementById("countdown");
  var timeLeft = 60;
  countdownElement.innerHTML = "Entrada válida por " + timeLeft + " segundos.";

  var countdownInterval = setInterval(function () {
    timeLeft--;
    countdownElement.innerHTML = "Entrada válida por " + timeLeft + " segundos.";

    if (timeLeft === 0) {
      clearInterval(countdownInterval);
      location.reload();
    }
  }, 1000);
}
