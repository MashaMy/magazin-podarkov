import Cart from "./Components/Cart/Cart";
import Dishes from "./Components/DishesComponents/Dishes";
import AllCategories from "./Components/Filters/AllCategories";
import './index.css'


function App() {
  return (
     <div className="App">
       <div className="block ">
               <AllCategories/>
              <Cart/>
      </div>
       <div className="block">
      <Dishes/>
      </div>
    </div>
   
    );
}

export default App;

