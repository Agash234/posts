import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './component/Header';
import Home from './home';
import About from './About';
import Footer from './component/Footer';
import Postdetails from './component/postdetails';
import './index.css'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path ="/posts/:id" element={<Postdetails/>}/>
        </Routes>
        <Footer/>

      </div>
    </Router>
  );
};

export default App;