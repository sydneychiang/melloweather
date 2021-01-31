import '../css/SurpriseMe.css';
import NavBar from '../Components/NavBar';
import countries from '../all-countries-and-cities-json/countries.json';
import React, {Component} from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Axios from 'axios';

class SurpriseMe extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  } 

  onTrigger = (event) => {
    this.props.parentCallback("Data from child");
    console.log("I TRIED TO SEND")
    event.preventDefault();
  }
   

  componentDidMount (){
    var lat = Math.random() * 180 - 90
    var long = Math.random() * 360 - 180
    console.log(lat, long)
    const url = "http://localhost:8080/getPlaylist?latitude=" + lat + "&longitude=" + long
    console.log(url)
    Axios.get(url).then(res => {
      const data = res.data;
      console.log(data)
    })
  }
  render(){
  return (
    <motion.div className="surpriseMePanel"
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition = {{ duration: 1}}
      exit= {{opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
    >
      <motion.div className="currentLocationText" initial = {{x:"-100vw"}}
      animate = {{opacity: 1, x:"0"}} 
      transition = {{ duration: 1}}
      exit= {{x: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
    >
        The Location is...
      </motion.div>
      <motion.div className="linkResults" initial = {{x:"-100vw"}}
      animate = {{opacity: 1, x:"0"}} 
      transition = {{ duration: 1}}
      exit= {{x: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
    >
        <button onClick={this.onTrigger}>Click Me First</button>
        <Link className="resultsBtn" to="/results">Generate Playlist! </Link>
        </motion.div>
    </motion.div>


  );
  }
}

export default SurpriseMe;
