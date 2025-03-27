import AddToCart from './AddToCart'

function ProductDetail({ product }) {
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
                <h1 className="text-white text-2xl font-bold mb-2">{product.title}</h1>
                <h2 className="text-white opacity-40 mb-1 text-lg">{product.author}</h2>
                <p className="text-white opacity-60 text-base mb-4">{product.summary}</p>

                {/* 價格與按鈕 */}
                <div className="flex flex-col gap-4">
                    <p className="text-sky-400 text-2xl font-semibold">US${product.price}.00</p>
                    <AddToCart />
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
                                   <h4 className="text-yellow-400 font-semibold">{review.name}</h4>
                                   <p className="text-gray-400">⭐ {review.rating}/5</p>
                                   <p className="text-white opacity-70">{review.comment}</p>
                               </div>
                           ))
                       ) : (
                           <p className="text-gray-500">No reviews yet.</p>
                       )}
                   </div>
                   </div>
        </>
    )
}
export default ProductDetail