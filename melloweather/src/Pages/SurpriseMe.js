import '../css/SurpriseMe.css';
import NavBar from '../Components/NavBar';
import React, {Component} from "react";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Axios from 'axios';

class SurpriseMe extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null
    };
  } 

  onTrigger = (event) => {
    this.props.parentCallback(this.data);
    var generate_btn = document.getElementById("generateBtnId")
    generate_btn.style.visibility = "hidden"
    console.log(generate_btn)

    var results_btn = document.getElementById("resultsBtnId")
    results_btn.style.visibility = "visible"
    console.log(results_btn)
    
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
      this.data = data
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

        <motion.div className="linkResults" id="generateBtnId" initial = {{opacity:0}}
        animate = {{opacity: 1, y:"0"}} 
        transition = {{ duration: .5, delay: 3}}
        exit= {{x: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
      >
          <Link className="generateBtn"  onClick={this.onTrigger}>Make Your Playlist! </Link>
          </motion.div>


          <motion.div className="linkResults" id="resultsBtnId" initial = {{x:"0", opacity: 0}}
        animate = {{opacity: 1, x:"0"}} 
        transition = {{ duration: 1, delay: 3}}
        exit= {{x: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
      >
          <Link className="resultsBtn"  to= "/results">See Your Playlist! </Link>
          </motion.div>
    </motion.div>


  );
  }
}

export default SurpriseMe;
