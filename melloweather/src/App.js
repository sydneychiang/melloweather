import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useLocation } from 'react-router-dom';

import Home from "./Pages/Home";
import CurrentLocation from "./Pages/CurrentLocation";
import PageNotFound from "./Pages/PageNotFound";
import EnterLocation from "./Pages/EnterLocation";
import SurpriseMe from "./Pages/SurpriseMe";
import Results from "./Pages/Results";
import NavBar from './Components/NavBar';
import { AnimatePresence } from 'framer-motion'

function App() {
    const location = useLocation();
    return (
      <>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
      {/* <Router> */}
        <Switch location= {location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/userLocation" component={CurrentLocation} />
          <Route exact path="/enterLocation" component={EnterLocation} />
          <Route exact path="/surpriseMe" component={SurpriseMe} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/PageNotFound" component={PageNotFound} />
          <Redirect to="/PageNotFound"/>
        </Switch>
      {/* </Router> */}

      </AnimatePresence>
      </>
    )
  }

export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }