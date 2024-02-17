let inputEl = document.getElementById("palindrome-input");
let resultEl = document.getElementById("palindrome-result");
let checkBtn = document.getElementById("palindrome-btn");

checkBtn.addEventListener("click", () => {
  let inputValue = inputEl.value;
  let reverseValue = inputValue.split("").reverse().join("");
  if (inputValue === reverseValue) {
    resultEl.innerHTML = `${inputValue} is a palindrome!`;
    resultEl.style.color = "green";
  } else {
    resultEl.innerHTML = `${inputValue} is not a palindrome!`;
    resultEl.style.color = "red";
  }
});
