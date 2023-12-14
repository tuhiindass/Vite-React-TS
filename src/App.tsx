import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Buttom from "./components/Buttom";
import { useState } from "react";
import StateButtom from "./components/StateButtom";


function App(){
  let items = ["India", "USA", "Chaina", "Rusia", "Pakistan", "Nepal"];

  const handleSelectitem = (item: string )=> {
    console.log(item)

  }

  // const [alertVisible,setAlertVisibility] = useState(false)

   

  // return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectitem}/>
  return(
  <div>
   
  <StateButtom/>

  </div>);
  
}

export default App;