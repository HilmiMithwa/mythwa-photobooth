import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import YourRecentPhotos from './pages/YourRecentPhotos'
import MainMenu from './pages/MainMenu'
import Frame1 from './pages/border/Frame1'
import AppRoutes from './routes/route'


export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>

  )
}
