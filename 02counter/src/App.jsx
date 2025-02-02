import { useState } from 'react'
import './App.css'

function App() {
  //to update ui if that variable is coming inside the web
  let [counter,setCounter] = useState(0)

  const addValue = () => {
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const decValue = () => {
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>Learning React Js With Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={decValue}>Decrease value {counter}</button>
    </>
  )
}

export default App
