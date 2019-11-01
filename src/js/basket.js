import { view, innerCart} from "./router.js";
import { badge,} from "./addProduct.js";
import { toLocal } from "./createElement.js";
class Basket {
    constructor() {
        this.products = [],
            this.productCounter = 0,
            this.addProduct = function (item) {
            if(!this.products.includes(item)){
                this.products.push(item);
            }
            }
        this.drawInCart = function () {
            if (this.products != []) {
                let out = "";
                let elem = document.createElement("div");
                elem.classList.add("cart__body");
                Cart.products.forEach(function (element) {
                    out += `<div class="cart__items">
                                        <div class="cart__item">
                                            <div class="goods__img">
                                                <img class="img" src=${element.img}>
                                            </div>
                                            <div class="goods__price">
                                                <span class="price">${element.price}</span>
                                                <span class="goods__title">${element.title}</span>
                                                <button class="trigger">Удалить из корзины</button>
                                            </div>
                                        </div>
                                    </div>`
                    view.innerHTML = "";
                    view.appendChild(elem);
                })
                out += `<div class="cart__btns">
                        <button class="cart__confirm">Оформить заказ</button>
                        <button class="cart__delete">Очистить корзину</button>
                                </div>
                                `
                elem.innerHTML = out;
            } else {
                console.log("товар уже есть в корзине");
            }
        }
        this.clearBasket = function () {
            Cart.products = [];
            localStorage.removeItem("badge");
            badge.textContent = 0;
            localStorage.removeItem("cart");
            view.innerHTML = innerCart;
        }
        this.removeOne = function(){
            let view = document.getElementById("view");
            view.addEventListener("click", function(e){
                e.preventDefault();
                let target = e.target;
                if(target.innerHTML == "Удалить из корзины"){
                    target = target.parentNode;
                    target = target.parentNode;
                    target = target.parentNode;
                    let price = target.querySelector(".price");
                    Cart.products.pop();
                    target.classList.add("hidden");
                    badge.textContent = badge.textContent - 1;
                    if(badge.textContent == 0){
                        view.innerHTML = innerCart;
                    }
                   badgeLoader(badge)
                }
            })
        }
        this.counter = function () {
            for(let i = 0;i < Cart.products.length; i++){
                badge.textContent = i+1;
                badgeLoader(badge);
                if(Cart.products == []){
                    badge.textContent = 0;
                }
            }
            badgeLoader(badge);
        }
        this.confirm = function(){
            let div = document.createElement("div");
            let form = document.createElement ("form");
            form.classList.add("confirm__form");
            form.innerHTML = `
            <input id="name" type="text" placeholder="Введите ваше имя">
            <input id="phone" type="text" placeholder="+375XXXXXXXXX">
            <input id="submit" type="submit" value="Подтвердить">`
            div.appendChild(form);
            console.log(document.body.firstChild);
            view.innerHTML = div.innerHTML;
        }
        this.sendData =function(){
            sendData();
        }
        this.sum = function(){
            let span = view.querySelector("#span");
            if(this.products.length == 1){
                this.products.forEach(function(elem){
                    span.innerHTML = elem.price;
                })
            } else if(this.products.length >= 2){
               let result = this.products.reduce((a,b)=>a.price + b.price)
               console.log(result);
            }
        }
    }
}

export let Cart = new Basket();
Cart.removeOne();


function sendData() {
    let submit = view.querySelector("#submit");
    submit.addEventListener("click", function () {
        let name = view.querySelector("#name"),
            phone = view.querySelector("#phone"),
            regName = /[А-Я][а-я]+\s[А-Я][а-я]+/g,
            regPhone = /\+375\d{9}/g;
        if (regName.test(name.value)) {
            name = name.value;
            if (regPhone.test(phone.value)) {
                phone = phone.value;
                fetch("../cartDB.json")
                 .then(response=>response.json())
                 .then(data=>data.forEach(function(elem){
                     alert(elem);
                     Cart.clearBasket();
                     window.location.href = "http://127.0.0.1:5500";
                     view.innerHTML = innerCart;
                 }));
            } else {
                alert("Введите коректный номер телефона");
                console.log(name.parentNode)
            }
        } else {
            alert("Неправильно  введено имя");
            console.log(name.parentNode)
        }
    })
}
export function badgeLoader(str){
    str = badge.textContent;
    localStorage.setItem("badge", str);
}