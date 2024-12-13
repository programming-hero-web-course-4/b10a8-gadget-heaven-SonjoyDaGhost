import { toast } from "react-toastify";

const getFromLs = (key)=>{
    const cartStr = localStorage.getItem(`${key}`);
    if(cartStr){
        const cart = JSON.parse(cartStr);
        return cart;
    }
    else{
        return [];
    }

}
const addToCart = (id)=>{
    const storedCart = getFromLs('cart');
    if(storedCart.includes(id)){
        toast('Already exists');
        return;
    }
    else{
        storedCart.push(id);
        const cartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart', cartStr);
        toast('Added to cart', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
            
            
    }
}
const addToWish = (id)=>{
    const wishList = getFromLs('wishList');
    if(wishList.includes(id)){
        toast('Already exists');
        return;
    }
    else{
        wishList.push(id);
        const wishListStr = JSON.stringify(wishList);
        localStorage.setItem('wishList', wishListStr);
        toast('Added to WishList', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            
            });
            
            
    }

    
}
const removeFromCart =(id)=> {
    const storedCart = getFromLs('cart');
    const newCart = storedCart.filter(x=> x!==id);
    const newCartStr = JSON.stringify(newCart);
    localStorage.setItem('cart', newCartStr);
}
const removeFromWish = (id)=>{
    const storedWish = getFromLs('wishList');
    const newWish = storedWish.filter(x=> x!==id);
    const newWishStr = JSON.stringify(newWish);
    localStorage.setItem('wishList', newWishStr);
}
export{
    addToCart, getFromLs, removeFromCart, addToWish, removeFromWish
}