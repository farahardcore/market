import {customRouter} from ".js/router.js";
import {loadContent} from ".js/contentLoader.js";
import {renderCatalog} from ".js/renderCatalog.js";
import { addProduct, badge } from "./js/addProduct.js";



customRouter();
renderCatalog();
if(localStorage.getItem("badge")){
    badge.textContent = localStorage.getItem("badge")
}
loadContent("../db.json");
addProduct();

