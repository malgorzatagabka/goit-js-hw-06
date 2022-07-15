const textInput = document.querySelector("#validation-input");
const textInputLenght = textInput.getAttribute("data-length");

textInput.addEventListener('blur', check)

function check() {
    if (textInput.value.length == textInputLenght) {
      textInput.classList.add('valid')
      textInput.classList.remove('invalid')
   } else {
      textInput.classList.add('invalid')
      textInput.classList.remove('valid')
   }
}
