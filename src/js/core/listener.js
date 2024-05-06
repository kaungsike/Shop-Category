import { handleCategoryGroup } from "../../app/category.js";
import { handleProductGroup } from "../../app/product.js";
import { categoryGroup, productGroup } from "./selectors.js";

const listener = () => {
    categoryGroup.addEventListener("click",handleCategoryGroup);
    productGroup.addEventListener("click",handleProductGroup)
}

export default listener;