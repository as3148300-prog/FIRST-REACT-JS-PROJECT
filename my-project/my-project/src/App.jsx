import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Aggence from './pages/Aggence'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aggence' element={<Aggence/>}/>
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
