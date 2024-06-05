import Filters from "./Filters";

const AllCategories = () => {
    return (<div>
        <h1 className="center">ШАРЫ И ИГРУШКИ</h1> 

        {['ШАРЫ НА ПОТОЛОК', 'ШАРЫ НАПОЛЬНЫЕ', 'ШАР ИЗ КОРОБКИ', 'ИГРУШКА 100 см', 'ПАРНЫЕ ИГРУШКИ', 'МЯГКИЕ ЗВЕРИ', 'ВСЕ ТОВАРЫ']
        .map(category => <Filters key = {category.id} category = {category}/>
        )}
        
        </div>)
}

export default AllCategories;
