import React from 'react'
import Box from '@mui/material/Box';
import Navbar from './Navbar';
import Image from '../assets/WhatsApp Image 2023-03-06 at 13.53.42.jpeg'
import { Button, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react'

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })



const buttonSX = {
    color: '#e41db2',
    borderColor: '#e41db2',
    marginTop: '30px',
    width: '130px',
    fontSize: '20px',
  "&:hover": {
    borderColor: "#e41db2",
    },
    
};
const imageStyle ={
    width: '100%!important',
    height: '100%',
    borderRadius: '50%',
    objectFit:'cover'
}
export const Home = () => {

  return (
      <>
          {/* <Box  sx={heroImage}  > */}
          <Box sx={{background:'#4a3c47', width:'100%', height:'100vh' , clipPath:{xs:'100%' , md:' polygon(100% 0, 100% 50%, 100% 100%, 67% 81%, 0 100%, 0% 0%)'}}} data-aos="fade-down" data-aos-duration="2000">
                 
             
              <Container maxWidth="lg" sx={{height:'100%'}}>

              <Box sx={{display:'flex' , flexDirection:{xs:'column' , md:'row' , height:'100%' , alignItems:'center'} , paddingTop:{xs:'100px' , md:'0px'} }}>
                  
                      
                   
                  <Box sx={{width:{xs:'100%' , md:'50%' }, margin:'0 auto',  textAlign:{xs:'center' , lg:'left' }}} data-aos="fade-right" data-aos-duration="700">
                          <Typography variant='h2' sx={{ color: '#e41db2', fontSize: { xs: '25px', lg: '36px' }, fontWeight:'bold'}}>
                         Hi there,
                      </Typography>
                          <Typography variant='h2' sx={{ color: '#fff', fontSize: { xs: '25px', lg: '36px' } }}>
                          I'm Saeda Mughari
                      </Typography>
                        <Typography variant='h4' sx={{animation: `${fadeIn} 1s backwards` , color:'#fff' , fontSize:{xs:'25px' , lg:'36px'} }}>
                          Front End Developer & UI/UX Designer
                      </Typography>
                      <Button variant="outlined" sx={buttonSX}>Contact</Button>
                          </Box>
                      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
                          
                          <Box sx={{width:'300px' , height:'300px' , border:'solid 4px #e41db2',  borderRadius:'50%', overFlow:'hidden' , margin:{xs:'50px auto 0', md:'0 auto'} }} >  
                              <Box component="img" alt="" src={Image} sx={imageStyle} />
                          </Box>          
                       </Box>
                      </Box>
                      </Container>
          </Box>
          {/* </Box> */}
      </>
  )
}
