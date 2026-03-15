import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App