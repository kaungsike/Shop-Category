import { productGroup, productTemplate } from "../js/core/selectors.js"

export const createProduct = (product) => {
    const template = productTemplate.content.cloneNode(true)
    template.querySelector(".product-img").src = product.image ;
    template.querySelector(".product-title").innerText =  product.title;
    template.querySelector(".product-description").innerText =  product.description;
    template.querySelector(".product-rating").innerText =  `${product.rating.rate} / ${product.rating.count}`;
    template.querySelector(".product-price").innerText =  product.price;

    return template;
}

export const renderProduct = (products) => {
    products.forEach((el) => productGroup.append(createProduct(el)))
}