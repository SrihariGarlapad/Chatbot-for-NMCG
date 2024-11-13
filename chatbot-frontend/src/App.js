import React from 'react';
import ChatComponent from './components/ChatComponent';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";



function App() {
    return (
        <>
        <Router>
        <Navbar/>

        <Routes>
          <React.Fragment>
            <Route  path="/Chatbot" element={<ChatComponent />}/>
          </React.Fragment>
          <React.Fragment>
            <Route path='/' element={<Home/>} />
          </React.Fragment>
        </Routes>
        </Router>
        </>
    );
}

export default App;