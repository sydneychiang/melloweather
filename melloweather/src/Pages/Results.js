import '../css/NavBar.css';
import '../css/Results.css';
import React, {Component} from "react";
import NavBar from '../Components/NavBar.js';
import {motion} from 'framer-motion'
import locationPointer from '../imgs/locationPointer.svg';
import { makeStyles } from '@material-ui/core/styles';

class Results extends Component {
    constructor(props){
      super(props);
      this.state = {};
    } 
     componentDidMount (){
        var navbar = document.getElementById("nav");
        navbar.style.color = "white";
    }
    render(){
    return (
        <motion.div className="resultsPanel" exit={{opacity: 0}}>
        {/* <NavBar /> */}
        <div id="location">
            <img id="locationPointer" src={locationPointer} alt=""/>
            Irvine, California
        </div>
        <div className="locationInfo">
            <span id="temp" className="locationDetails">77ºF</span> | 
            <span id="weatherType" className="locationDetails">Cloudy</span> | 
            <span id="time" className="locationDetails">11:59PM</span>
          </div>



          <div id="dashboard">
              <div id="embed"><iframe src="https://open.spotify.com/embed/playlist/4Ii5x4abUlfm8dCdZXvjYJ" width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe></div>

              <div id="blurb">Based on this location's weather,
              here is a playlist tailored for you to match the atmosphere.</div>
          </div>
        
      </motion.div>
  
  
  
  
    );
    }
  }

  
  export default Results;
  