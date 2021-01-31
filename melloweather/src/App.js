import React, {Component, useState } from "react";
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

function App({ data, sendDataToParent}){
    
  var location = useLocation();
  var [user, setUser] = React.useState({Temp:'',Time:'',Playlist:'',userLocation:'',Temp:'',});

  function changeStatusInfo(e) {
    setUser({...user, [e.target.name]:e.target.value})
  }
  
  return (
    <>
    <NavBar />
    <AnimatePresence exitBeforeEnter>
      <Switch location= {location} key={location.key}>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/userLocation"> <CurrentLocation/> </Route>
        <Route exact path="/enterLocation"> <EnterLocation/> </Route>
        <Route exact path="/surpriseMe"> <SurpriseMe/></Route>
        <Route exact path="/results"> 
          <Results userLocation={user.UserLocation} temp={user.Temp} time={user.Time} playlist={user.Playlist} status={user.Status}/> 
        </Route>


        <Route exact path="/PageNotFound"> <PageNotFound/> </Route>
        <Redirect to="/PageNotFound"/>
      </Switch>

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