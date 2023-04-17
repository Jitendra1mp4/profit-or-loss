const inputInitialPrice = document.querySelector("#initial-price");
const inputQuantity = document.querySelector("#quantity");
const inputCurrentPrice = document.querySelector("#current-price");
const btnTellMe = document.querySelector("#btn-tell-me");
const outputBox = document.querySelector("#output-box");

const percentage = (obtained, total) => (obtained / total) * 100;

const calculate = (initialPrice, currentPrice, quantity) => {
  const totalInvested = initialPrice * quantity;
  const difference = currentPrice - initialPrice;
  let message = "";
  if (difference === 0) {
    message = "No profit No Loss, You just need to care about taxes 🤔️";
  } else if (difference > 0) {
    // work for profit
    const profitAmount = quantity * difference;
    const profitPercentage = percentage(profitAmount, totalInvested);
    message = `profit amount : ${profitAmount.toFixed(2)} profit percentage : ${profitPercentage.toFixed(2)}`;
  } else {
    // work for loss
    const lossAmount = quantity * difference * -1;
    const lossPercentage = percentage(lossAmount, totalInvested);
    message = `loss amount : ${lossAmount.toFixed(2)} loss percentage : ${lossPercentage.toFixed(2)}`;
  }
  setMessage(message);
};

function setMessage(message) {
  outputBox.innerHTML = message;
}

btnTellMe.addEventListener("click", () => {
  const initialPrice = inputInitialPrice.value;
  const currentPrice = inputCurrentPrice.value;
  const quantity = inputQuantity.value;

  if (initialPrice == "" || currentPrice == "" || quantity == "")
    setMessage("Please fill all the fields.");
  else calculate(initialPrice, currentPrice, quantity);
});
