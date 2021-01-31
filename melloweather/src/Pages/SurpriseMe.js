import '../css/SurpriseMe.css';
import NavBar from '../Components/NavBar';
import countries from '../all-countries-and-cities-json/countries.json';
import React, {Component} from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SurpriseMe extends Component {
  constructor(props){
    super(props);
    this.state = {};
  } 
   componentDidMount (){
    var navbar = document.getElementById("nav");
    navbar.style.color = "black";
    var keys = Object.keys(countries)
    var ran_key = keys[Math.floor(Math.random() * keys.length)]
    console.log(ran_key)
    var cities = countries[ran_key]
    var city = cities[Math.floor(Math.random() * cities.length)]
    console.log(city, ran_key)

    var lat = Math.random() * 180 - 90
    var long = Math.random() * 360 - 180
    console.log(lat, long)
  }
  render(){
  return (
    <motion.div className="surpriseMePanel"
      initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition = {{ duration: 1.5}}
      exit= {{x: '-100vh', opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}
    >
      <motion.div className="currentLocationText" initial = {{opacity: 0, x:"-100vw"}}
      animate = {{opacity: 1, x:"0"}} 
      transition = {{ duration: 1.5}}
      exit= {{x: '-100vh', opacity: 0, transition: { ease: 'easeInOut', duration: 2, opacity: 0}}}
    >
        The Location is...
      </motion.div>
      <div className="linkResults">
        <Link className="resultsBtn" to="/results">Generate Playlist! </Link>
      </div>
    </motion.div>


  );
  }
}

export default SurpriseMe;
