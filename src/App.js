import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  return (
    <div className="App">
      <LoadCounties></LoadCounties>
    </div>
  )
}

function LoadCounties() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Country Of The World!!</h1>
      <h3>Available Countries: {countries.length}</h3>
    </div>

  )
}

export default App
