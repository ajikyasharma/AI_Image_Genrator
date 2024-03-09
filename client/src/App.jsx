import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return <>
  <Header />
  <div className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
  <Outlet />
  </div>
  
  
  </>
}

export default App