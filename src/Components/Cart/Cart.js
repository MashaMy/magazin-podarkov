import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import images from './icon-shopping.png'


const Cart = () => {

const cartItems = useSelector(getCartItems);
const totalPrice = useSelector(getTotalPrice);


    return (<div> 
        
                <img className="cartIcon" src= {images} alt="fotoc"/> 
        
        <h3> Общая сумма: {totalPrice} ₽ </h3>

        {cartItems.map(cartItems => <CartItem cartItems = {cartItems}/>)}
        </div>)
}

export default Cart;