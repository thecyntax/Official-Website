import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './components/Home'
import Project from './components/sections/Project/Project'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </div>
  )
}

export default App