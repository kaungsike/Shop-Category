import Swal from "sweetalert2";
import { products } from "../js/core/data.js";
import {
  cardItemGroup,
  categoryGroup,
  productGroup,
  productTemplate,
} from "../js/core/selectors.js";
import { cartCostTotal, createCardItem, updateCartItemNumber } from "./cart.js";

export const createProduct = (product) => {
  const template = productTemplate.content.cloneNode(true);
  template
    .querySelector(".product-card")
    .setAttribute("product-id", product.id);
  template.querySelector(".product-img").src = product.image;
  template.querySelector(".product-title").innerText = product.title;
  template.querySelector(".product-description").innerText =
    product.description;
  template.querySelector(
    ".product-rating"
  ).innerText = `${product.rating.rate} / ${product.rating.count}`;
  template.querySelector(".product-price").innerText = product.price;

  template.querySelector(".product-star").innerHTML = renderStar(product.rating.rate)

  return template;
};

export const renderProduct = (products) => {
  productGroup.innerHTML = "";
  products.forEach((el) => productGroup.append(createProduct(el)));
};

export const handleProductGroup = (e) => {
  if (e.target.classList.contains("product-add-cart-btn")) {
    const currentProductCard = e.target.closest(".product-card");
    e.target.setAttribute("disabled",true);
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
        e.target.innerText = "Added"
      }
    });
    Toast.fire({
      icon: "success",
      title: "Item Added Successful!"
    });

    const currentProductId = parseInt(
    currentProductCard.getAttribute("product-id")
    );
    const currentProduct = products.find((el) => el.id === currentProductId);
    cardItemGroup.append(createCardItem(currentProduct, 1));
    updateCartItemNumber()
    cartCostTotal()
  }
};


export const renderStar = (rate) => {
    let stars = "";

    for (let i = 0; i < 5; i++) {
      stars += `                <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4 ${ i< Math.round(rate) ? `fill-gray-700` : `fill-gray-400`}">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd" />
        </svg>`;
      }

      return stars;
} 