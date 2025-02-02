import './App.css'
import Card from './components/card.jsx'
function App() {
  return (
    <>
      <h1 className='bg-green-700 text-white m-4 p-4 rounded-xl'>Tailwind CSS</h1>
      <Card username='harsh rana' add=''/>
      <Card username='' add='React series'/>
      <Card username='harsh rana' add='React series'/>
    </>
  )
}

export default App
