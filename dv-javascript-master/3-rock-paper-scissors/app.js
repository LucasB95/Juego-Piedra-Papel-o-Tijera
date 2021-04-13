const playerChoiceElement = document.getElementById("playerChoice");
const computerChoiceElement = document.getElementById("computerChoice");

const resultElement = document.getElementById("result");

const countElementPlayer = document.getElementById("counterPlayer");
const countElementComputer = document.getElementById("counterComputer");
const  quienGano = document.getElementById("gano");

var contComputer=0;
var contPlayer=0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", startGame));



function startGame(event) {
  // Obtener elección del jugador
  const button = event.currentTarget;
  const playerChoice = button.dataset.choice;

  // Obtener elección de la computadora
  const computerChoice = getComputerChoice();

  // Calcular ganador
  //const playerWins = isPlayerWinner(playerChoice, computerChoice);
  const winner = setWinner(playerChoice, computerChoice);
  const jugador =  contPlayer;
  const computadora = contComputer;

  // Mostrar resultado
  playerChoiceElement.setAttribute("src", `imgs/${playerChoice}.png`);
  computerChoiceElement.setAttribute("src", `imgs/${computerChoice}.png`);

  // const result = playerWins ? "GANASTE" : "PERDISTE";

  //   if (playerWins === true) {
  //     result.textContent = "GANASTE";
  //   } else if (!playerWins) {
  //     result.textContent = "PERDISTE";
  //   } else if (playerWins === "draw") {
  //     result.textContent = "EMPATASTE";
  //   }

  resultElement.textContent = winner;

  countElementPlayer.textContent = "Cantidad de veces Ganadas : " + jugador;
  countElementComputer.textContent = "Cantidad de veces Perdidas : " + computadora;

  quienGano.textContent = ganadorReal(contPlayer,contComputer);
}

function ganadorReal(contPlayer,contComputer){
  if(contPlayer == 3){
     return "Gano el jugador";
  }else if(contComputer == 3){
   return "Gano la computadora";
  }
}

const possibleChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  // Obtener un valor aleatorio
  const computerChoice = Math.floor(Math.random() * 3);

  // Retornar elección
  return possibleChoices[computerChoice];
}

// Antes: isPlayerWinner
function setWinner(playerChoice, computerChoice) {

  console.log("playerChoice", playerChoice);
  console.log("computerChoice", computerChoice);

  //console.log("contador de jugador",contPlayer);
  //console.log("contador de computadora",contComputer);
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) { 
    contPlayer++;
    return "GANASTE";
  } else if (playerChoice === computerChoice) {
    return "EMPATASTE";
  } else {
    contComputer++;
    return "PERDISTE";
  }
}


