import React from 'react'
import MainMenu from './pages/MainMenu'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SelectBorder from './pages/SelectBorder'
import Frame2 from './pages/border/Frame2'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />}/>
        <Route path='/selectborder' element={<SelectBorder />} />
        <Route path='/frame2' element={<Frame2 />} />

      </Routes>
    </Router>

  )
}
