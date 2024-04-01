import Item from "./Item";
const FoodItems= ({items}) =>{
    return(
        <ul>
            {FoodItems.map((item)=>(<Item key={item} foodItem={item}></Item>))}
        </ul>
    )
};
export default FoodItems;