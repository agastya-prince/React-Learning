import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
 // let counter = 1 5

  const addValue = () => {
  //  counter++
    setCounter(counter + 1)
    console.log("clicked", counter)
  }
  const removeValue = () => {
    //  counter--
      if (counter > 0)
        counter--
      setCounter(counter)
      console.log("clicked", counter)
    }

  return (
    <>
      <h1>anda with agastya</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick = {addValue}>Add value {counter}</button>
      <br />
      <button
      onClick = {removeValue}>Remove Value {counter} </button>
    </>
  )
}

export default App
