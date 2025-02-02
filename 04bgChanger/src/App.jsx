import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className='w-full h-screen duration-200 flex justify-center' style={{ backgroundColor: color }}> Hello
    <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-2 rounded-3xl'>
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'green'}}>green</button>
        <button onClick={() => setColor("lightblue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'lightblue'}}>lightblue</button>
        <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'purple'}}>purple</button>
        <button onClick={() => setColor("indigo")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'indigo'}}>indigo</button>
        <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'yellow'}}>yellow</button>
        <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:'orange'}}>orange</button>
      </div>
    </div>
  </div>
  )
}

export default App
