import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () =>{
    const disPatched = useDispatch();
    const inputElement = useRef();

    const handleIncrement = () =>{
        disPatched({type: 'INCREMENT'});

    };

    const handleDecrement = () =>{
        disPatched({type: 'DECREMENT'})
        
    }
    const handlePrivacy = () =>{
        disPatched({type: 'PRIVACY_TOGGLE'})
        
    }
    
    const handleAdd = () =>{
        disPatched({
            type: 'ADD',
            payload: {
                num: inputElement.current.value,

            },
        });
        inputElement.current.value= "";
        
    };
    const handleSubtract = () =>{
        disPatched({
            type: 'SUBTRACT',
            payload: {
                num: inputElement.current.value,

            },
        });
        inputElement.current.value= "";
        
    };
    return(
        <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <button type="button" class="btn btn-primary" onClick={handleIncrement}>+1</button>
<button type="button" class="btn btn-success" onClick={handleDecrement}>-1</button>
<button type="button" class="btn btn-warning" onClick={handlePrivacy}>Privecy-Toggle</button>
      </div>
       <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
       <input type="text" class="btn btn-primary" placeholder="Enter name" className="number-input" ref={inputElement}/>
<button type="button" class="btn btn-info" onClick={handleAdd}>Add</button>
<button type="button" class="btn btn-danger" onClick={handleSubtract}>Subtract</button>
      </div>
      </>

    )
};
export default Controls;