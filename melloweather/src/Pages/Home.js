import HomeImg from '../Components/HomeImg.js';
import NavBar from '../Components/NavBar.js';
import RightBar from '../Components/RightBar.js';
import CurrentLocation from './CurrentLocation.js';
import './Home.css';
import React, {Component} from "react";
import { motion } from 'framer-motion'

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.containerVariants = {
      hidden: {
        x: "-100vh",
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: { duration: 1}
      },
      exit: {
        x: "-200vh",
        opacity: 0,
        transition: { ease: 'easeInOut', duration: 2, opacity: 0}
    }
  }
  } 
   componentDidMount (){
      var navbar = document.getElementById("nav");
      navbar.style.color = "black";

  }
  render(){
  return (
    <motion.div className="panel" >
      
      <div className="flex-container">
        <motion.div class="homeText" variants={this.containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          Let's<br />
          make a<br />
          playlist!
        </motion.div>

        <HomeImg />
        <RightBar />

      </div>

    </motion.div>




  );
  }
}



export default Home;
