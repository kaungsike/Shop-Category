import { cardItemGroup, cardItemTemplate, cartCount, cartItemCount, totalCost } from "../js/core/selectors"

export const createCardItem = (product,quantity) => {
    const template = cardItemTemplate.content.cloneNode(true);
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-quantity").innerText = quantity;

    return template;
}

export const countCartItem = () => {
    return cardItemGroup.querySelectorAll(".cart-item").length;
}

export const updateCartItemNumber = () => {
    cartCount.innerText = countCartItem()
    cartItemCount.innerText = countCartItem()
}

export const cartCostTotal = () => {
    const allProductPrice = document.querySelectorAll(".cart-item-price");
    const allProductCost = [...allProductPrice].reduce((pv,{innerText}) => pv+parseFloat(innerText),0);
    totalCost.innerText = (parseFloat(totalCost.innerText) + allProductCost).toFixed(2);
}