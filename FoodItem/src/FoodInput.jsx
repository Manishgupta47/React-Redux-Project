const FoodInput = ({props}) =>{
    
    
    return(
        <input type="text" placeholder="Enter food item here"  onChange={props.handleOnChange}/>
    )

    }

export default FoodInput;