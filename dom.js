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
console.log("Hello");

console.log(document.querySelector("#items").parentElement);
console.log(
  (document.querySelector("#items").lastElementChild.style.backgroundColor =
    "blue")
);

console.log(
  (document.querySelector("#items").firstElementChild.style.backgroundColor =
    "blue")
);

console.log(document.querySelector("#items").lastChild);
console.log(document.querySelector("#items").firstChild);

const ul = document.getElementById("items");
console.log(ul.nextSibling);
console.log(ul.previousSibling);

console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);

const newElement = document.createElement("span");
newElement.setAttribute("title", "new");
console.log(newElement);

const newText = document.createTextNode("New");
newElement.appendChild(newText);
console.log(newElement);

const container = document.querySelector("header .container");
const h1 = document.querySelector("header h1");
const data1 = document.createElement("div");
data1.innerHTML = "Hello World";
console.log(data1);
container.insertBefore(data1, h1);

ul.insertBefore(data1, li[0]);
