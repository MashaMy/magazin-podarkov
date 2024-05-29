import dishesData from "../../data/dataDishes";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({cartItems}) => {


const dishes = dishesData.find(item => item.id === cartItems.dishId)
const dispatch = useDispatch();

    return (<div> 
        <p>{dishes.name}</p>
       <p>{cartItems.quantity} позиций </p> 
       <p>Цена: {dishes.price * cartItems.quantity} ₽ </p>
       <span onClick={() => dispatch(removeItemFromCart({cartItemsId: cartItems.id}))}>
       <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="del"/> 
       </span>
        </div>)
}

export default CartItem;