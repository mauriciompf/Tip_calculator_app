const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#number-of-people");
const buttons = document.querySelectorAll("#buttons > button");
const tipAmountElem = document.querySelector("#tip-amount");
const totalElem = document.querySelector("#total");
const resetButton = document.querySelector("#reset-btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (validateInputs()) {
      const currentButton = e.currentTarget;
      const percentageTip = parseInt(currentButton.value) / 100;
      resetButton.disabled = false;
      resetButton.classList.remove("cursor-not-allowed");
      resetButton.addEventListener("click", resetCalculator);

      if (isNaN(percentageTip)) {
        const custom = document.createElement("input");
        custom.setAttribute("type", "number");
        custom.setAttribute(
          "class",
          "focus:outline-2 hover:outline-2 focus:outline-primary-stron-cyan text-neutral-very-dark-cyan bg-neutral-very-light-grayish-cyan pr-2 pl-8 rounded-md text-right text-[1.25rem] md:w-[107px] w-full caret-color"
        );
        button.parentElement.appendChild(custom);
        custom.select();
        document.querySelector("#custom").remove();
        custom.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            calculateTip(custom.value);
          }
        });
      } else {
        calculateTip(currentButton.value);
      }
    }
  });
});

function calculateTip(value) {
  const percentageTip = parseInt(value) / 100;
  const totalTip = bill.value * percentageTip;
  let tipAmount = totalTip / numberOfPeople.value;
  tipAmount = (Math.floor(tipAmount * 100) / 100).toFixed(2);
  const total = (
    (bill.value * (percentageTip + 1)) /
    numberOfPeople.value
  ).toFixed(2);

  tipAmountElem.textContent = tipAmount;
  totalElem.textContent = total;
}

function resetCalculator() {
  tipAmountElem.textContent = "$0.00";
  totalElem.textContent = "$0.00";
  resetButton.disabled = true;
  resetButton.classList.add("cursor-not-allowed");
  bill.value = "";
  numberOfPeople.value = "";
}

function validateInputs() {
  const error = document.querySelector("#error");
  let isValid;

  if (numberOfPeople.value === "0" || numberOfPeople.value === "") {
    error.textContent = "Can't be zero";
    numberOfPeople.classList.add("outline", "outline-1", "outline-red-500");
    isValid = false;
  } else {
    error.textContent = "";
    numberOfPeople.classList.remove("outline", "outline-1", "outline-red-500");
    isValid = true;
  }

  if (bill.value === "0" || bill.value === "") alert("Something is wrong...");

  return isValid;
}
