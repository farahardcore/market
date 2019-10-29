import { view } from "./router.js";

class Basket {
    constructor() {
        this.products = [],
            this.productCounter = 0,
            this.addProduct = function (item) {
                let cart = document.getElementsByClassName("empty");
                    cart.innerHTML = item;
                    this.products.push(item);
                    drawInCart();
                    console.log(Cart.products);
            }
        this.clearBasket = function () {
            this.products = [];
        }
        this.counter = function () {
            if (this.products.length > 0) {
                // this.productCounter = countItems();
            }
        }
    }
}
export let Cart = new Basket();

function drawInCart() {
    let cartBtn = document.getElementById("nav__cart-img");
    cartBtn.addEventListener("click", function () {
        if (Cart.products.length != 0) {
            for (let i = 0; i < Cart.products.length; i++) {
                view.innerHTML = `<div class="cart__body">
                <div class="cart__title">Корзина</div>
                <div class="cart__total">Общая сумма: <span>ЧИСЛО</span> руб</div>
                <hr>
                <div class="cart__items">
                    <div class="cart__item">
                        ${Cart.products[i].innerHTML}
                        <button class="triger">Удалить из корзины</button>
                     </div>
              </div>
                 <button class="cart__delete">Очистить корзину</button>
                 <button class="cart__confirm">Оформить заказ</button>
            </div>`
            }
        }
    })
}

