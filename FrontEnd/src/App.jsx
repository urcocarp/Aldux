import './App.css'; 
import NavBar from './components/navBar/navbar.jsx';
import Landing from './View/landing/landing.jsx';
import TextLanding from './components/textLanding/textLanding.jsx';
import BulletPoint from './components/bulletPoint/bulletPoint.jsx';
import Slider from './components/Slider/slider.jsx';
import QuienesSomos from './components/QuieneSomos/QuieneSomos.jsx';







function App() {
  

  return (
    <div className="App">
      <NavBar />
     <div >
      <Landing />
      <TextLanding />
      <QuienesSomos/>
      <BulletPoint />
      <Slider/>
     </div>
      
        
    </div>
      

  )
}

export default App
