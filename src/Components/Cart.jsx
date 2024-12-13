import { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { getFromLs } from '../Utility/addToCart';
import ProductForDashBoard from './ProductForDashBoard';
import Sortby from './Sortby';
import Swal from 'sweetalert2';

const Cart = () => {
    const navigate = useNavigate();
    // const {pathname} = useLocation();
    // console.log(pathname);
    const [products, setProducts] = useState([]);
    const [render, setRender] = useState(false);
    const shouldRender = () => {
        setRender(!render);
    }
    // console.log(render);
    const data = useLoaderData();
    useEffect(() => {
        const productIdFromCart = getFromLs('cart');
        const productsInCart = data.filter(product => productIdFromCart.includes(product.product_id));
        setProducts(productsInCart);

    }, [data, render])
    const totalPrice = products.reduce((acc, currentValue) => acc + currentValue.price, 0);
    let totalPriceToPay = totalPrice.toFixed(2);

    const handlePurchase = () => {
        if (products.length>0) {
            Swal.fire({
                title: "Payment Successfully",
                text: `Thanks for purchasing. Total:${totalPriceToPay}`,
                icon: "success"
            }).then((result) => {
                if (result.isConfirmed) {
                    setProducts([]);
                    localStorage.removeItem('cart');
                    totalPriceToPay = 0;
                    navigate('/');
                }
            });
        }
        else{
            Swal.fire({
                title: "No item is added",
                text: `Add item to cart`,
                icon: "error"
            })
        }
       


    }







    return (
        <div>
            <div className="flex justify-between">
                <div>
                    <h2 className="text-black font-bold text-xl">Cart</h2>
                </div>
                <div className="flex items-center gap-3">
                    <h3 className="text-black font-bold text-xl">
                        Total: {totalPriceToPay}
                    </h3>
                    <div className="flex gap-3">
                        <button className="">
                            <Sortby products={products} setProducts={setProducts} shouldRender={shouldRender}></Sortby>
                            {/* Sort by: { } */}
                        </button>
                        <button className="btn" onClick={handlePurchase}>
                            Purchase
                        </button>
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

export default Cart;