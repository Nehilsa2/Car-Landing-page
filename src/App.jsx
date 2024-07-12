import  { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Background from './components/background/background';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Loginform from './Forms/Loginform/Loginform.jsx'
import TransitionWrapper from './components/Transitionwrapper/TransitionWrapper.jsx';
const App = () => {
  // array to handle the text on the image
  const heroData = [
    { text1: "Drive Away", text2: "in Your Dream Car Today" },
    { text1: "Accelerate ", text2: "Your Dreams" },
    { text1: "Drive", text2: "the Future" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  // To handle play and pause of video
  const [playStatus, setPlayStatus] = useState(false);


  useEffect (()=>{
   const interval = setInterval(()=>{
      setHeroCount((count)=>{return count===2?0:count+1})
    },3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            
            <>
              <Navbar />
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Hero
                playStatus={playStatus}
                setPlayStatus={setPlayStatus}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                heroData={heroData[heroCount]}
              />
            </>
          } />
          <Route path="/login" element={
            <>
              <Navbar />
              <Loginform />
            </>
            } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;