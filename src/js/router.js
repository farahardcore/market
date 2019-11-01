
import { renderCatalog } from "./renderCatalog.js";
import { badge } from "./addProduct.js";

export let view = document.getElementById("view");
export let innerCart = `
<div class="cart__wrapper">
    <div class="empty">
         Ваша корзина пока пуста
     </div>
</div>`
let innerNews = ` <div class="newss">
<div class="news__item">
    <span class="title">Xiaomi опубликовала характеристики камеры смартфона Xiaomi Mi Note 10 (aka CC9 Pro)</span>
    <img src="./img/news1.jpg" alt="news">
    <h6>На этот раз компания опубликовала спецификации камер устройства. Как и предполагалось ранее, основной модуль в смартфоне будет Samsung ISOCELL Bright HMX на 108 Мп, как у концептуального флагмана Xiaomi Mi Mix Alpha.
            Кроме него, аппарат также получит 5-мегапиксельный супер-телевик OmniVision OV08A10 с 5-кратным оптическим и 50-кратным цифровым зумом, 20-мегапиксельный ширик Sony IMX350, 12-мегапиксельный объектив для портретных фотографий Samsung S5K2L7 и 2-мегапиксельную камеру для макросъёмки. Основной модуль и телеобъектив будут поддерживать оптическую стабилизацию картинки.

            Напомним, Xiaomi Mi Note 10 (aka CC9 Pro) ещё оснастят AMOLED-дисплеем с каплевидным вырезом, игровым процессором Snapdragon 730G и аккумулятором на 5200 мАч с быстрой зарядкой на 30 Вт. Новинку в Китае покажут 5 ноября, а глобальная презентация смартфона пройдёт в Польше на неделю позже — 14 ноября.
    </h6>
</div>
<div class="news__item">
        <span class="title">Источник: модели iPhone 2020 года получат модем Snapdragon X55 5G и 5-нанометровый процессор</span>
        <img src="./img/aplenews2.jpg" alt="news">
        <h6>Компания Apple в этом году решила не выпускать смартфон с поддержкой сети пятого поколения, но вот в следующем году всё может изменится.
                Как сообщает японское издание Nikkei, ссылаясь сразу на нескольких источников, в 2020 году новые iPhone получат встроенный модем Qualcomm Snapdragon X55 5G. Кроме этого, устройства оснастят топовым чипсетом, построенным по 5-нанометровому техпроцессу. С большой долей вероятности, это будет SoC Apple A14 Bionic. Его производством займётся компания TSMC.
                
                Согласно предыдущим слухам, все три новинки ещё будут иметь OLED-дисплеи. Кроме этого, топовым версиям приписывают экран с частотой обновления картинки 120 Гц, как у ASUS Rog Phone 2 и основную камеру с четырьмя модулями.
                
                Напомним, Apple сейчас готовит к анонсу iPhone SE 2 с дизайном, как у iPhone 8 и экраном на 4.7 дюйма.</h6>
</div>
</div>`
let about = `<div class="aboutt">
<span>О магазине</span>
<div class="title">
        Мы рады приветствовать Вас в нашем интернет-магазине! У нас Вы можете выбрать заказать качественную технику по доступным ценам и в кратчайшие сроки ее получить!
        Мы строим свою работу на четырех главных принципах:
        <div class="list">Всё для клиента</div>
        <div  class="list">Мы идём в ногу со временем</div>
        <div  class="list">Предлагаем лучшую цену</div>
        <div  class="list">Самая быстрая доставка</div>
        Мы ценим Ваше время, Ваш выбор и дорожим каждым своим клиентом. Поэтому будьте уверены, приобретая у нас товар, вы полностью можете довериться нам! Мы сделаем все возможное — в случае если у Вас возникнут вопросы, связанные с гарантией, ремонтом, мы обещаем не оставить Вас в беде!
        <div class="contacts">
            <a href="https://vk.com/id403874683">Vk</a>
            <a href="https://www.linkedin.com/in/farid-mohammad-7b375117a/">LinkedIn</a>
            <span class="text">Или пишите нам на почту </span>
            <span class="mail">farahardcore161@gmail.com</span>
        </div>
</div>
</div>
<div><img class="back" src="./img/main.png" alt=""></div>`
export function customRouter() {
    let activeRoutes = Array.from(document.querySelectorAll("[route]"));

    function navigate(event) {
        let route = event.target.attributes[0].value;
        let routeInfo = myRouter.routes.filter((r) => {
            return r.path === route;
        })[0];
        if (!routeInfo) {
            window.history.pushState({}, "", "404");
            view.innerHTML = `No route exists with this path  `
        }
        else if(routeInfo.path == "/") {
            window.history.pushState({}, "", routeInfo.path);
            if(localStorage.getItem("badge")){
                badge.textContent = localStorage.getItem("badge");
                view.innerHTML = renderCatalog();
            }
        }else if(routeInfo.path == "/news"){
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = innerNews;
        }else if(routeInfo.path == "/about"){
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = about;
        }else if(routeInfo.path == "/cart"){
            window.history.pushState({}, "", routeInfo.path);
            view.innerHTML = innerCart;
            if(localStorage.getItem("cart")){
                    view.innerHTML = localStorage.getItem("cart");
                }else{
                    view.innerHTML = innerCart;
                }
                if(localStorage.getItem("badge")){
                    badge.textContent = localStorage.getItem("badge");
                }
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
