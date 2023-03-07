import { Box, Link } from '@mui/material';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Category } from './components/Ctegory';
import { Experience } from './components/Experience';
import { HeroSection } from './components/HeroSection';
import Navbar from './components/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BrowserRouter, Route , Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

           <Box sx={{position:'fixed' , zIndex:'100' , top:'35%' , left:'40px' , transform:'translate(-50% , 0%)' , display:{xs:'none', md:'flex'} , flexDirection:'column' , alignItems:'center' , gap:'10px', background:{xs:'#4a3c47' , md:'transparent'}}}> 
                   
          
                      <Box sx={{height:'50px' , width:'2px' , backgroundColor:'#fff'}}>
                          
                      </Box>
                      <Link href="#" >
                          <FacebookIcon sx={{color:'rgb(209, 208, 208)'}} />
                      </Link>
                      <Link href="#" >
                          <InstagramIcon sx={{color:'rgb(209, 208, 208)'}} />
                      </Link>
                      <Link href="#" >
                          <WhatsAppIcon sx={{color:'rgb(209, 208, 208)'}} />
                      </Link>
                      <Link href="#" >
                          <LinkedInIcon sx={{color:'rgb(209, 208, 208)'}} />
                      </Link>
        </Box>
         <Navbar />
        <Routes>
          <Route path="/home" element={  <HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Experience/>} />
          <Route path="/portfolio" element={  <Category />} />
          <Route path="/contact" element={  <Contact />} />

    
          </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
