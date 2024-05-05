import { handleCategoryGroup } from "../../app/category.js";
import { categoryGroup } from "./selectors.js";

const listener = () => {
    categoryGroup.addEventListener("click",handleCategoryGroup)
}

export default listener;