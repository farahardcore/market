


export function renderCatalog(){
    let catalogBtn = document.getElementById("catalogBtn");
    catalogBtn.addEventListener("click", ()=>{
        getItem("list");
    })
}
 export function getItem(data){
    if(localStorage.getItem(data)){
        view.innerHTML = localStorage.getItem(data);
    }
}