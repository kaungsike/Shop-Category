import { countCartItem } from "./app/cart.js";
import initialRender from "./js/core/initialRender.js";
import listener from "./js/core/listener.js";

class Shop{
    init(){
        console.log("Shop App Start!");
        initialRender();
        listener();
        countCartItem()
    }
}

export default Shop