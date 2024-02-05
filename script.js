const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const ulist = document.querySelector("#details");

function handleFormSubmit(event) {
  event.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = username.value + "-" + email.value + "-" + phone.value;
  ulist.appendChild(li);
  const obj = {
    name: username.value,
    email: email.value,
    phone: phone.value,
  };

  localStorage.setItem(email.value, JSON.stringify(obj));
}
