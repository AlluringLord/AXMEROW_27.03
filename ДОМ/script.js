const title = document.getElementById("title");
title.textContent = "Новый заголовок страницы";

const description = document.querySelector(".description");
description.style.color = "blue";
description.style.fontSize = "24px";

const subtitle = document.querySelector("h2");
subtitle.textContent = "Обновленный раздел сайта";

const items = document.querySelectorAll(".item");
for (const item of items) {
item.style.color = "green";
item.textContent = item.textContent + " элемент";
}

const message = document.querySelector("#message");
message.innerHTML = "Внимание: данные обновлены";

const photo = document.querySelector("#photo");
photo.src = "new.jpg";
photo.alt = "Новое изображение";

const box = document.querySelector("#box");
box.classList.add("active");
box.classList.remove("card");

const username = document.querySelector("#username");
username.value = "Иван Петров";

const banner = document.querySelector("#banner");
banner.style.display = "none";

const productTitle = document.querySelector(".product-title");
productTitle.textContent = "Ноутбук Lenovo";
const productPrice = document.querySelector(".product-price");
productPrice.textContent = "75000 рублей";
productPrice.style.color = "red";
const productImage = document.querySelector("#product-image");
productImage.src = "lenovo.png";
const card = document.querySelector("#card");
card.classList.add("highlight");

const info = document.querySelector("#info");
info.textContent = "Информация обновлена";
info.style.color = "white";
info.style.backgroundColor = "darkblue";
info.style.padding = "10px";

const notes = document.querySelectorAll(".note");
for (let i = 0; i < notes.length; i++) {
notes[i].textContent = `${i + 1}. ${notes[i].textContent}`;
}

const menuItems = document.querySelectorAll("#menu li");
for (const item of menuItems) {
item.textContent = item.textContent + " ✓";
item.style.color = "purple";
}

const headings = document.querySelectorAll(".sub-section");
for (let i = 0; i < headings.length; i++) {
headings[i].textContent = `Обновленный раздел №${i + 1}`;
}

const siteLink = document.querySelector("#site-link");
siteLink.textContent = "Перейти на новый сайт";
siteLink.href = "https://newsite.com";

const avatar = document.querySelector("#avatar");
avatar.src = "user2.png";
avatar.alt = "Пользователь 2";
avatar.style.width = "200px";

const content = document.querySelector("#content");
content.innerHTML = '<h3>Новый блок</h3><p>Это новый текст внутри блока</p>';

const prices = document.querySelectorAll(".price");
for (const price of prices) {
price.textContent = price.textContent + " рублей";
price.style.fontWeight = "bold";
}

const emailInput = document.querySelector("#email");
emailInput.placeholder = "Введите ваш email";

const cards = document.querySelectorAll(".card-item");
for (const c of cards) {
c.classList.add("selected");
}

const listItems = document.querySelectorAll(".list-item");
for (const li of listItems) {
li.classList.remove("active");
}

const submitBtn = document.querySelector("#submit-btn");
submitBtn.textContent = "Сохранить данные";
submitBtn.style.backgroundColor = "green";
submitBtn.style.color = "white";

const statusPar = document.querySelector("#status");
statusPar.textContent = statusPar.textContent + " (проверено системой)";

document.querySelector("#page-title").textContent = "Каталог товаров";
document.querySelector(".task24-desc").textContent = "Выберите нужный товар из списка ниже";
const actBtn = document.querySelector("#action-btn");
actBtn.textContent = "Открыть каталог";
actBtn.style.backgroundColor = "blue";
actBtn.style.color = "white";

document.querySelector(".title").textContent = "Смартфон Samsung Galaxy";
document.querySelector(".price-val").textContent = "59990 рублей";
const stock = document.querySelector(".stock");
stock.textContent = "В наличии";
stock.style.color = "green";
document.querySelector("#product-photo").src = "samsung.jpg";
document.querySelector(".buy-btn").textContent = "Добавить в корзину";
document.querySelector("#product-card").classList.add("featured");