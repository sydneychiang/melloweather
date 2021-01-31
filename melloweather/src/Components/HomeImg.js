
import React, { Component } from "react";
// import citywalk from "../imgs/citywalk.svg";
import citywalk from "../imgs/test.svg";
import compose from "../imgs/compose.svg";
import contemplate from "../imgs/contemplate.svg";
import happy from "../imgs/happy.svg";
import "../css/happy.svg";
// import CrossfadeImage from "react-crossfade-image";
import '../css/HomeImg.css';
import {motion} from 'framer-motion'


const images = [compose, happy, citywalk, contemplate];

function HomeImg(){

  const containerVariants = {
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

  return (
    <motion.div className="image_div" variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <img className="home_image" src={compose}></img>
    </motion.div>
  );

}


// class HomeImg extends Component {

//   constructor() {
//     super();
//     this.state = {
//       imageIndex:0
//     };
//     this.changeImage = this.changeImage.bind(this);
//   }
//   changeImage() {
//     if (this.state.imageIndex === images.length - 1) {
//       this.setState({ imageIndex: 0 });
//     } else {
//       this.setState({ imageIndex: this.state.imageIndex + 1 });
//     }
//   }
//   render(){
//     return (
//       <div class="image_div">
//         <CrossfadeImage class="home_image" 
//           duration={1000}
//           timingFunction={"ease-out"}
//           src={images[this.state.imageIndex]} />
//       </div>
//     );
//   }
// }

export default HomeImg;
