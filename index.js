const username = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const ul = document.querySelector("#list");

window.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  axios
    .get(
      "https://crudcrud.com/api/42e1cbf5822e4b248c09368b6731885a/assignmentData"
    )
    .then((res) => {
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        let list = buildLi(res.data[i]);
        ul.appendChild(list);
      }
    });
});

function handleFormSubmit(event) {
  event.preventDefault();
  const obj = {
    username: username.value,
    email: email.value,
    phone: phone.value,
  };
  let list = buildLi(obj);
  ul.appendChild(list);
  axios.post(
    "https://crudcrud.com/api/42e1cbf5822e4b248c09368b6731885a/assignmentData",
    obj
  );

  username.value = "";
  email.value = "";
  phone.value = "";
}

// const deletebtn = document.querySelector(".Delete");
function buildLi(obj) {
  const li = document.createElement("li");
  const del = document.createElement("button");

  del.innerHTML = "Delete";
  del.addEventListener("click", function (event) {
    event.preventDefault();
    const emailTo =
      event.target.parentElement.firstChild.textContent.split(" - ");

    event.target.parentElement.style.display = "none";
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
  });
  li.innerHTML = obj.username + " - " + obj.email + " - " + obj.phone;
  li.appendChild(del);
  li.appendChild(edit);
  return li;
}
