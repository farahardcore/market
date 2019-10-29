
import {customRouter, view} from "./router.js";
import {loadContent} from "./contentLoader.js";
import { renderCatalog } from "./renderCatalog.js";
import { Cart } from "./basket.js";


customRouter();
renderCatalog("../db.json");
loadContent("../db.json");
console.log(Cart);



// view.addEventListener("click", function(e){
//     let target = e.target;
//     let el = this.querySelector("goods__btn");
//     console.log(target);
//     if(target ){
//         target = target.parentNode;
//         console.log(target);
//     };
// })