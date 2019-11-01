import { view, innerCart} from "./router.js";
import { badge,} from "./addProduct.js";
import { getItem } from "./renderCatalog.js";
import { toLocal } from "./createElement.js";

// import { drawInCart } from "./drawInCart.js";
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
            if (this.products != {}) {
                let cartBtn = document.getElementById("nav__cart-img");
                let out = "";
                let elem = document.createElement("div");
                elem.classList.add("cart__body");
                cartBtn.addEventListener("click", function (e) {
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
                    toLocal("cart");
                }, {onse : true})
            }
        }
        this.clearBasket = function () {
            Cart.products = [];
            view.innerHTML = innerCart;
            badge.textContent = 0;
        }
        this.removeOne = function(){
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
                }
                toLocal("cart");
            })
        }
        this.counter = function () {
            for(let i = 0;i < Cart.products.length; i++){
                badge.textContent = i+1;
                if(Cart.products == []){
                    badge.textContent = 0;
                }
            }
        }
        this.confirm = function(){
            let div = document.createElement("div");
            let form = document.createElement ("form");
            form.classList.add("confirm__form");
            form.innerHTML = `
            <input type="text" placeholder="Введите ваше имя">
            
            <input type="text" placeholder="Введите ваш телефон">
            <div>Cумма вашего заказа:<span id="span">0</span></div>
            <input id="submit" type="submit" value="Подтвердить">`
            div.appendChild(form);
            console.log(document.body.firstChild);
            view.innerHTML = div.innerHTML;
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



