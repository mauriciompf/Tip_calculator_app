const bill = document.querySelector("#bill");
const numberOfPeople = document.querySelector("#number-of-people");
const buttons = document.querySelectorAll("#buttons > button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const currentButton = e.currentTarget;
    const percentageTip = parseInt(currentButton.value) / 100;

    // Custom button --> Custom input
    if (isNaN(percentageTip)) {
      const custom = document.createElement("input");
      custom.setAttribute("type", "number");
      custom.setAttribute(
        "class",
        "focus:outline-2 hover:outline-2 focus:outline-primary-stron-cyan text-neutral-very-dark-cyan bg-neutral-very-light-grayish-cyan pr-2 pl-8 rounded-md text-right text-[1.25rem] w-[107px] caret-color"
      );
      button.parentElement.appendChild(custom);
      custom.select();
      document.querySelector("#custom").remove();
    }

    // console.log(typeof currentButton.value);
    const totalTip = bill.value * percentageTip;
    let tipAmount = totalTip / numberOfPeople.value;
    tipAmount = (Math.floor(tipAmount * 100) / 100).toFixed(2);
    const total = (
      (bill.value * (percentageTip + 1)) /
      numberOfPeople.value
    ).toFixed(2);

    console.log(tipAmount, total);
  });
});

// Bill x percentageTip = Ttip

// Tip Amount \ per person = Ttip / Npeople

// Total \ per person = Bill * (percentageTip + 1) / Npeople
