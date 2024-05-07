import Swal from "sweetalert2";
import { cardItemGroup, cardItemTemplate, cartCount, cartItemCount, totalCost } from "../js/core/selectors"
import { cartRemoveFunction } from "../js/core/functions";

export const createCardItem = (product,quantity) => {
    const template = cardItemTemplate.content.cloneNode(true);
    template.querySelector(".cart-item-img").src = product.image;
    template.querySelector(".cart-item-title").innerText = product.title;
    template.querySelector(".cart-item-price").innerText = product.price;
    template.querySelector(".cart-item-cost").innerText = product.price*quantity;
    template.querySelector(".cart-item-quantity").innerText = quantity;
    template.querySelector(".cart-item").setAttribute("product-id",product.id)

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
    totalCost.innerText = 0.00;
    const allProductPrice = document.querySelectorAll(".cart-item-cost");
    const allProductCost = [...allProductPrice].reduce((pv,{innerText}) => pv+parseFloat(innerText),0);
    totalCost.innerText = (parseFloat(totalCost.innerText) + allProductCost).toFixed(2);
}

export const handleCartItemGroup = (e) => {
    if(e.target.classList.contains("cart-item-remove")){
          cartRemoveFunction(e)
    }
    else if(e.target.classList.contains("cart-q-add")){
        console.log("U add");
        const currentCart = e.target.closest(".cart-item");
        const currentCost = currentCart.querySelector(".cart-item-cost");
        const price = currentCart.querySelector(".cart-item-price");
        const currentQuantity = currentCart.querySelector(".cart-item-quantity");

        currentQuantity.innerText = parseInt(currentQuantity.innerText) + 1;
        currentCost.innerText = (price.innerText*currentQuantity.innerText).toFixed(2);
        cartCostTotal();
    }
    else if(e.target.classList.contains("cart-q-sub")){
        console.log("U sub");
        const currentCart = e.target.closest(".cart-item");
        const currentCost = currentCart.querySelector(".cart-item-cost");
        const price = currentCart.querySelector(".cart-item-price");
        const currentQuantity = currentCart.querySelector(".cart-item-quantity");

        if(currentQuantity.innerText>1){
            currentQuantity.innerText = parseInt(currentQuantity.innerText) - 1;
        }
        else{
            cartRemoveFunction(e)
        }

        currentCost.innerText = (price.innerText*currentQuantity.innerText).toFixed(2);
    }
    cartCostTotal();
}