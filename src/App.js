import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolanaSection from './components/SolanaSection';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import CyberGame from './components/CyberGame';
import Cyberfps from './components/Cyberfps';
import Cs from './components/Cs';
import HeroSection from './components/HeroSection';
import FaqSection from './components/FaqSection';
// import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
    // Aos.refresh();
  });

  return (
    <>
      {/* <Routes>
        <Route path='/' exact element={<HeroSection />}></Route>
        <Route path='/CyberGame' exact element={<CyberGame />}></Route>
        <Route path='/Cyberfps' exact element={<Cyberfps />}></Route>
        <Route path='/Cs' exact element={<Cs />}></Route>
        <Route path='/TeamSection' exact element={<TeamSection />}></Route>
        <Route path='/FaqSection' exact element={<FaqSection />}></Route>
        <Route path='/SolanasSection' exact element={<SolanaSection />}></Route>
      </Routes > */}


      <HeroSection />
      <CyberGame />
      <Cyberfps />
      <Cs />
      <TeamSection />
      <FaqSection />
      <SolanaSection />
      <Footer />
    </>);
}

export default App;
