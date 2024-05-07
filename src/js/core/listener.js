import { handleCartItemGroup } from "../../app/cart.js";
import { handleCategoryGroup } from "../../app/category.js";
import { handleProductGroup } from "../../app/product.js";
import { cardItemGroup, categoryGroup, productGroup } from "./selectors.js";

const listener = () => {
    categoryGroup.addEventListener("click",handleCategoryGroup);
    productGroup.addEventListener("click",handleProductGroup);
    cardItemGroup.addEventListener("click",handleCartItemGroup);
}

export default listener;