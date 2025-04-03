import AddToCart from './AddToCart'
import { useState } from "react";

function ProductDetail({ product }) {
    const [qty, setQty] = useState(product.stock > 0 ? 1 : 0);
    const totalPrice = product.price * qty; // 計算總金額

    // // 處理數量變更
    // const handleQuantityChange = (e) => {
    //     const value = e.target.value;
    //     if (value >= 1 && value <= 30) {
    //         setQty(value);
    //     }
    // };

    // const increaseQuantity = () => {
    //     if (qty < 30) {
    //         setQty(qty + 1);
    //     }
    // };

    // const decreaseQuantity = () => {
    //     if (qty > 1) {
    //         setQty(qty - 1);
    //     }
    // };

    return (
        <>
            <div data-theme="luxury" className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
                {/* 左側：產品圖片（佔6/24） */}
                <div className="lg:col-span-6 lg:col-start-3">
                    <img
                        alt={product.title}
                        className="w-full h-96 object-cover object-center rounded-md"
                        src={product.cover}
                    />
                </div>

                {/* 右側：產品資訊（佔14/24） */}
                <div className="lg:col-span-14 px-4">
                    <h1 className="text-base text-current text-2xl font-bold mb-2">{product.title}</h1>
                    <h2 className="text-base text-current opacity-80 mb-1 text-lg">{product.author}</h2>
                    <p className="text-base text-current opacity-60 text-sm mb-4">{product.summary}</p>

                    {/* 價格與按鈕 */}
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-semibold">US${product.price}.00</p>
                        <p>
                            <span className="font-bold" >Status</span>: {product.stock > 0 ? "In Stock" : "Unavailable."}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="font-bold" >Qty:</span>
                            <select
                                className="select select-bordered w-20"
                                value={qty} // 使用 state 來確保同步
                                onChange={(event) => setQty(Number(event.target.value))}
                            >
                                {[...Array(product.stock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                        {x + 1}
                                    </option>
                                ))}
                            </select>


                        </div>
                        <p>
                            <span className="font-bold">Total Price</span>: {product.price * qty}
                        </p>
                        <AddToCart product={product} qty={qty} />
                    </div>
                </div>
            </div>
            {/* 🆕 新增 Reviews 區塊 */}
            <div className="mt-8 ml-8">
                <h3 className="text-white text-xl font-bold mb-4">Reviews</h3>
                <div className="space-y-4">
                    {product.reviews && product.reviews.length > 0 ? (
                        product.reviews.map((review, index) => (
                            <div key={index} className="border border-gray-600 p-4 rounded-lg">
                                <h4 className="text-blue-400 font-semibold">{review.reviewer}</h4>
                                <p className="text-gray-400">⭐ {review.rating}/5</p>
                                <p className="text-base text-current">{review.comment}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
