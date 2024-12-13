import Heading from "./Heading";


const Footer = () => {
    return (
        <div className="mt-10">


            <Heading  title={'Gadget Heaven'} subtitle={'Leading the way in cutting-edge technology and innovation.'}></Heading>
            <div className="divider"></div>
            <footer className="footer bg-neutral text-neutral-content p-10 ">
                <nav className="mx-auto">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="mx-auto">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="mx-auto">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;