import {
    createBrowserRouter,

} from "react-router-dom";

import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Products from "../Components/Products";
import ProductDetail from "../Pages/ProductDetail";
import DashBoard from "../Pages/DashBoard";
import Cart from "../Components/Cart";
import WishList from "../Components/WishList";
import Blogs from "../Components/Blogs";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('../categories.json'),
                children:[
                    {
                        path:'/',
                        element:<Products></Products>,
                        loader: ()=> fetch('../productData.json')
                    },
                    {
                        path:'/category/:catKey',
                        element:<Products></Products>,
                        loader: ()=> fetch('../productData.json')
                    },

                ]
            },
            {
                path:'/blogs',
                element: <Blogs></Blogs>,
                loader: ()=> fetch('../blogData.json')

            },
            {
                path:'/productDetail/:productId',
                element:<ProductDetail></ProductDetail>,
                loader: ()=> fetch('../productData.json')
            },
            {
                path:'/dashboard',
                element:<DashBoard></DashBoard>,
                children:[
                    {
                        path: '/dashboard/cart',
                        element: <Cart></Cart>,
                        loader: ()=> fetch('../productData.json')
                    },
                    {
                        path: '/dashboard',
                        element: <Cart></Cart>,
                        loader: ()=> fetch('../productData.json')
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <WishList></WishList>,
                        loader: ()=> fetch('../productData.json')
                    }

                ]
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
]);

export default router;