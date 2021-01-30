
import React, { Component } from "react";
// import citywalk from "../imgs/citywalk.svg";
import citywalk from "../imgs/test.svg";
import compose from "../imgs/compose.svg";
import contemplate from "../imgs/contemplate.svg";
import happy from "../imgs/happy.svg";
import "../css/happy.svg";
// import CrossfadeImage from "react-crossfade-image";
import '../css/HomeImg.css';


const images = [compose, happy, citywalk, contemplate];

function HomeImg(){
  return (
    <div class="image_div">
        <img className="home_image" src={compose}></img>
      {/* <CrossfadeImage class="home_image" 
        duration={1000}
        timingFunction={"ease-out"}
        src={images[0]} /> */}
    </div>
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
