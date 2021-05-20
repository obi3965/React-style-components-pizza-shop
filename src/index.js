import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
// import PropagateLoader from 'react-spinners/PropagateLoader'
// import { css } from "@emotion/react";


 



ReactDOM.render(
  <React.Fragment>
    <App />

 <Routes/> 
 
 
    
  </React.Fragment>,
  document.getElementById('root')
);


reportWebVitals();
