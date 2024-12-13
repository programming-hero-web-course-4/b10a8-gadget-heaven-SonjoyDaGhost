import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFromLs } from "../Utility/addToCart";
import ProductForDashBoard from "./ProductForDashBoard";


const WishList = () => {
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false);
    const shouldRender = () => {
        setRender(!render);
    }
    
    const data = useLoaderData();
    useEffect(() => {
        const productIdFromCart = getFromLs('wishList');
        const productsInCart = data.filter(product => productIdFromCart.includes(product.product_id));
        setProducts(productsInCart);

    }, [data, render])




    return (
         <div>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-black font-bold text-xl">Wish List</h2>
                </div>
                <div className="flex items-center gap-3 mb-10">
                    <h3 className="text-black font-bold text-xl">
                        {/* Total: {totalPriceToPay} */}
                    </h3>
                    <div className="flex gap-3">
                        
                    </div>
                </div>
            </div>
            <div className='space-y-4'>
                {
                    products.map(product => <ProductForDashBoard key={product.product_id} product={product} shouldRender={shouldRender}></ProductForDashBoard>)
                }
            </div>
        </div>
    );
};

export default WishList;