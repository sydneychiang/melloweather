
import '../css/RightBar.css';
import CurrentLocation from '../Pages/CurrentLocation';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion'

function RightBar() {
    // function handleClick(){
    //     let textPanel = document.getElementsByClassName("textPanel")[0];
    //     // textPanel.classList.toggle("fade");

    //     let offScreen = document.getElementsByClassName("offScreen")[0];
    //     offScreen.classList.toggle("offScreen");
    //     offScreen.classList.toggle("onScreen");
    // }

    const containerVariants = {
      hidden: {
        x: 0,
        opacity: 0,
      },
      visible: {
        x: "0",
        opacity: 1,
        transition: { duration: 1}
      },
      exit: {
        opacity: 0, 
        transition: { ease: 'easeInOut', duration: 1.5, opacity: 0}
      }
    }

  return (
    <motion.div className="fullPanel" variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
        <motion.div className="textPanel">
            <Link className="link" to="/enterLocation">Enter Location</Link>
            <Link className="link" to="/userLocation">Current Location</Link>
            <Link className="link" to="/surpriseMe">Surprise Me</Link>
        </motion.div>
    </motion.div>
  );
}

export default RightBar;
