
const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");

options.forEach((option) => {
    option.addEventListener("click", () => {
      computer.classList.add("shakeComputer");
      player.classList.add("shakePlayer");

      setTimeout(() => {

         computer.classList.remove("shakeComputer");
        player.classList.remove("shakePlayer");
  
        player.src = "./" + option.innerHTML + "Player.png";
  
