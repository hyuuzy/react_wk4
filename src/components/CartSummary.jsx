import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import BasketModal from "../components/BasketModal"
import { selectCartItems } from "../redux/cartSlice";

function CartSummary() {
   const [isOpen, setIsOpen] = useState(false);
   const cartItems = useSelector(selectCartItems);
   const count = (cartItems.length > 0) ?
      cartItems.reduce((sum, item) => sum + item.qty, 0)
      : 0;
   const toggleOpen = () => setIsOpen(!isOpen);
   console.log("Cart Items in Redux:", cartItems);

   return (
      <>
         <nav
            onClick={toggleOpen}
            className="inline-block right-2 md:right-6 cursor-pointer"
         >
            <div className="indicator">
               {count > 0 && <span className="indicator-item badge badge-primary text-white">{count}</span>}
               <ShoppingCart strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
            </div>
            <p className="hidden md:block text-xs opacity-60 mt-[-4px]"></p>
         </nav>
         <BasketModal
            isOpen={isOpen}
            toggleModal={toggleOpen}
         />
      </>

   );
}

export default CartSummary;