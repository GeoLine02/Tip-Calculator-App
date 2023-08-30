// Calculate the correct tip and total cost of the bill per person

const billInput = document.getElementById("billInput");
const billInputDiv = document.getElementById("billInputDiv");
const peopleInput = document.getElementById("peopleInput");
const peopleNumberDiv = document.getElementById("peopleNumberDIv");
const customTip = document.getElementById("customTip");
const resetBtn = document.getElementById("reset");
const wrapper = document.querySelector(".tip-wrapper");
const tipButtons = wrapper.querySelectorAll("button");
let tipAmount = document.getElementById("tipAmount");
const totalAmount = document.getElementById("totalAmount");
let tipsArray = [];
let filteredArray = [];

billInput.addEventListener("keyup", () => {
  function billStates() {
    if (billInput.value <= 0) {
      billInputDiv.style.border = "2px solid";
      billInputDiv.style.borderColor = "red";
    } else {
      billInputDiv.style.border = "2px solid";
      billInputDiv.style.borderColor = "lightGreen";
    }
  }
  billStates();
});
customTip.addEventListener("keyup", () => {
  function customTipErrorState() {
    if (customTip.value <= 0) {
      customTip.style.border = "2px solid";
      customTip.style.borderColor = "red";
    } else {
      customTip.style.border = "2px solid";
      customTip.style.borderColor = "lightGreen";
    }
  }
  customTipErrorState();
});
peopleInput.addEventListener("keyup", () => {
  function peopleErrorState() {
    if (peopleInput.value <= 0) {
      peopleNumberDiv.style.border = "2px solid";
      peopleNumberDiv.style.borderColor = "red";
    } else {
      peopleNumberDiv.style.border = "2px solid";
      peopleNumberDiv.style.borderColor = "lightGreen";
    }
  }
  peopleErrorState();
});
tipButtons.forEach(function (button) {
  tipsArray.push(button.innerText);
});
filteredArray = tipsArray.map(function (item) {
  return parseInt(item.split("%"));
});

for (let i = 0; i < filteredArray.length; i++) {
  tipButtons[i].addEventListener("click", () => {
    const tipAmountFloat = parseFloat(
      ((billInput.value * filteredArray[i]) / 100 / peopleInput.value).toFixed(
        2
      )
    );
    const totalAmountFloat =
      parseFloat(billInput.value / peopleInput.value) + tipAmountFloat;
    tipAmount.innerText = `$` + tipAmountFloat;

    totalAmount.innerText = `$` + totalAmountFloat;
  });
}

customTip.addEventListener("keyup", () => {
  const tipAmountFloat = parseFloat(
    ((billInput.value * (customTip.value / 100)) / peopleInput.value).toFixed(2)
  );
  tipAmount.innerText = `$` + tipAmountFloat;

  const totalAmountFloat =
    parseFloat(billInput.value / peopleInput.value) + tipAmountFloat;
  tipAmount.innerText = `$` + tipAmountFloat;

  totalAmount.innerText = `$` + totalAmountFloat;
});

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  customTip.value = "";
  peopleInput.value = "";
  tipAmount.innerText = `$` + "0.00";
  totalAmount.innerText = `$` + "0.00";
});
