import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartItems } from "../redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

function AddToCart({ product, qty }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const addToCart = () => {
        setShowToast(true); // 顯示 toast
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            image: product.cover,
            price: product.price,
            countInStock: product.stock,
            qty:qty,
        }))
        // 2 秒後自動關閉 toast
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    };
    console.log("AddToCart props:", product, qty);


    return (
        <>
            <button className="text-sky-400 btn btn-primary px-8 py-5 hover:bg-blue-800 hover:text-white" onClick={addToCart}>
                <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
                <span className="font-thin ml-3">ADD TO Cart</span>
            </button>
            {showToast && (
                <div className="toast toast-end">
                    <div className="alert">
                        <span>
                            {qty} {qty > 1 ? "pieces" : "piece"} of {product.name} {qty > 1 ? "have" : "has"} been added to your cart.
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}
export default AddToCart