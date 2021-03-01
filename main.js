let billAmount = 111.11;

function gratuity() {
  return billAmount * 0.2;
}

function totalWithGrat(amount) {
  return gratuity() + amount;
}

console.log(
  `Your total, including gratuity, is: $${totalWithGrat(billAmount).toFixed(2)}`
);