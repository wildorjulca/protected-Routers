import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Admin, Analities, Dashboard, Home, Landing } from './pages/Index'
import './index.css'
import { ProtectedRoute } from './component/ProtectedRoute'
const App = () => {
  const [user, setuser] = useState(null)

  const login = () => {
    setuser({
      id: "1",
      name: "Jose"
    })

  }
  const logout = () => {
    setuser("")
  }

  return (
    <>
      <BrowserRouter>

        {user ? (
          <button onClick={logout}>LOGOUT</button>
        ) : (
          <button onClick={login}>LOGIN</button>
        )}
        <nav>
          <li>
            <ul>
              <p><NavLink className={(isActive) => { (isActive ? "activeNavlink" : "") }} to={"/"}>LANDING</NavLink>  </p>
              <p><NavLink className={(isActive) => { (isActive ? "activeNavlink" : "") }} to={"/home"}>HOME</NavLink></p>
              <p><NavLink className={(isActive) => { (isActive ? "activeNavlink" : "") }} to={"/dashboard"}>DASHBOARD</NavLink> </p>
              <p><NavLink className={(isActive) => { (isActive ? "activeNavlink" : "") }} to={"/analitiest"}>ANALITIES</NavLink> </p>
              <p><NavLink className={(isActive) => { (isActive ? "activeNavlink" : "") }} to={"/admin"}>ADMIN</NavLink>  </p>

            </ul>
          </li>
        </nav>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={
            <ProtectedRoute  user={user}>
            <Home />
            </ProtectedRoute>
          } />

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/analitiest' element={<Analities />} />
          <Route path='/admin' element={<Admin />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App