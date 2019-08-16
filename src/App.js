import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/commons/NavBar';
import HomePage from './components/home/HomePage';
import AboutPage from './components/home/AboutPage';
import CarsPage from './components/cars/CarsPage';
class App extends Component {
 render() {
   return (
     <div className="container">
     <Navbar />
       <Route exact path="/" component={HomePage} />
       <Route path="/cars" component={CarsPage} />
       <Route path="/about" component={AboutPage} />
     </div>
   );
 }
}
export default App;