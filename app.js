const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-button");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "your birthDay is lucky";
  } else {
    outputBox.innerText = "your birthDay is not lucky";
  }
}

function checkBirthDayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    outputBox.innerText = "Please enter both fields 😡";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }

  return sum;
}

checkNumber.addEventListener("click", checkBirthDayIsLucky);
