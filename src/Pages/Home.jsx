import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Heading from "../Components/Heading";
import banner from '../assets/banner.jpg';
import { HashLink } from "react-router-hash-link";
import Categories from "../Components/Categories";
import { Helmet } from "react-helmet-async";
const Home = () => {

    const categories = useLoaderData();
    // console.log(categories);
    return (
        <>
            <Helmet>
                <title>GadgetHeaven | Home</title>
            </Helmet>
            <div className="bg-[#9538E2] h-[500px] rounded-b-lg mb-[350px] ">
                <div className='text-white pt-20 lg:w-[50%] mx-auto flex flex-col'>

                    <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading>
                    <HashLink smooth to={'#shop'} className="w-min mx-auto">

                        <button className="w-20 mx-auto btn btn-primary">Shop</button>
                    </HashLink>
                </div>
                <img src={banner} className="w-[50%] mx-auto rounded-2xl border-t-8 border-x-8  border-purple-300 mt-2" alt="" />
            </div>
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
            <div id="shop" className="grid md:grid-cols-4">
                <div>
                    {
                        categories.map(category => <Categories key={category.category_id} categorys={category}></Categories>)
                    }
                </div>
                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>


        </>



    );
};

export default Home;