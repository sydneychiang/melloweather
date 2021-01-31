import logo from '../logo.svg';
import React, {Component} from "react";
import '../css/NavBar.css';
import { Link } from 'react-router-dom';
import '../getLoginStatus.js';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      // loginurl: "http://localhost:8080/login",
      // logouturl: "http://localhost:8080/logout",
    }
  }
  componentDidMount() {
    const script = document.createElement("script");
    let navDiv = document.getElementsByClassName("NavBar")[0];
    script.async = true;
    script.src = "../getLoginStatus.js";
    navDiv.appendChild(script);
  }
  render() {
    return (
      <div className="NavBar">

        <Link to="/"><img src={logo} className="logoImg"></img></Link>
        <Link id="nav" className="title" to="/">melloweather</Link>


        {/* <Link id="signIn" to="/login">Sign In</Link>   */}


        {/* <a id="logout" href={this.state.logouturl}>Sign Out</a> */}
 


      </div>
    );
  }
}


// function NavBar() {
//   let url = "http://localhost:8080/login";
//   return (
//     <div className="NavBar">
//       <Link to="/"><img src={logo} className="logoImg"></img></Link>
//       <Link id="nav" className="title" to="/">melloweather</Link>

//       {/* <Link id="signIn" to="/login">Sign In</Link>   */}
      
//       <a href={url}>Sign In</a>
//     </div>
//   );
// }

export default NavBar;
