import {loadContent} from "./contentLoader.js";


export function renderCatalog(){
    let catalogBtn = document.getElementById("catalogBtn");
    catalogBtn.addEventListener("click", ()=>{
        getItem();
    })
}
function getItem(){
    if(localStorage.getItem("list")){
        view.innerHTML = localStorage.getItem("list");
    }
}
let el = document.querySelectorAll("button");
console.log(el);