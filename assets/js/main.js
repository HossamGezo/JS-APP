let cardHead = document.querySelector(".card-head");
let addBtn = document.querySelector(".card-button");
let listItems = document.querySelector(".card-list");
let cnt = 1;
let items;
function setItem(item, text) {
  cardHead.innerText = text;
  items = document.querySelectorAll(".card-list__item");
  items.forEach(item => {
    item.classList.remove("active");
  });
  item.classList.add("active");
}


addBtn.addEventListener("click", function () {
  listItems.innerHTML += `
    <li onclick="setItem(this, this.innerText)" class="card-list__item">New Item ${cnt++}</li>
  `;
});