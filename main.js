/* let billAmount = 111.11;

function gratuity() {
  return billAmount * 0.2;
}

function totalWithGrat(amount) {
  return gratuity() + amount;
}

console.log( 
  `Your total, including gratuity, is: $${totalWithGrat(billAmount).toFixed(2)}.`
); */

let handsArray = [
  `rock`, `paper`, `scissors`;
]

function getComputerHand() {
  return hands[parseInt(Math.random()*10) % 3];
}

function compare(handsArray) {}

console.log(handsArray[compare])