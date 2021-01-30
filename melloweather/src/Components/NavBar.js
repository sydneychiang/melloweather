import logo from '../logo.svg';
import '../css/NavBar.css';


function NavBar() {
  return (
    <div className="NavBar">
        <img src={logo} className="logoImg"></img>
        <span className="title">melloweather</span>
    </div>
  );
}

export default NavBar;
