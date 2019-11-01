
import { renderCatalog } from "./renderCatalog.js";

export let view = document.getElementById("view");
export let innerCart = `<div class="cart__body">
<div class="cart__wrapper">
    <div class="empty">
         Ваша корзина пока пуста
     </div>
</div>
</div>`
export function customRouter() {
    let activeRoutes = Array.from(document.querySelectorAll("[route]"));

    function navigate(event) {
        let route = event.target.attributes[0].value;
        let routeInfo = myRouter.routes.filter((r) => {
            return r.path === route;
        })[0];
        // console.log(route);
        // console.log(routeInfo);
        if (!routeInfo) {
            window.history.pushState({}, "", "404");
            view.innerHTML = `No route exists with this path  `
        }
        else if(routeInfo.path == "/") {
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = renderCatalog();
        }else if(routeInfo.path == "/news"){
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = `News`
        }else if(routeInfo.path == "/about"){
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = `About`
        }else if(routeInfo.path == "/cart"){
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = innerCart;
        }
    };

    activeRoutes.forEach((route) => {
        route.addEventListener("click", navigate, false);
    });
    function Router(name, routes) {
        return {
            name: name,
            routes: routes
        }
    };

    let myRouter = new Router("router", [{
            path: "/"
        },
        {
            path: "/news"
        },
        {
            path: "/about"
        },
        {
            path: "/cart"
        }

    ]);
}
