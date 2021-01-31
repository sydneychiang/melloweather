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

function withMyHook(Component) {
  return function WrappedComponet(props) {
    const myHookValue = useLocation();
    return <Component{...props} myHookValue={myHookValue} />;
  }
}

class App extends Component{
    
  constructor(props) {
    super(props)
    this.state = {
      temp: "77",
      time: "00:00",
      playlist: "",
      status: "wet",
    }
    
  }

  handleCallback = (childData) => {
    console.log(childData)
    this.status = childData
    console.log(this.status)
  }

  render(){
  const location = this.props.myHookValue;
  return (
    <>
    <NavBar />
    <AnimatePresence exitBeforeEnter>
      <Switch location= {location} key={location.key}>
        <Route exact path="/"> <Home/> </Route>
        <Route exact path="/userLocation"> <CurrentLocation/> </Route>
        <Route exact path="/enterLocation"> <EnterLocation/> </Route>
        <Route exact path="/surpriseMe"> <SurpriseMe parentCallback = {this.handleCallback} /></Route>
        <Route exact path="/results"> 
          <Results userLocation={this.userLocation} temp={this.temp} time={this.time} playlist={this.playlist} status={this.status}/> 
        </Route>


        <Route exact path="/PageNotFound"> <PageNotFound/> </Route>
        <Redirect to="/PageNotFound"/>
      </Switch>

    </AnimatePresence>
    </>
  )
  }
}

export default withMyHook(App);




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