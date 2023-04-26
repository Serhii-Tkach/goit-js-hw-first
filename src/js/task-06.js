const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", handleInputBlur);

function handleInputBlur(event) {
  const length = Number(inputRef.dataset.length);
  const value = event.target.value;

  if (value.length === length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
}