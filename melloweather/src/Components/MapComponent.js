

import React, {Component} from "react";
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import '../css/MapComponent.css';
import { Autocomplete } from "@material-ui/lab";
// import withScriptjs from 'react-google-maps/lib/async/withScriptjs';


// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// function MapComponent() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -33.8688, lng: 151.2195 },
//     zoom: 13,
//     mapTypeId: "roadmap",
//   });
//   // Create the search box and link it to the UI element.
  
//   const input = document.getElementById("pac-input");
//   const searchBox = new google.maps.places.SearchBox(input);
//   map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
//   // Bias the SearchBox results towards current map's viewport.
//   map.addListener("bounds_changed", () => {
//     searchBox.setBounds(map.getBounds());
//   });
//   let markers = [];
//   // Listen for the event fired when the user selects a prediction and retrieve
//   // more details for that place.
//   searchBox.addListener("places_changed", () => {
//     const places = searchBox.getPlaces();

//     if (places.length == 0) {
//       return;
//     }
//     // Clear out the old markers.
//     markers.forEach((marker) => {
//       marker.setMap(null);
//     });
//     markers = [];
//     // For each place, get the icon, name and location.
//     const bounds = new google.maps.LatLngBounds();
//     places.forEach((place) => {
//       if (!place.geometry) {
//         console.log("Returned place contains no geometry");
//         return;
//       }
//       const icon = {
//         url: place.icon,
//         size: new google.maps.Size(71, 71),
//         origin: new google.maps.Point(0, 0),
//         anchor: new google.maps.Point(17, 34),
//         scaledSize: new google.maps.Size(25, 25),
//       };
//       // Create a marker for each place.
//       markers.push(
//         new google.maps.Marker({
//           map,
//           icon,
//           title: place.name,
//           position: place.geometry.location,
//         })
//       );

//       if (place.geometry.viewport) {
//         // Only geocodes have viewport.
//         bounds.union(place.geometry.viewport);
//       } else {
//         bounds.extend(place.geometry.location);
//       }
//     });
//     map.fitBounds(bounds);
//   });
// }


class MapComponent extends Component {
  init(){
    
  }

  render() {
    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };
    const input = document.getElementById("pac-input");
    // console.log(input);
    const options = {
      bounds: defaultBounds,
      componentRestrictions: { country: "us" },
      fields: ["address_components", "geometry", "icon", "name"],
      origin: center,
      strictBounds: false,
      types: ["establishment"],
    };
    // const autocomplete = new google.maps.places.Autocomplete(input, options);
    const style = {
      width: '60vw',
      height: '60vh',
      margin: '0 auto',
      marginTop: '30vh',
      borderRadius: '15px',
      }
    return (
      <div className="map">
        <Map google={this.props.google}
            id="googleMap"
            initialCenter={{
                lat: 33.6405,
                lng: -117.8443
                }}
            style={style}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}




// export default Map;
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCCGa505GhXnMPdYDfkTStjMG4Dhss_RWo')
   })(MapComponent);
