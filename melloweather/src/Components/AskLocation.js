import React, {Component} from "react";
import CurrentLocation from '../Pages/CurrentLocation.js';

function AskLocation(){
    let currentLocationPanel = document.getElementsByClassName("currentLocationPanel")[0];
    console.log(currentLocationPanel);
    // console.log(currentLocationPanel.classList.contains("onScreen"));
    // if (currentLocationPanel.classList.contains("onScreen")){
    //     navigator.geolocation.getCurrentPosition(function(position){
    //     console.log("Latitude is : ", position.coords.latitude);
    //     console.log("Longitude is : ", position.coords.longitude);
    // }

    return(
        <div></div>
        // <div className="currentLocationText">
        //     Please Click Allow Location!
        // </div>
    )
}

// class AskLocation extends Component{
//     constructor(props){
//         super(props);
//         this.state = {};
//     }
//     componentDidMount(){
//         navigator.geolocation.getCurrentPosition(function(position){
//             console.log("Latitude is : ", position.coords.latitude);
//             console.log("Longitude is : ", position.coords.longitude);

//         });
//     }

//     render(){
//         return(
//             <div className="currentLocationText">
//                 Please Click Allow Location!
//             </div>
//         );
//     }
// }

export default AskLocation;