export let view = document.getElementById("view");
export function customRouter() {
    let activeRoutes = Array.from(document.querySelectorAll("[route]"));

    function navigate(event) {
        let route = event.target.attributes[0].value;
        let routeInfo = myRouter.routes.filter((r) => {
            return r.path === route;
        })[0];
        console.log(route);
        if (!routeInfo) {
            window.history.pushState({}, "", "404");
            view.innerHTML = `No route exists with this path  `
        } else {
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = `${routeInfo.description} `;
        }
    };

    activeRoutes.forEach((route) => {
        route.addEventListener("click", navigate, false);
    });
    console.log(activeRoutes);

    function Router(name, routes) {
        return {
            name: name,
            routes: routes
        }
    };

    let myRouter = new Router("router", [{
            path: "/",
            description: ""
        },
        {
            path: "/news",
            description: "Свежие новости из мира современных смартфонов"
        },
        {
            path: "/about",
            description: "Информация о нашем магазине"
        },
        {
            path: "/cart",
            description: `<div class="cart__body">
                <div class="cart__title">Корзина</div>
                <div class="cart__total">Общая сумма: <span>0</span> руб</div>
                <hr>
                <div class="cart__wrapper">
                    <div class="empty">
                        Ваша корзина пока пуста
                    </div>
                </div>
                <button class="cart__confirm">Оформить заказ</button>
            </div>`
        }

    ]);
    let currentPath = window.location.pathname;
    if (currentPath === "/src/") {
        view.innerHTML = "You are on the root page"
    } else {
        let route = myRouter.routes.filter((r) => {
            return r.path === currentPath;
        })[0];
        if (route) {
            view.innerHTML = ` ${route.description}`;
        } else {
            view.innerHTML = "404!"
        }
    }
}
