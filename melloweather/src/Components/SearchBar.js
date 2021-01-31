import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import countries from '../all-countries-and-cities-json/countries.json';
import NavBar from './NavBar';
import '../css/SearchBar.css'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import React, {Component} from "react";
import axios from 'axios';
// const dotenv = require("dotenv");
// dotenv.config({ path: "../config.env" });


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            countryValue: "",
            cityValue: "",
            citiesLst: [],
            response: 0,
        };

        // this.geocodeLocation("Los Angeles", "California");
        // let resultsBtn = document.getElementById("resultsBtn");
        // resultsBtn.addEventListener("click", function(){
        //     this.geocodeLocation(this.state.cityValue, this.state.countryValue);
        // });
    } 
    geocodeLocation(city, country){
        var queryCity = city.replace(" ", "+");
        var queryCountry= country.replace(" ", "+");
        var resultsBtn = document.getElementById("btnDiv");
        resultsBtn.onclick = this.geocodeLocation("Los Angeles", "California");

        var linkStr ="https://api.opencagedata.com/geocode/v1/json?q=" + queryCity +"," +queryCountry + "&key=" +"2551ef41f38046fcb56ab8ba401db382"; //REPLACE LATER
        
        axios.get(linkStr).then(res => {
            // const data = res.data;
            this.state.response = res.data;
            console.log(this.state.response)
          })

        //   this.geocodeLocation("Los Angeles", "California")
        // let response;
        // const getData = async (link=linkStr) => {
        //     // setLoading(true)
        //     // let response;
        //     try {
        //         this.state.response = await axios.get(link);
        //         console.log(this.state.response);
    
        //         // setData([...data, response.data]);
                
        //     } catch(err) {
        //         console.log(err)
        //     }
        //     // setLoading(false)
        // }
        // getData(linkStr);
        // console.log("here", getData(linkStr));
        // console.log("here", this.state.response);
        this.getLatAndLng(this.state.response);
        
    }
    getLatAndLng(response){
        console.log("why",response);
        if(Object.keys(response).length !== 0){
            console.log("why",response);

            var lat = response["data"][0]["geometry"]["lat"];
            var lng = response["data"][0]["geometry"]["lng"];
            console.log(lat, lng);
        }

        // console.log(lat, lng);
    }
    componentDidMount (){
        var navbar = document.getElementById("nav");
        navbar.style.color = "black";

    }
    revealBtn(){
        var linkResults = document.getElementsByClassName("linkResults")[0];
        linkResults.style.display = "inline-block";
    }

    inputHandler(e){
        this.state.countryValue = e.target.value;
        this.state.citiesLst = this.updateCityOptions();
    }

    enableCities(e){
        this.state.countryValue = e.target.value;
        this.state.citiesLst = this.updateCityOptions();
        let second = document.getElementById("second");
        second.style.display="inline";
    }

    removeDups(){
        var cities = Object.values(countries["Greece"]).map((option) => option);
        let newSet = new Set(cities);
        this.state.citiesLst = Array.from(newSet);
        console.log("after", this.state.citiesLst,this.state.citiesLst.length)
        return this.state.citiesLst;
    }

    updateCityOptions(){
        var i = this.findCountryIndex(this.state.countryValue);
        return Object.values(countries)[i];
    }

    findCountryIndex(country){
        var countriesLst = Object.keys(countries);
        var position;

        for(var i = 0; i < countriesLst.length; i++){
            if(countriesLst[i].includes(country)){
                position = i;
                break;
            }
        }
        // console.log("find country index", country, position);
        return position;
    }
  render(){
    return (
        <motion.div className="searchBar" exit= {{opacity: 0, transition: { ease: 'easeInOut'}}}
        >
        <div id="instructions">
            Please Enter a Location:
        </div>
        <Autocomplete 
            freeSolo
            id="countrySelect"
            className="autocomplete"
            disableClearable
            options={Object.keys(countries).map((option) => option)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    id="countryTextField"
                    label="Country"
                    margin="normal"
                    required
                    value={this.state.countryValue}
                    onChange={this.inputHandler}
                    onSelect={this.enableCities}
                    variant="outlined"
                    InputProps={{...params.InputProps, type: 'search'}}
                />
            )}
        />

        <div id="second">


            <Autocomplete 
                freeSolo
                id="citySelect"
                className="autocomplete"
                disableClearable
                options={this.removeDups}
                // options={Object.values(countries).map((option) => option[0])}
                // required
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="City"
                        margin="normal"
                        required
                        value={this.state.cityValue}
                        onSelect={this.revealBtn}
                        // onChange={updateCityOptions}
                        variant="outlined"
                        InputProps={{...params.InputProps, type: 'search'}}
                    />
                )}
            />
        </div>

        <div className="linkResults" id="btnDiv">
            <Link id="resultsBtn" to="/results">Generate Playlist! </Link>
        </div>
        
        

        </motion.div>
    


    );
  }
}


// function SearchBar() {
//     var countryValue = "";
//     var cityValue = "";
//     var citiesLst = [];


//     function revealBtn(){
//         var linkResults = document.getElementsByClassName("linkResults")[0];
//         linkResults.style.display = "inline-block";
//     }

//     const inputHandler = function(e){
//         countryValue = e.target.value;
//         citiesLst = updateCityOptions();
//         console.log("before", countryValue, citiesLst);
//     }

//     const enableCities = function(e){
//         countryValue = e.target.value;
//         citiesLst = updateCityOptions();
//         let second = document.getElementById("second");
//         second.style.display="inline";
//         console.log(citiesLst);
//     }

//     function removeDups(){
//         var cities = Object.values(countries["Greece"]).map((option) => option);
//         let newSet = new Set(cities);
//         citiesLst = Array.from(newSet);
//         console.log("after", citiesLst,citiesLst.length)
//         return citiesLst;
//     }
   
//     function updateCityOptions(){
//         var i = findCountryIndex(countryValue);
//         return Object.values(countries)[i];
//     }

//     function findCountryIndex(country){
//         var countriesLst = Object.keys(countries);
//         var position;

//         for(var i = 0; i < countriesLst.length; i++){
//             if(countriesLst[i].includes(country)){
//                 position = i;
//                 break;
//             }
//         }
//         // console.log("find country index", country, position);
//         return position;
//     }

//     return (
//       <motion.div className="searchBar" exit= {{opacity: 0, transition: { ease: 'easeInOut'}}}
//       >
//        <div id="instructions">
//            Please Enter a Location:
//        </div>
//         <Autocomplete 
//             freeSolo
//             id="countrySelect"
//             className="autocomplete"
//             disableClearable
//             options={Object.keys(countries).map((option) => option)}
//             renderInput={(params) => (
//                 <TextField
//                     {...params}
//                     id="countryTextField"
//                     label="Country"
//                     margin="normal"
//                     required
//                     value={countryValue}
//                     onChange={inputHandler}
//                     onSelect={enableCities}
//                     variant="outlined"
//                     InputProps={{...params.InputProps, type: 'search'}}
//                 />
//             )}
//         />

//         <div id="second">


//             <Autocomplete 
//                 freeSolo
//                 id="citySelect"
//                 className="autocomplete"
//                 disableClearable
//                 options={removeDups()}
//                 // options={Object.values(countries).map((option) => option[0])}
//                 // required
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         label="City"
//                         margin="normal"
//                         required
//                         value={cityValue}
//                         onSelect={revealBtn}
//                         // onChange={updateCityOptions}
//                         variant="outlined"
//                         InputProps={{...params.InputProps, type: 'search'}}
//                     />
//                 )}
//             />
//         </div>

//         <div className="linkResults">
//             <Link id="resultsBtn" to="/results">Generate Playlist! </Link>
//         </div>
        
        
  
//       </motion.div>
  
  
//     );
//   }
  
  export default SearchBar;
  

