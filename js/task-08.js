const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  
    const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Proszę uzupełnić wszystkie pola!");
  }

    const result = { Email: email.value, Password: password.value };
    
  console.log(result);
  event.currentTarget.reset();
}
