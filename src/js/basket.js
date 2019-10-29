class Basket {
    constructor(productCounter) {
        this.products = [],
            this.productCounter = 0,
            this.addProduct = function (item) {
                let cart = document.getElementsByClassName("empty");
                cart.innerHTML = item;
                this.products.push(item);
            }
        this.clearBasket = function () {
            this.products = [];
        }
        this.counter = function () {
            if (this.products.length > 0) {
                this.productCounter = this.products.length - 1;
            }
        }
    }
}
export let Cart = new Basket();