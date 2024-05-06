import Shop from './src/Shop.js'
import { createCardItem } from './src/app/cart.js';
import { createProduct } from './src/app/product.js';
import { products } from './src/js/core/data.js';
import './style.css'
import 'flowbite'


const shop = new Shop;
shop.init();
// console.log(createCardItem(products[0],2));