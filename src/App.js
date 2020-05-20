import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Project from './Components/Project';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Welcome to Pananart's Profile
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/ptechasa?tab=repositories"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Coming Soon!!
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My Skills</h1>
      <hr />
      <Project />
      <hr />
      <Portfolio />
      <hr />
      <h1 id="contactnav" className="contact">Contact Information</h1>
      <hr />
      <Contact />

    </div>
  );
}

export default App;
