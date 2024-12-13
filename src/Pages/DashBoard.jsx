import { NavLink, Outlet, useLocation } from "react-router-dom";
import Heading from "../Components/Heading";
import  './DashBoard.css'
import { getFromLs } from "../Utility/addToCart";
import { Helmet } from "react-helmet-async";


const DashBoard = () => {
   
    const {pathname} = useLocation();
    
    
    return (
        <div>
            <Helmet>
                <title>GadgetHeaven | Dashboard</title>
            </Helmet>

            <div className='relative mb-[50px]'>
                <div>
                    <div className='relative left-[50%] ml-[-50vw]  w-screen h-[200px] bg-[#9538E2]'>
                        <div className='text-white mb-6 relative top-8'>

                            <Heading className='' title={'Product Details'} twidth={'20%'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'} swidth={'30%'}></Heading>
                            <div className="mx-auto w-min flex items-center gap-3 top-3 relative">
                                <NavLink className={`${pathname==='/dashboard'?'active': ''} dashboard w-36 text-xl rounded-3xl btn mb-3 bg-purple-500 hover:bg-purple-500 active:bg-purple-400`} to={'/dashboard/cart'}>

                                    <button >cart</button>
                                </NavLink>
                                <NavLink className={`dashboard w-48 text-xl rounded-3xl btn mb-3 bg-purple-500 hover:bg-purple-500 active:bg-purple-400`} to={'/dashboard/wishlist'}>

                                    <button >Wishlist</button>
                                </NavLink>
                            </div>
                        </div>

                    </div>




                </div>
            </div>
            <div>
                <Outlet>

                </Outlet>
            </div>
            
        </div>

    );
};

export default DashBoard;