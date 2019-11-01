import { view } from "./router.js";

export function renderCatalog(){
    let catalogBtn = document.getElementById("catalogBtn");
    catalogBtn.addEventListener("click", ()=>{
    view.innerHTML =  localStorage.getItem("list");
    })
}
