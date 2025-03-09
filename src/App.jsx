import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router'
import PageNotFound from './Pages/PageNotFound'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import Home from './Pages/Home'
import Intertainment from './Pages/Intertainment'
import Sports from './Pages/Sports'
import Business from './Pages/Business'
import Politics from './Pages/Politics'
import State from './Pages/State'
import International from './Pages/International'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <Router>
      <Navbar />
    <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
     <Route path='/' element={<PrivateRoute />} >
     <Route path='/' element={<Home />} />
      <Route path='/intertainment' element={<Intertainment />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/business' element={<Business />} />
      <Route path='/politics' element={<Politics />} />
      <Route path='/state' element={<State />} />
      <Route path='/international' element={<International />} />
     </Route>
    </Routes>
    </Router>
  )
}

export default App
