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

var filter = document.getElementById("filter");

filter.addEventListener("keyup", filterItems);

function filterItems(e) {
  var text = e.target.value.toLowerCase();
  var items = ul.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
