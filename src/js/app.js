import {customRouter,view} from "./router.js";
import {loadContent} from "./contentLoader.js";
import {renderCatalog} from "./renderCatalog.js";
import {Cart} from "./basket.js"



customRouter();
renderCatalog();
loadContent("../db.json");

view.addEventListener("click", function(e){
    let target = e.target;
    if(target.innerHTML == "Добавить в корзину"){
        target = target.parentNode;
        Cart.addProduct(target);
    }
    // console.log(Cart);
})
