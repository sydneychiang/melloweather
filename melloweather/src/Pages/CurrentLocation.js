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
        this.state = {data: ""};
    }
    componentDidMount(){
        var navbar = document.getElementById("nav");
        navbar.style.color = "black";
        navigator.geolocation.getCurrentPosition(function(position){
            console.log("Latitude is : ", position.coords.latitude);
            console.log("Longitude is : ", position.coords.longitude);

            
            const url = "http://localhost:8080/getWeather?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude
            console.log(url)
            Axios.get(url)
                .then(res => {
                const data = res.data;
                console.log(data)
                })
        })
    }
    render(){
      return (
        <motion.div className="currentLocationPanel offScreen" initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{ duration: 1}}
                exit= {{opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
            >
            <motion.div className="currentLocationText" initial = {{y:"-100vw"}}
            animate = {{opacity: 1, y:"0"}} 
            transition = {{ duration: 1}}
            exit= {{y: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
            >
                Please Click Allow Location!
            </motion.div>
            <motion.div className="linkResults" initial = {{y:"-100vw"}}
            animate = {{opacity: 1, y:"0"}} 
            transition = {{ duration: 1}}
            exit= {{y: '-100vw', opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
            >
                <Link className="resultsBtn" to="/results">Generate Playlist! </Link>
            </motion.div>
        </motion.div>
      );
    }
}



export default CurrentLocation;
