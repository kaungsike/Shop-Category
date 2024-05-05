import { categoryGroup, categoryTemplate } from "../js/core/selectors.js"

export const createCategory = (categoryName) => {
    const categoryTemplateClone = categoryTemplate.content.cloneNode(true);
    categoryTemplateClone.querySelector(".cat-btn").innerText = categoryName;

    return categoryTemplateClone;
}

export const renderCategory = (categories) => {
    categories.forEach((el) => categoryGroup.append(createCategory(el)));
}