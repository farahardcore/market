import { view, innerCart } from "./router.js";
import { Cart, badgeLoader } from "./basket.js";
import { toLocal } from "./createElement.js";

export const badge = document.getElementById("nav__badge");
export function addProduct(){
    view.addEventListener("click", function(e){
        e.preventDefault();
        let target = e.target;
        if(target.innerHTML == "Добавить в корзину"){
            target = target.parentNode;
            let cost = target.querySelector("span")
            let phoneTitle = target.querySelector(".goods__title");
            let image = target.querySelector("img");
            image = image.attributes[1].value;
            let obj = {
                title : phoneTitle.innerHTML,
                price : cost.innerHTML,
                img : image
            };
            Cart.addProduct(obj);
            Cart.counter();
        }
        let cartBtn = document.getElementById("nav__cart-img");
        cartBtn.addEventListener("click",()=>{
            if(localStorage.getItem("cart")){
                Cart.drawInCart();
            }else{
                Cart.drawInCart();
                toLocal("cart");
            }
        })
        if(target.innerHTML == "Очистить корзину"){
               Cart.clearBasket();
        }else if(target.innerHTML == "Оформить заказ"){
            Cart.confirm();
            Cart.sendData();
        }
        console.log(Cart.products);

    })
}


