import React, {Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AskLocation from "../Components/AskLocation";
import NavBar from "../Components/NavBar";
import '../css/CurrentLocation.css';
import Axios from 'axios';
import { motion } from 'framer-motion'


class CurrentLocation extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        var navbar = document.getElementById("nav");
        navbar.style.color = "black";
        navigator.geolocation.getCurrentPosition(function(position){
            console.log("Latitude is : ", position.coords.latitude);
            console.log("Longitude is : ", position.coords.longitude);
            
            fetch('/users', {
                method:"POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({latitude: position.coords.latitude, longitude: position.coords.longitude})
            }).then((result) => result.json())
            .then((info) => { console.log(info); })     
        });
    }
    render(){
      return (
        <motion.div className="currentLocationPanel offScreen" exit= {{opacity: 0, transition: { ease: 'easeInOut'}}}
        >
            <div className="currentLocationText">
                Please Click Allow Location!
            </div>
            <div className="linkResults">
                <Link className="resultsBtn" to="/results">Generate Playlist! </Link>
            </div>
        </motion.div>
      );
    }
}



export default CurrentLocation;
