import React from 'react'
import MainMenu from './pages/MainMenu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SelectBorder from './pages/SelectBorder'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />}/>
        <Route path='/selectborder' element={<SelectBorder />} />

      </Routes>
    </Router>

  )
}
