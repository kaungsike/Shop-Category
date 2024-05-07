import { products } from "../js/core/data.js";
import { categoryGroup, categoryTemplate } from "../js/core/selectors.js"
import { renderProduct } from "./product.js";

export const createCategory = (categoryName) => {
    const categoryTemplateClone = categoryTemplate.content.cloneNode(true);
    categoryTemplateClone.querySelector(".cat-btn").innerText = categoryName;

    return categoryTemplateClone;
}

export const renderCategory = (categories) => {
    categories.forEach((el) => categoryGroup.append(createCategory(el)));
}

export const handleCategoryGroup = (e) => {
    if(e.target.classList.contains("cat-btn")){
        const currentCategoryBtn = e.target;

        document.querySelector(".cat-btn.active")?.classList.remove("active")

        currentCategoryBtn.classList.add("active")
        const currentCategory = e.target.innerText;
        if(currentCategory==="All"){
            renderProduct(products)
        }
        else{
            renderProduct(products.filter((el) => el.category===currentCategory))
        }
    }
}