import React from 'react'
import './Styles/Home.css'
// import './script'
import {Link} from 'react-router-dom';
import logo from './logo.png'


export default function Home() {
  return (
    <>
    {/* <nav>
            <Link to="/" id="logo">NMCG X CHACHA CHAUDHARY</Link>
            <div className="cntrnav">
                <Link  className="you" to="/">Home</Link>
                <Link className="you" to="/">Mascot</Link>
                <Link  className="you" to="/Chatbot">Chatbot</Link>
                <Link  className="you" to="/">Reference</Link>
            </div>
    </nav> */}

 <nav className='navigationBar'>
  <img id='logo' src={logo} alt=""/>
  
 

       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         {/* <li>
           <Link to="/">Mascot</Link>
         </li> */}
         <li>
           <Link target='_blank' to="http://localhost:3000/Chatbot?#">Chatbot</Link>
         </li>
         <li>
           <Link target='_blank' to="https://nmcg.nic.in/NamamiGanga.aspx">Reference</Link>
         </li>
       </ul>
 </nav>

</>
  )
}
