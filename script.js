const weapons = document.querySelectorAll(".weapon");
const message = document.getElementById("message");
const wonScore = document.getElementById("won");
const lostScore = document.getElementById("lost");
const drawScore = document.getElementById("draw");

const playerHand = document.getElementById("playerHand");
const computerHand = document.getElementById("computerHand");

let won = 0,
  lost = 0,
  draw = 0;

weapons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const playerChoice = btn.dataset.choice;
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Animate hands with shake
    playerHand.classList.add("shake");
    computerHand.classList.add("shake");

    // set both hands to rock initially
    playerHand.textContent = "✊";
    computerHand.textContent = "✊";

    setTimeout(() => {
      // after animation, show chosen hands
      playerHand.classList.remove("shake");
      computerHand.classList.remove("shake");

      playerHand.textContent = getEmoji(playerChoice);
      computerHand.textContent = getEmoji(computerChoice);

      let result = "";
      if (playerChoice === computerChoice) {
        result = "🤝 It's a draw!";
        draw++;
      } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        result = "🎉 Congrats! You won!";
        won++;
      } else {
        result = "😞 You lost!";
        lost++;
      }

      message.innerHTML = `
  <div class="result-text">${result}</div>
  <div class="choice">👉 You chose: <strong>${playerChoice}</strong></div>
  <div class="choice">🤖 Computer chose: <strong>${computerChoice}</strong></div>
`;

      wonScore.textContent = won;
      lostScore.textContent = lost;
      drawScore.textContent = draw;
    }, 800); // match shake animation duration
  });
});

function getEmoji(choice) {
  switch (choice) {
    case "rock":
      return "✊";
    case "paper":
      return "✋";
    case "scissors":
      return "✌️";
  }
}
