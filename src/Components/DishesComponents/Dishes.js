import dishesData from "../../data/dataDishes";
import Dish from "./Dish";
import { useSelector } from 'react-redux'
import { getSelectedCategory } from '../../redux/dishesSlice';



const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (<div>  
        
        {dishesData
        .filter(dish => {
            if (selectedCategory === 'ВСЕ ТОВАРЫ')return true;
            return selectedCategory === dish.category;
        }
        )
        .map(dish => <Dish dish = {dish}/>)}
        
        </div>)
}

export default Dishes;






