import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './Component/Header';
import Display from './Component/display';
import Counter from './Component/Counter';
import Controls from './Component/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './Component/PrivacyMassage';

function App() {
  const [count, setCount] = useState(0)
  const privacy = useSelector((store)=> store.privacy);

  return (
  
      
      <center className="px-4 py-5 my-5 text-center">
        <Counter>
      <Header></Header>
    <div className="col-lg-6 mx-auto">
      {privacy ? <PrivacyMessage/> : <Display/>}
      <Controls></Controls>
    </div>
    </Counter>
  </center>
      
    
  )
}

export default App
