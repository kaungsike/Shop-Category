import Swal from "sweetalert2";
import { cartCostTotal, updateCartItemNumber } from "../../app/cart";
import { productGroup } from "./selectors";

export const cartRemoveFunction = (e) => {
    const currentCart = e.target.closest(".cart-item");
    const currentCartId = currentCart.getAttribute("product-id");
    const currentProduct = productGroup.querySelector(`[product-id='${currentCartId}']`);
    const currentProductBtn = currentProduct.querySelector(".product-add-cart-btn");
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#374151",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            e.target.closest(".cart-item").remove();
            updateCartItemNumber();
            cartCostTotal();
            const Toast = Swal.mixin({
                toast: true,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                  currentProductBtn.removeAttribute("disabled");
                  currentProductBtn.innerText = "Att to cart";
                }
              });
              Toast.fire({
                icon: "success",
                title: "Removed item successful!"
              });
        }
      });
}