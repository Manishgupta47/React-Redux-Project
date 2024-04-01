const Item= ({foodItem, handleBySubmit}) =>{

   

    
    return(
        <li>
            <span>
                {foodItem}
            </span>
            <button onClick={handleBySubmit}>Buy</button>
        </li>
    );
};
export default Item;