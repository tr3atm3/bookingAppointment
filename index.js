const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const ul = document.querySelector("#list");

function handleFormSubmit(event) {
  event.preventDefault();
  const obj = {
    username: username.value,
    email: email.value,
    phone: phone.value,
  };
  const li = document.createElement("li");
  const del = document.createElement("button");

  del.innerHTML = "Delete";
  del.addEventListener("click", function (event) {
    event.preventDefault();
    const emailTo =
      event.target.parentElement.firstChild.textContent.split(" - ");
    // console.log(emailTo[1]);
    event.target.parentElement.style.display = "none";
    localStorage.removeItem(emailTo[1]);
  });
  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  edit.addEventListener("click", function (event) {
    event.preventDefault();
    const emailTo =
      event.target.parentElement.firstChild.textContent.split(" - ");
    username.value = emailTo[0];
    email.value = emailTo[1];
    phone.value = emailTo[2];
    event.target.parentElement.style.display = "none";
    localStorage.removeItem(emailTo[1]);
  });
  li.innerHTML = username.value + " - " + email.value + " - " + phone.value;
  li.appendChild(del);
  li.appendChild(edit);
  ul.appendChild(li);
  localStorage.setItem(email.value, JSON.stringify(obj));

  username.value = "";
  email.value = "";
  phone.value = "";
}

// const deletebtn = document.querySelector(".Delete");
