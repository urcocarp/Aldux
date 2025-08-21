import './App.css'; 
import NavBar from './components/navBar/navbar.jsx';
import Landing from './View/landing/landing.jsx';
import TextLanding from './components/textLanding/textLanding.jsx';
import BulletPoint from './components/bulletPoint/bulletPoint.jsx';
import Slider from './components/Slider/slider.jsx';
import QuienesSomos from './components/QuieneSomos/QuieneSomos.jsx';
import Form from './components/Form/form.jsx'
import { Box, Typography } from "@mui/material";







function App() {
  

  return (
   <Box>
    <Landing/>
   </Box>
      

  )
}

export default App

//  <div className="App">
//       <NavBar />
//      <div >
//       <Landing />
//       <TextLanding />
//       <QuienesSomos/>
//       <BulletPoint />
//       <Slider/>
//       <Form />
//      </div>
      
        
//     </div>
