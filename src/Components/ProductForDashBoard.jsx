
import { TiDeleteOutline } from "react-icons/ti";
import { useLoaderData, useLocation } from 'react-router-dom';
import { removeFromCart, removeFromWish } from '../Utility/addToCart';
import { toast } from "react-toastify";

const ProductForDashBoard = ({ product, shouldRender }) => {
    const { pathname } = useLocation();
    // console.log(pathname);
    const removeItem = (id)=>{
        if (pathname === '/dashboard/cart') {
            
            removeFromCart(id);
        }
        else if (pathname === '/dashboard/wishlist'){
            removeFromWish(id);
        }
        shouldRender();
        toast('Item removed');

    }
    // console.log(product);
    const { product_title, product_image, price, description, product_id, category, availability, Specification
    } = product;
    return (
        <div>
            <div className="card card-side  mx-auto bg-base-100 shadow-xl">
                <figure className='p-6 w-1/6 bg-red-300 '>
                    <img className='rounded-md'
                        src={product_image}
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>


                    <p>{description}</p>
                    <p className='font-bold'>Price: {price}</p>





                    
                </div>
                <div className='m-4'>
                    <button className='text-4xl text-red-700 ' onClick={()=> removeItem(product_id)}>
                       

                        <TiDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductForDashBoard;