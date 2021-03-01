let billAmount = 100.58;

function gratuity(){
    return billAmount * 0.2;  
  }

function totalWithGrat(amount){
  return gratuity() + amount;
}

console.log(
  `your total, including gratutity is:\
	$${totalWithGrat(billAmount).toFixed(2)}`
);