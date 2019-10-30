// import { drawInCart } from "./drawInCart.js";

class Basket {
    constructor() {
        this.products = [],
            this.productCounter = 0,
            this.addProduct = function (item) {
                let cart = document.getElementsByClassName("empty");
                cart = cart.innerHTML;
                this.products.push(item);
                // console.log(this.products);

            }
        this.drawInCart = function () {
            if (this.products != []) {
                this.products.forEach(function (element) {
                    console.log(Cart.products);
                    let cartBtn = document.getElementById("nav__cart-img");
                    console.log(cartBtn);
                    cartBtn.addEventListener("click", function(){
                        console.log(element);
                            view.innerHTML = `<div class="cart__body">
                    <div class="cart__title">Корзина</div>
                    <div class="cart__total">Общая сумма: <span>ЧИСЛО</span> руб</div>
                   <hr>
                    <div class="cart__items">                          <div class="cart__item">
                            <div class="goods__img">                                 <img class="img" src=${element.img}>
                            </div>
                            <div class="goods__price">
                               ${element.price}
                               <span class="goods__title">${element.title}</span>
                                 <button class="triger">Удалить из корзины</button>
                            </div>
                        </div>
                   </div>
                      <button class="cart__delete">Очистить корзину</button>
                      <button class="cart__confirm">Оформить заказ</button>
                  </div>`
                    })
                })
            }
        }
        this.clearBasket = function () {
            this.products = [];
        }
        this.counter = function () {
            for (let i = 0; i <= this.products.length; i++) {
                let badge = document.querySelector(".nav__badge");
                badge.innerHTML = i++
            }
        }
    }
}

export let Cart = new Basket();

