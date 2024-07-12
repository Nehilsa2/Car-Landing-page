import "./background.css";
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <div>
      <video className="background fade-in " autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
      </div>
    );
  }

  
  else {
    let backgroundImage;
    switch (heroCount) {
      case 0:
        backgroundImage = image1;
        break;
      case 1:
        backgroundImage = image2;
        break;
      case 2:
        backgroundImage = image3;
        break;
      default:
        backgroundImage = image1;
    }
    return (
      <img src={backgroundImage} className="background fade-in" alt="carimage" />
    );
  }
};

export default Background;