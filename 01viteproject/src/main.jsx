import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function CustomApp() {
  return (
    <div>
      <h1>Making first Custom App </h1>
    </div>
  )
}
const username= "harsh rana"
const reactElement = React.createElement('a', { href: 'https://www.google.com', target: '_blank' }, 'visit google through reactElement',' ',username)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement,<App/>
)  
