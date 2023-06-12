import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState('');

  const showalert = (message,type)=>{
    setAlert({
      msg: message,
      type: type    
    })
    setTimeout(() => {
      setAlert('');
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#3E8EDE";
      showalert("Dark mode is enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light mode is enabled","success");
      showalert("Light mode is enabled","success");
    }
  }
  
  return (
    <> 
    <Router>
     <Navbar title="Text Analyzer" mode ={mode} toggleMode={toggleMode}/> 
     <Alert alert={alert}/>
     <div className="container my-3">
        <Routes> 
          <Route  path = "/about" element = {<About mode={mode}/>}/>            
          <Route path = "/" element = {<Textform showalert={showalert} heading="Enter the text to analyze" mode={mode} /> } />                 
        </Routes>
     </div>
    </Router>
    </>
  ); 
}

export default App;


