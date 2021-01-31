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
        <motion.div className="resultsPanel" initial = {{opacity: 0}}
          animate = {{opacity: 1}}
          transition = {{ duration: 1.5}}
          exit= {{opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}
        >
        {/* <NavBar /> */}
        <motion.div id="location" initial = {{y:"-100vw"}}
            animate = {{opacity: 1, y:"0"}} 
            transition = {{ duration: 1.5}}
            exit= {{y: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}
            >
            <img id="locationPointer" src={locationPointer} alt=""/>
            Irvine, California
        </motion.div>
        <motion.div className="locationInfo" initial = {{y:"-100vw"}}
            animate = {{opacity: 1, y:"0"}} 
            transition = {{ duration: 1.5}}
            exit= {{y: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}
            >
            <span id="temp" className="locationDetails">77ºF</span> | 
            <span id="weatherType" className="locationDetails">{this.props.status}</span> | 
            <span id="time" className="locationDetails">11:59PM</span>
          </motion.div>



          <motion.div id="dashboard" >
            <motion.div id="embed" initial = {{x:"-100vw"}}
          animate = {{opacity: 1, x:"0"}} 
          transition = {{ duration: 1.5}}
          exit= {{x: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}>
              <iframe src="https://open.spotify.com/embed/playlist/4Ii5x4abUlfm8dCdZXvjYJ" width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </motion.div>

            <motion.div id="blurb" initial = {{x:"100vw"}}
            animate = {{opacity: 1, x:"0"}} 
            transition = {{ duration: 1.5}}
            exit= {{x: '100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}
          > Based on this location's weather,
              here is a playlist tailored for you to match the atmosphere.</motion.div>
            </motion.div>
        
      </motion.div>
  
  
  
  
    );
    }
  }

  
  export default Results;
  