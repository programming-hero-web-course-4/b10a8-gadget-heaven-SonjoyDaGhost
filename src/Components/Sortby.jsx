import { useState } from "react";


const Sortby = ({ products, setProducts, shouldRender }) => {
    const sortType = (type) => {
        if (type === 'Price') {

            const sorted = [...products].sort((a, b) => b.price - a.price);
            setProducts(sorted);
            // console.log(sorted);
        }
    }



    return (

        <button className="btn" onClick={() => sortType('Price')}>
            Sort by Price
            {/* <a onClick={() => sortType('Price')}>Price </a> */}
        </button>





    );
};

export default Sortby;