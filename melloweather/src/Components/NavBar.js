import logo from '../logo.svg';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/"><img src={logo} className="logoImg"></img></Link>
      <Link id="nav" className="title" to="/">melloweather</Link>
    </div>
  );
}

export default NavBar;
