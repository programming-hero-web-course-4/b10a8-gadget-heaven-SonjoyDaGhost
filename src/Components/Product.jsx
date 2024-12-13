import { Link } from "react-router-dom";


const Product = (product) => {
    // console.log(product);

    const { category, price, product_id, product_image, product_title, rating } = product.product;
    // console.log(product_title);
    return (
        <div>
            <div className="card card-compact bg-base-100 w-[322px] shadow-xl ">
                <figure >
                    <img
                        className="h-[200px]"
                        src={product_image}
                        alt={product_title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-start">
                        <Link className="btn btn-primary" to={`/productDetail/${product_id}`}>

                            <button >View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;