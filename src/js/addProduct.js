import { view } from "./router.js";
import { Cart } from "./basket.js";
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
            countBadge();
            toLocal("cart");
        }
        Cart.drawInCart();
    })
}
function countBadge(){
    for(let i = 0;i < Cart.products.length; i++){
        badge.textContent = i+1;
        console.log(badge.textContent);
        if(Cart.products == []){
            badge.textContent = 0;
        }
    }
}
export function getPrice(obj){
    let result = obj.price;
    console.log(result);
}