
import './App.css'
import Container from './Container'
import FoodInput from './FoodInput'
import FoodItems from './FoodItems'
import Item from './Item'

function App() { 
  let foodItems = ["sabzi", "salad", "mulii", "roti", "milk", "ghee"] 

  let textToShow = "Filled Item by users"

  const handleOnChange= (event) =>{
    console.log(event.target.value)
    textToShow= event.target.value;

  }
 

  return (
    <>
    <Container>
     <h1>Healthy Food</h1>
     <FoodItems items = {foodItems}></FoodItems>
     <FoodInput handleOnChange={handleOnChange}></FoodInput>
     <p>{textToShow}</p>
    </Container>
    <Container>
      <p>
        Abone is the list of healthey food that are good htmlfor your health and well Being
      </p>
    </Container>
    </>


  )
}

export default App
