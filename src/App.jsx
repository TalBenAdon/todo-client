import React from 'react'
import { Route, Routes } from 'react-router'
import UserLayout from './components/UserLayout'
export default function App() {
  return (
    <Routes>
      <Route index element={<UserLayout />} />

    </Routes>
  )
}
