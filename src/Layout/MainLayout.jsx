import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const MainLayout = () => {
    return (

        <div className="container mx-auto">
            <HelmetProvider>
                {/* navbar */}
                <Navbar></Navbar>
                {/* layout */}

                {/* <div className="min-h-[calc(100vh-350px)]"> */}

                <Outlet ></Outlet>
                {/* </div> */}

                {/* footer */}
                <Footer></Footer>
                <ToastContainer></ToastContainer>
            </HelmetProvider>

        </div>
    );
};

export default MainLayout;