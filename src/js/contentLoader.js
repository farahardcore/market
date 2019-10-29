import {createElement} from "./createElement.js";

export async function loadContent(url) {
    await fetch(url)
        .then(response => response.json())
        .then(json => createElement(json.goods));

}