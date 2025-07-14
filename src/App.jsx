import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import YourRecentPhotos from './pages/YourRecentPhotos'
import MainMenu from './pages/MainMenu'
import Frame1 from './pages/border/Frame1'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/yourrecentphotos' element={<YourRecentPhotos />} />
        <Route path='/frame1' element={<Frame1 />} />
      </Routes>
    </Router>
  )
}
