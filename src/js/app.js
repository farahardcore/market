import {customRouter} from "./router.js";
import {loadContent} from "./contentLoader.js";
import {renderCatalog} from "./renderCatalog.js";
import { addProduct, badge } from "./addProduct.js";
import { Cart } from "./basket.js";



customRouter();
renderCatalog();
loadContent("../db.json");
if(localStorage.getItem("badge")){
    badge.textContent = localStorage.getItem("badge")
}
addProduct();

