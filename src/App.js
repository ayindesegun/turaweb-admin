import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import New from './pages/new/New'
import Single from './pages/single/Single'
import { productInputs, userInputs } from './formSource'
import './style/dark.scss'
import { useContext } from 'react'
import { DarkModeContext } from './context/darkModeContext'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Orders from './pages/orders/Orders'
//import Orders from './pages/orders/Orders'
import { AuthContext } from './context/AuthContext'
import Product from './pages/productList/Product'
import NewUsers from './pages/newUsers/NewUsers'

const App = () => {
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />
  }
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route
              path='product'
              element={
                <RequireAuth>
                  <Product />
                </RequireAuth>
              }
            />

            <Route
              path='orders'
              element={
                <RequireAuth>
                  <Orders />
                </RequireAuth>
              }
            />

            <Route
              path='users/single'
              element={
                <RequireAuth>
                  <NewUsers />
                </RequireAuth>
              }
            />
            <Route path='users'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=':userId'
                element={
                  <RequireAuth>
                    <Single inputs={userInputs} />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title='Add New User' />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path='products'>
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=':productId'
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path='new'
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title='Add New Product' />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
