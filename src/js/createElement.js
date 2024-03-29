import {view} from "./router.js";
export function createElement(arr) {
    arr.forEach(function (item) {
        let card = document.createElement("div");
        card.classList.add("goods__item");
        card.innerHTML = `
                        <img class="goods__img" src="${item.url}" alt="phone">
                        <div class="goods__colors">Доступно цветов: 4</div>
                        <div class="goods__title">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                        <div class="goods__price">
                            <span >${item.price}</span>
                        </div>
                        <button class="goods__btn">Добавить в корзину</button>`;
        view.appendChild(card);
    });
    toLocal( "list");
}
export function toLocal(text){
    let list = view.innerHTML;
    localStorage.setItem(text, list);
}
