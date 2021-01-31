import '../css/EnterLocation.css';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar.js';
import React, {Component} from "react";
import { motion } from 'framer-motion'

class EnterLocation extends Component {
  constructor(props){
    super(props);
    this.state = {};
  } 
   componentDidMount (){
    var navbar = document.getElementById("nav");
    navbar.style.color = "black";
  }
  render(){
  return (
    <motion.div className="enterLocationPanel" exit= {{opacity: 0, transition: { ease: 'easeInOut'}}}
    >
      <SearchBar />

    </motion.div>


  );
  }
}



export default EnterLocation;
