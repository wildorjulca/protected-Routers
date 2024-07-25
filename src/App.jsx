import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home, Landing } from './pages/Index'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index={<Landing />} />
      <Route  path='/home' element ={<Home />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App