import './Hero.css'
import { useNavigate } from 'react-router-dom';
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroCount,setHeroCount,playStatus,setPlayStatus,heroData}) => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate('/login'); // Navigate to the Login form
  };
  return (
    <div className='hero'>
      <div className="hero-txt">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-testdrive">
        <p>Schedule your Test drive Now!</p>
        <img onClick={handleArrowClick} src={arrow_btn} alt='Arrow Button'></img>
      </div>

      <div className='hero-dot-play'>
      <ul className='hero-dots'>
        <li onClick={()=> setHeroCount(0)} className={heroCount===0? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={()=> setHeroCount(1)} className={heroCount===1? "hero-dot orange" : "hero-dot"}></li>
        <li onClick={()=> setHeroCount(2)} className={heroCount===2? "hero-dot orange" : "hero-dot"}></li>
      </ul>
      <div className='hero-play'>
        <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus? pause_icon : play_icon}></img>  
        <p>see the video</p>
      </div>
      </div>
    </div>
  )
}

export default Hero
