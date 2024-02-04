const username = document.querySelector(".username");
const email = document.querySelector(".email");
const number = document.querySelector(".number");
const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  localStorage.setItem("name", username.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("number", number.value);
}
