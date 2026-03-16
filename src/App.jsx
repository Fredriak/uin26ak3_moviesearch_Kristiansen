//Koden er skrevet med delvis hjelp av chatgpt https://chatgpt.com/share/69b7d228-6e58-8008-85db-14b9c0d22a58
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movie" element={<Movie />} />
    </Routes>
  )
}

export default App