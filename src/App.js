import React from "react"
import './App.css';
import Header from './Header';
import Home from './Home';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="app">
        {/* Header */}
        <Header />
        <Routes>

          <Route path="/" 
          element={
            <>
            <Home />
            
            </>
          } />


          <Route path="/checkout" 
          element={
            <h1>I AM A CHECKOUT</h1>
          } />
        </Routes>
        
        </div>
    </Router>
    
  );
}

export default App;
