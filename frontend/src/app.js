import { ToastContainer } from 'react-toastify'
import SignIn from './components/authentication/SignIn/SignIn'

import SignUp from './components/authentication/SignUp/SignUp'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'

import Products from './components/Products/Products'

import './app.css'
import ScrollToTop from './utils/ScrollToTop'
import ProductDetails from './components/ProductDetails/ProductDetails'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={LandingPage} />
            <Route path='/register' exact component={SignUp} />
            <Route path='/login' exact component={SignIn} />
            <Route path='/categories' exact component={Products} />
            <Route path='/product/:prodid' exact component={ProductDetails} />
          </Switch>
          <ToastContainer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
