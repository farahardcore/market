import { view } from "./router.js";
import { Cart } from "./basket.js";


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
        }
        // console.log(Cart.products)
        Cart.drawInCart();
    })
}
