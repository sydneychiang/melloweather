import '../css/EnterLocation.css';
import NavBar from '../Components/NavBar';
import SearchBar from '../Components/SearchBar.js';
import React, {Component} from "react";
import { motion } from 'framer-motion'
import MapComponent from '../Components/MapComponent.js';
// import AutocompleteMaps from '../Components/AutocompleteMaps.js';
// import PlacesAutocomplete, {
//   getLatLng
// } from "react-places-autocomplete";


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
    var address = "";
    function setAddress(newAddr){
      address = newAddr;
    }
    const handleSelect = async (value) => {}
  return (
    <motion.div className="enterLocationPanel" initial = {{opacity: 0}}
      animate = {{opacity: 1}}
      transition = {{ duration: 1}}
      exit= {{opacity: 0, transition: { ease: 'easeInOut', duration: 1, opacity: 0}}}
    >

      {/* <SearchBar /> */}
      {/* <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {(getInputProps, suggestions, getSuggestionItemProps, loading) => (
          <div> */}
            {/* <input {...getInputProps({placeholder: "Type location"})} /> */}
            {/* <div> */}
              {/* {loading ? <div>...loading</div> : null} */}

              {/* {suggestions.map(suggestion => {
                  return <div>{suggestion.description}</div>
              })}

            </div>
          </div>
        )}
      </PlacesAutocomplete> */}
      <MapComponent />
      {/* <AutocompleteMaps /> */}

    </motion.div>


  );
  }
}



export default EnterLocation;
