import { cardItemTemplate } from "../js/core/selectors"

export const createCardItem = (product,quantity) => {
    const template = cardItemTemplate.content.cloneNode(true);
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-quantity").innerText = quantity;

    return template;
}
