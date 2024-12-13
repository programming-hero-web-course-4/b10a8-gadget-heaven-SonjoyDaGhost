
import Heading from '../Components/Heading';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToCart, addToWish } from '../Utility/addToCart';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ProductDetail = () => {
    const addtoCart = (id) => {
        addToCart(id);
    }
    const[wishListFill, setWishListFill] = useState(false);
    const addToWishList = (id)=>{
        addToWish(id);
        
        setWishListFill(!wishListFill);
    }
    const { productId } = useParams();
    const allProducts = useLoaderData();
    const product = allProducts.find(product => product.product_id === productId);
    const { product_title, product_image, price, description, rating, category, availability, Specification
    } = product;
    // console.log(rating);
    return (
        
        <div className='relative mb-[700px]'>
            <Helmet> 
                <title>Product Details | {product_title}</title>
            </Helmet>
            <div className='absolute left-[50%] ml-[-50vw]  w-screen h-[300px] bg-[#9538E2] '>
                <div className='text-white mt-20 mb-6'>

                    <Heading className='' title={'Product Details'} twidth={'20%'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} swidth={'30%'}></Heading>
                </div>
                <div className='mb-90'>
                    <div className="card card-side w-1/2 mx-auto bg-base-100 shadow-xl">
                        <figure className='p-6 bg-red-300 '>
                            <img className='rounded-md'
                                src={product_image}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product_title}</h2>
                            <p className='font-bold'>Price: {price}</p>
                            <div className="badge badge-accent badge-outline">{availability ? 'In Stock' : 'Out of Stock'}</div>

                            <p>{description}</p>

                            <p className='text-black font-bold'>Specification:</p>
                            <ol className="list-decimal pl-6 space-y-2">
                                {Specification.map((item, index) => (

                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                            <div >
                                
                                <ReactStars
                                    count={5}
                                    value={rating}
                                    size={35}
                                    activeColor="#ffd700"
                                    edit={false} 
                                    isHalf={true}
                                />
                            </div>

                            <div className="card-actions justify-start flex items-center">
                                <button className="btn btn-primary" onClick={() => addtoCart(productId)}>Add to Cart</button>
                                <button onClick={()=>addToWishList(productId)} disabled={wishListFill} className='text-4xl'>
                                    {
                                        wishListFill? <span  className='text-red-600'><FaHeart /></span>:<CiHeart />
                                    }
                                
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductDetail;