import { products } from "../js/core/data.js";
import { productGroup, productTemplate } from "../js/core/selectors.js"

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true)
    template.querySelector(".product-card").setAttribute("product-id",product.id)
    template.querySelector(".product-img").src = product.image ;
    template.querySelector(".product-title").innerText =  product.title;
    template.querySelector(".product-description").innerText =  product.description;
    template.querySelector(".product-rating").innerText =  `${product.rating.rate} / ${product.rating.count}`;
    template.querySelector(".product-price").innerText =  product.price;

    return template;
}

export const renderProduct = (products) => {
    productGroup.innerHTML = "";
    products.forEach((el) => productGroup.append(createProduct(el)))
}

export const handleProductGroup = (e) => {
    if(e.target.classList.contains("product-add-cart-btn")){
        const currentProductCard = e.target.closest(".product-card");
        const currentProductId = parseInt(currentProductCard.getAttribute("product-id"));
        const currentProduct = products.find((el) => el.id===currentProductId);
        console.log(currentProduct);
    }
}