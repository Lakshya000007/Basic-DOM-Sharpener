const title = document.getElementById("header-title");
title.style.border = "2px solid black";
title.style.padding = "4px";

const addTitle = document.getElementsByClassName("title");
console.log(addTitle);
addTitle[0].style.fontWeight = "900";
addTitle[0].style.color = "green";

const items = document.getElementsByClassName("list-group-item");
console.log(items);

items[2].style.backgroundColor = "green";

for (const item of items) {
  item.style.fontWeight = "bold";
}

const li = document.getElementsByTagName("li");
console.log(li);

li[4].classList.add("list-group-item");

document.querySelector("li:nth-child(2)").style.backgroundColor = "green";
document.querySelector("li:nth-child(3)").style.display = "none";
