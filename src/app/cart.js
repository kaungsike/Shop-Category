import Swal from "sweetalert2";
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
    totalCost.innerText = 0.00;
    const allProductPrice = document.querySelectorAll(".cart-item-price");
    const allProductCost = [...allProductPrice].reduce((pv,{innerText}) => pv+parseFloat(innerText),0);
    totalCost.innerText = (parseFloat(totalCost.innerText) + allProductCost).toFixed(2);
}

export const handleCartItemGroup = (e) => {
    if(e.target.classList.contains("cart-item-remove")){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#374151",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                e.target.closest(".cart-item").remove();
                updateCartItemNumber();
                cartCostTotal();
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "success",
                    title: "Removed successful!"
                  });
            }
          });
          
    }
}