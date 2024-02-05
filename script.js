const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const ulist = document.querySelector("#details");

function handleFormSubmit(event) {
  event.preventDefault();
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.innerHTML = "Delete";
  // btn.className = "delete"
  btn.addEventListener("click", function (e) {
    const item = e.target.parentElement;
    let str = item.firstChild.toString();
    console.log(str, str.indexOf("-") + 1, str.lastIndexOf("-"));
    item.style.display = "none";
    // let subStr = str.substring(str.indexOf("-") + 1, str.lastIndexOf("-"));
    // console.log(subStr);

    localStorage.removeItem();
  });

  li.innerHTML = username.value + "-" + email.value + "-" + phone.value;
  li.appendChild(btn);
  ulist.appendChild(li);
  const obj = {
    name: username.value,
    email: email.value,
    phone: phone.value,
  };

  localStorage.setItem(email.value, JSON.stringify(obj));
}
