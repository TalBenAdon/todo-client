import React from 'react'
import { Route, Routes } from 'react-router'
import User from './pages/User'

export default function App() {
  return (
    <Routes>

      <Route index element={<User />} />

    </Routes>
  )
}
