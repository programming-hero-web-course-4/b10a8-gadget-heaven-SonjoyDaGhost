import { NavLink, useLocation } from "react-router-dom";


import './Categories.css';

const Categories = ({ categorys }) => {
    const {pathname} = useLocation();
    

    const { category_id, category } = categorys;
    return (
        <div>
            <div className="w-min mx-auto">
                <NavLink className={`cat w-48 text-xl rounded-3xl btn mb-3 hover:bg-purple-500 active:bg-purple-400 ${pathname==='/' && category_id === 'C004'?'active': ''}`} to={`/category/${category}`}>
                    <button >{category}</button>
                </NavLink>

            </div>

        </div>
    );
};

export default Categories;