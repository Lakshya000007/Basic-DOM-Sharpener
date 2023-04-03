const ul = document.getElementById("items");
ul.addEventListener("click", deleteItem);

function deleteItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      var li = e.target.parentElement;
      ul.removeChild(li);
    }
  }
}

const li = document.querySelectorAll("li");
for (const data of li) {
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.class = "edit p-3 m-2";

  data.appendChild(editBtn);
}
