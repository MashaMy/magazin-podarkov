import { useState } from "react";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Dish = ({dish}) => {
const [quantity, setQuantity ] = useState(1);
const dispatch = useDispatch()


    return (<div>  
<div className="center"> 
        <img src={`./${dish.img}.jpg`} alt="foto"/>
        <h2> {dish.name} </h2>
        <p>{dish.price} ₽</p>
        <ChangeQuantity quantity={quantity} setQuantity = {setQuantity}/> 
        <button  onClick={() => {dispatch(addItemToCart({dish, quantity}))}} >Добавить в корзину</button>
        </div> 
        </div>)
}

export default Dish;







    


    