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
                out+= `<div class="cart__title">Корзина</div>
                <div class="cart__total">Общая сумма: <span id="price">1500</span> руб</div>`
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
            this.products = [];
            view.innerHTML = innerCart;
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
                    Cart.products.forEach(function(elem){
                        if(elem.price == price.innerHTML){
                         Cart.products.pop(elem)
                        }
                    })
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
    }
}

export let Cart = new Basket();
Cart.removeOne();


