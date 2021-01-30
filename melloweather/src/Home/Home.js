import HomeImg from '../Components/HomeImg.js';
import NavBar from '../Components/NavBar.js';
import RightBar from '../Components/RightBar.js';
import './Home.css';

function Home() {
  return (
    <div className="panel">
      <NavBar />
      <div class="flex-container">
        <div className = "homeText">
          Let's<br />
          make a<br />
          playlist!
        </div>
        
        <HomeImg />
        <RightBar />

      </div>

    </div>


  );
}

export default Home;
