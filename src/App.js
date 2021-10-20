
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Partner from './components/Partner/Partner';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DisplayService from './components/Services/DisplayService/DisplayService';
import GetService from './components/GetService/GetService';

function App() {
  return (
    <div className="App">


      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route path='/banner'>
              <Banner></Banner>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/displayservice'>
              <DisplayService></DisplayService>
            </PrivateRoute>
            <Route path='/partners'>
              <Partner></Partner>
            </Route>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/logout'>
              <Logout></Logout>
            </Route>
            <PrivateRoute path="/getService/:serviceId">
              <GetService></GetService>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
