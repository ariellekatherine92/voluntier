import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Testamonies from "./components/Testamonies";
import Opportunities from './components/Opportunities'


ReactDOM.render(
  <React.StrictMode>
   <App />
   <Navbar />
   <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
