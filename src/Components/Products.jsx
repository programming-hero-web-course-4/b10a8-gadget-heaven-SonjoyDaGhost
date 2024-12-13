import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    const products = useLoaderData();
    const { catKey } = useParams();
    // console.log(catKey);
    let productToShow = [...products];


    if (catKey !== "All Product" && catKey !== undefined) {

        productToShow = products.filter(product => product.category === catKey);

    }

    // console.log(productToShow);
    return (
        <div className="grid md:grid-cols-3 gap-12">

            {
                productToShow.map(product => <Product key={product.product_id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;