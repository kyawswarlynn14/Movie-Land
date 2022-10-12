import { useState } from 'react'
import Main from './components/Main'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className='bg-gray-200 py-8'>
      <NavBar />
      <Main />
    </div>
  )
}

export default App
