const assignments = [
    {
        title: "Выбор по id и изменение текста",
        html: `<h1 id="main-title">Старый заголовок</h1>`,
        solve: () => {
            const el = document.querySelector("#main-title");
            if (el) el.textContent = "Новый заголовок страницы";
        }
    },
    {
        title: "Выбор по классу и изменение стиля",
        html: `<p class="description">Это описание товара.</p>`,
        solve: () => {
            const p = document.querySelector(".description");
            if (p) {
                p.style.color = "blue";
                p.style.fontSize = "24px";
            }
        }
    },
    {
        title: "Выбор первого элемента по тегу",
        html: `<h2>Раздел сайта</h2>`,
        solve: () => {
            const h2 = document.querySelector("h2");
            if (h2 && h2.closest('.task-card') ? true : true) {
                if (h2 && !h2.closest('.task-card')?.querySelector('.demo-area h2')) {
                    const target = document.querySelector("#task-3-area h2");
                    if (target) target.textContent = "Обновленный раздел сайта";
                    else if (h2 && !h2.id) h2.textContent = "Обновленный раздел сайта";
                } else if (h2) h2.textContent = "Обновленный раздел сайта";
            }
        }
    },
    {
        title: "Выбор нескольких элементов (querySelectorAll)",
        html: `<ul class="list-4"><li class="item">Первый</li><li class="item">Второй</li><li class="item">Третий</li></ul>`,
        solve: () => {
            const items = document.querySelectorAll("#task-4-area .item");
            items.forEach(item => {
                item.style.color = "green";
                if (!item.textContent.includes("элемент")) {
                    item.textContent = item.textContent + " элемент";
                }
            });
        }
    },
    {
        title: "Использование innerHTML",
        html: `<div id="message">Старое сообщение</div>`,
        solve: () => {
            const msg = document.querySelector("#task-5-area #message");
            if (msg) msg.innerHTML = "<b>Внимание</b>: данные обновлены";
        }
    },
    {
        title: "Изменение атрибутов (src, alt)",
        html: `<img id="photo" src="old.jpg" alt="Старое изображение" style="max-width:100px; border:1px solid #ccc;">`,
        solve: () => {
            const img = document.querySelector("#task-6-area #photo");
            if (img) {
                img.src = "new.jpg";
                img.alt = "Новое изображение";
            }
        }
    },
    {
        title: "Добавление и удаление классов",
        html: `<div id="box" class="card">Карточка</div>`,
        solve: () => {
            const box = document.querySelector("#task-7-area #box");
            if (box) {
                box.classList.add("active");
                box.classList.remove("card");
            }
        }
    },
    {
        title: "Изменение значения поля ввода",
        html: `<input type="text" id="username" value="Старое имя">`,
        solve: () => {
            const input = document.querySelector("#task-8-area #username");
            if (input) input.value = "Новое имя пользователя";
        }
    },
    {
        title: "Скрытие элемента",
        html: `<div id="banner">Рекламный баннер</div>`,
        solve: () => {
            const banner = document.querySelector("#task-9-area #banner");
            if (banner) banner.style.display = "none";
        }
    },
    {
        title: "Комбинированное задание (карточка товара)",
        html: `<div id="card" class="product-card"><h3 class="product-title">Старое название</h3><p class="product-price">1000</p><img id="product-image" src="old.png" alt="Старый товар" style="max-width:80px"></div>`,
        solve: () => {
            const title = document.querySelector("#task-10-area .product-title");
            const price = document.querySelector("#task-10-area .product-price");
            const img = document.querySelector("#task-10-area #product-image");
            const card = document.querySelector("#task-10-area #card");
            if (title) title.textContent = "Ноутбук Lenovo";
            if (price) { price.textContent = "75000 рублей"; price.style.color = "red"; }
            if (img) img.src = "lenovo.png";
            if (card) card.classList.add("highlight");
        }
    },
    {
        title: "Несколько свойств сразу",
        html: `<div id="info">Исходная информация</div>`,
        solve: () => {
            const info = document.querySelector("#task-11-area #info");
            if (info) {
                info.textContent = "Информация обновлена";
                info.style.color = "white";
                info.style.backgroundColor = "darkblue";
                info.style.padding = "10px";
            }
        }
    },
    {
        title: "Нумерация абзацев (индекс)",
        html: `<p class="note">Первый абзац</p><p class="note">Второй абзац</p><p class="note">Третий абзац</p>`,
        solve: () => {
            const notes = document.querySelectorAll("#task-12-area .note");
            notes.forEach((p, idx) => {
                const original = p.textContent.replace(/^\d+\.\s*/, '');
                p.textContent = `${idx + 1}. ${original}`;
            });
        }
    },
    {
        title: "Изменение списка (✓ + цвет)",
        html: `<ul id="menu"><li>Главная</li><li>О нас</li><li>Контакты</li></ul>`,
        solve: () => {
            const items = document.querySelectorAll("#task-13-area #menu li");
            items.forEach(li => {
                if (!li.textContent.includes("✓")) li.textContent = li.textContent + " ✓";
                li.style.color = "purple";
            });
        }
    },
    {
        title: "Замена текста в h2 с нумерацией",
        html: `<h2 class="h2-group">Раздел 1</h2><h2 class="h2-group">Раздел 2</h2><h2 class="h2-group">Раздел 3</h2>`,
        solve: () => {
            const headings = document.querySelectorAll("#task-14-area .h2-group");
            headings.forEach((h, idx) => {
                h.textContent = `Обновленный раздел №${idx + 1}`;
            });
        }
    },
    {
        title: "Изменение ссылки (текст + href)",
        html: `<a id="site-link" href="https://oldsite.com">Старый сайт</a>`,
        solve: () => {
            const link = document.querySelector("#task-15-area #site-link");
            if (link) {
                link.textContent = "Перейти на новый сайт";
                link.href = "https://newsite.com";
            }
        }
    },
    {
        title: "Изменение img: src, alt, ширина",
        html: `<img id="avatar" src="user1.png" alt="Пользователь 1" style="max-width:100px">`,
        solve: () => {
            const img = document.querySelector("#task-16-area #avatar");
            if (img) {
                img.src = "user2.png";
                img.alt = "Пользователь 2";
                img.style.width = "200px";
            }
        }
    },
    {
        title: "Полная замена HTML внутри",
        html: `<div id="content">Старое содержимое</div>`,
        solve: () => {
            const div = document.querySelector("#task-17-area #content");
            if (div) {
                div.innerHTML = `<h3>Новый блок</h3><p>Это новый текст внутри блока</p>`;
            }
        }
    },
    {
        title: "Изменение столбца таблицы (price)",
        html: `<table border="1" cellpadding="6" style="border-collapse:collapse">` +
              `<tr><td class="price">100</td><td>Товар 1</td></tr>` +
              `<tr><td class="price">200</td><td>Товар 2</td></tr>` +
              `<tr><td class="price">300</td><td>Товар 3</td></tr></table>`,
        solve: () => {
            const prices = document.querySelectorAll("#task-18-area .price");
            prices.forEach(td => {
                if (!td.textContent.includes("рублей")) {
                    td.textContent = td.textContent + " рублей";
                }
                td.style.fontWeight = "bold";
            });
        }
    },
    {
        title: "Изменение placeholder у input",
        html: `<input type="text" id="email" placeholder="Введите данные">`,
        solve: () => {
            const inp = document.querySelector("#task-19-area #email");
            if (inp) inp.placeholder = "Введите ваш email";
        }
    },
    {
        title: "Добавление класса selected группе",
        html: `<div class="card">Карточка 1</div><div class="card">Карточка 2</div><div class="card">Карточка 3</div>`,
        solve: () => {
            const cards = document.querySelectorAll("#task-20-area .card");
            cards.forEach(c => c.classList.add("selected"));
        }
    },
    {
        title: "Удаление класса active у группы",
        html: `<div class="item active">Элемент 1</div><div class="item active">Элемент 2</div><div class="item active">Элемент 3</div>`,
        solve: () => {
            const items = document.querySelectorAll("#task-21-area .item");
            items.forEach(it => it.classList.remove("active"));
        }
    },
    {
        title: "Кнопка: текст, фон, цвет текста",
        html: `<button id="submit-btn">Отправить</button>`,
        solve: () => {
            const btn = document.querySelector("#task-22-area #submit-btn");
            if (btn) {
                btn.textContent = "Сохранить данные";
                btn.style.backgroundColor = "green";
                btn.style.color = "white";
                btn.style.border = "none";
                btn.style.padding = "6px 12px";
                btn.style.borderRadius = "8px";
            }
        }
    },
    {
        title: "Изменение текста + дополнение",
        html: `<p class="old-text">Это старый текст,</p>`,
        solve: () => {
            const p = document.querySelector("#task-23-area .old-text");
            if (p && !p.textContent.includes("обновлен")) {
                p.textContent = p.textContent + " который был обновлен";
            }
        }
    },
    {
        title: "Много изменений (карточка товара со всем)",
        html: `<div id="product-card" class="card"><h2 class="title">Старое название товара</h2><p class="price">0</p><p class="stock">Нет данных</p><img id="product-photo" src="old-product.jpg" alt="Старый товар" style="max-width:100px"><button class="buy-btn">Купить</button></div>`,
        solve: () => {
            const container = document.querySelector("#task-24-area");
            if (!container) return;
            const title = container.querySelector(".title");
            const price = container.querySelector(".price");
            const stock = container.querySelector(".stock");
            const img = container.querySelector("#product-photo");
            const btn = container.querySelector(".buy-btn");
            const cardDiv = container.querySelector("#product-card");
            if (title) title.textContent = "Смартфон Samsung Galaxy";
            if (price) price.textContent = "59990 рублей";
            if (stock) { stock.textContent = "В наличии"; stock.style.color = "green"; }
            if (img) img.src = "samsung.jpg";
            if (btn) btn.textContent = "Добавить в корзину";
            if (cardDiv) cardDiv.classList.add("featured");
        }
    }
];

const container = document.getElementById("tasksContainer");
container.innerHTML = "";

assignments.forEach((task, idx) => {
    const cardId = `task-${idx + 1}`;
    const demoAreaId = `demo-${cardId}`;

    const cardDiv = document.createElement("div");
    cardDiv.className = "task-card";

    const header = document.createElement("div");
    header.className = "task-header";
    header.innerHTML = `<span>${idx + 1}</span> ${task.title}`;

    const demoArea = document.createElement("div");
    demoArea.className = "demo-area";
    demoArea.id = demoAreaId;
    demoArea.innerHTML = task.html;

    const codeBlock = document.createElement("div");
    codeBlock.className = "code-snip";
    let funcStr = task.solve.toString();
    if (funcStr.length > 280) funcStr = funcStr.slice(0, 260) + "... }";
    codeBlock.innerHTML = `<pre style="margin:0">Решение JS:\n${funcStr}</pre>`;

    cardDiv.appendChild(header);
    cardDiv.appendChild(demoArea);
    cardDiv.appendChild(codeBlock);
    container.appendChild(cardDiv);

    const solveWrapped = () => {
    };

    let customSolve;
    switch (idx) {
        case 0: customSolve = () => { const el = document.querySelector(`#${demoAreaId} #main-title`); if(el) el.textContent = "Новый заголовок страницы"; }; break;
        case 1: customSolve = () => { const p = document.querySelector(`#${demoAreaId} .description`); if(p) { p.style.color="blue"; p.style.fontSize="24px"; } }; break;
        case 2: customSolve = () => { const h = document.querySelector(`#${demoAreaId} h2`); if(h) h.textContent = "Обновленный раздел сайта"; }; break;
        case 3: customSolve = () => { const items = document.querySelectorAll(`#${demoAreaId} .item`); items.forEach(i => { i.style.color="green"; if(!i.textContent.includes("элемент")) i.textContent += " элемент"; }); }; break;
        case 4: customSolve = () => { const msgDiv = document.querySelector(`#${demoAreaId} #message`); if(msgDiv) msgDiv.innerHTML = "<b>Внимание</b>: данные обновлены"; }; break;
        case 5: customSolve = () => { const img = document.querySelector(`#${demoAreaId} #photo`); if(img) { img.src="new.jpg"; img.alt="Новое изображение"; } }; break;
        case 6: customSolve = () => { const box = document.querySelector(`#${demoAreaId} #box`); if(box) { box.classList.add("active"); box.classList.remove("card"); } }; break;
        case 7: customSolve = () => { const inp = document.querySelector(`#${demoAreaId} #username`); if(inp) inp.value = "Новое имя пользователя"; }; break;
        case 8: customSolve = () => { const ban = document.querySelector(`#${demoAreaId} #banner`); if(ban) ban.style.display = "none"; }; break;
        case 9: customSolve = () => {
            const titleEl = document.querySelector(`#${demoAreaId} .product-title`);
            const priceEl = document.querySelector(`#${demoAreaId} .product-price`);
            const imgEl = document.querySelector(`#${demoAreaId} #product-image`);
            const cardEl = document.querySelector(`#${demoAreaId} #card`);
            if(titleEl) titleEl.textContent = "Ноутбук Lenovo";
            if(priceEl) { priceEl.textContent = "75000 рублей"; priceEl.style.color = "red"; }
            if(imgEl) imgEl.src = "lenovo.png";
            if(cardEl) cardEl.classList.add("highlight");
        }; break;
        case 10: customSolve = () => {
            const infoDiv = document.querySelector(`#${demoAreaId} #info`);
            if(infoDiv) {
                infoDiv.textContent = "Информация обновлена";
                infoDiv.style.color = "white";
                infoDiv.style.backgroundColor = "darkblue";
                infoDiv.style.padding = "10px";
            }
        }; break;
        case 11: customSolve = () => {
            const notes = document.querySelectorAll(`#${demoAreaId} .note`);
            notes.forEach((p, i) => { const orig = p.textContent.replace(/^\d+\.\s*/, ''); p.textContent = `${i+1}. ${orig}`; });
        }; break;
        case 12: customSolve = () => {
            const itemsLi = document.querySelectorAll(`#${demoAreaId} #menu li`);
            itemsLi.forEach(li => { if(!li.textContent.includes("✓")) li.textContent += " ✓"; li.style.color = "purple"; });
        }; break;
        case 13: customSolve = () => {
            const hs = document.querySelectorAll(`#${demoAreaId} .h2-group`);
            hs.forEach((h, idxH) => { h.textContent = `Обновленный раздел №${idxH+1}`; });
        }; break;
        case 14: customSolve = () => {
            const link = document.querySelector(`#${demoAreaId} #site-link`);
            if(link) { link.textContent = "Перейти на новый сайт"; link.href = "https://newsite.com"; }
        }; break;
        case 15: customSolve = () => {
            const ava = document.querySelector(`#${demoAreaId} #avatar`);
            if(ava) { ava.src = "user2.png"; ava.alt = "Пользователь 2"; ava.style.width = "200px"; }
        }; break;
        case 16: customSolve = () => {
            const contentDiv = document.querySelector(`#${demoAreaId} #content`);
            if(contentDiv) contentDiv.innerHTML = `<h3>Новый блок</h3><p>Это новый текст внутри блока</p>`;
        }; break;
        case 17: customSolve = () => {
            const priceCells = document.querySelectorAll(`#${demoAreaId} .price`);
            priceCells.forEach(td => { if(!td.textContent.includes("рублей")) td.textContent += " рублей"; td.style.fontWeight = "bold"; });
        }; break;
        case 18: customSolve = () => {
            const emailInp = document.querySelector(`#${demoAreaId} #email`);
            if(emailInp) emailInp.placeholder = "Введите ваш email";
        }; break;
        case 19: customSolve = () => {
            const cardsSel = document.querySelectorAll(`#${demoAreaId} .card`);
            cardsSel.forEach(c => c.classList.add("selected"));
        }; break;
        case 20: customSolve = () => {
            const activeItems = document.querySelectorAll(`#${demoAreaId} .item`);
            activeItems.forEach(it => it.classList.remove("active"));
        }; break;
        case 21: customSolve = () => {
            const button = document.querySelector(`#${demoAreaId} #submit-btn`);
            if(button) { button.textContent = "Сохранить данные"; button.style.backgroundColor = "green"; button.style.color = "white"; button.style.padding = "6px 12px"; button.style.borderRadius = "8px"; button.style.border = "none"; }
        }; break;
        case 22: customSolve = () => {
            const oldP = document.querySelector(`#${demoAreaId} .old-text`);
            if(oldP && !oldP.textContent.includes("обновлен")) oldP.textContent += " который был обновлен";
        }; break;
        case 23: customSolve = () => {
            const containerCard = document.querySelector(`#${demoAreaId}`);
            if(containerCard) {
                const titleT = containerCard.querySelector(".title");
                const priceT = containerCard.querySelector(".price");
                const stockT = containerCard.querySelector(".stock");
                const imgT = containerCard.querySelector("#product-photo");
                const btnT = containerCard.querySelector(".buy-btn");
                const parentCard = containerCard.querySelector("#product-card");
                if(titleT) titleT.textContent = "Смартфон Samsung Galaxy";
                if(priceT) priceT.textContent = "59990 рублей";
                if(stockT) { stockT.textContent = "В наличии"; stockT.style.color = "green"; }
                if(imgT) imgT.src = "samsung.jpg";
                if(btnT) btnT.textContent = "Добавить в корзину";
                if(parentCard) parentCard.classList.add("featured");
            }
        }; break;
        default: customSolve = () => {};
    }
    if (customSolve) customSolve();
});

const styleTag = document.createElement('style');
styleTag.textContent = `
    .active { background-color: #e0f2fe; border-left: 4px solid #0284c7; }
    .highlight { background: #fef9e3; border-radius: 12px; padding: 4px; transition: 0.1s; }
    .selected { background-color: #d9f99d; border-radius: 8px; padding: 0 4px; }
    .price { font-weight: normal; }
`;
document.head.appendChild(styleTag);

setTimeout(() => {
    const firstTitle = document.querySelector("#demo-task-1 #main-title");
    if(firstTitle && firstTitle.textContent === "Старый заголовок") firstTitle.textContent = "Новый заголовок страницы";
}, 10);