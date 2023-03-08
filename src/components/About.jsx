import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Image from '../assets/WhatsApp Image 2023-03-06 at 13.53.42.jpeg'

export const About = () => {
    return (
      <Container maxWidth="lg" sx={{minHeight:'100vh' ,  padding:{xs:'0px 20px' , md:'0px 0px'}}} id='about'>
      <Box sx={{
          display: 'flex', flexDirection: {
              xs: 'column',
              md:'row'
      }, paddingTop:'200px'}}>
          <Box sx={{ width:{xs:'100%' , md:'50%'}, textAlign: 'left' }} data-aos="fade-down-right">
            <Box sx={{display:'flex' , gap:'10px' , alignItems:'center'}}>
              <Typography variant='h6' sx={{color:'#c4c2c2' , marginTop:'5px'}}>
                01.
              </Typography>
            <Typography variant='h2' sx={{fontSize:{xs:'22px', md:'30px'} , fontWeight:'bold' , color: '#e41db2'}}>
                About me
              </Typography>
              <Box sx={{width:{xs:'100px' , md:'300px'} , height:'.5px' , background:'#63515f' , marginTop:'8px'  }}></Box>
            </Box>
            
            
              <Typography variant='body1' sx={{marginBottom:'20px'  , marginTop:'40px' , color:'#c4c2c2'}}>
                I am a reliable software engineer specializing in front-end development and UI-UX design with robust skills in building quality and responsive ou user interfaces. My strong areas cover doing pixel-perfect conversion of an existing design from Figma, Sketch, or Adobe XD to React JS applications or vanilla HTML/CSS/JS websites and landings using modern technologies.
               </Typography>   
               <Typography variant='body1' sx={{color:'#c4c2c2'}}>
                   I have created interactive websites and applications, some of which are Talabat which is a website to provide work from home for women whose businesses have been affected by the Corona pandemic, and Quadr which is an online freelancing platform where employers connect with freelancers for remote collaboration.     
               </Typography>
          </Box>
          <Box sx={{width:{xs:'100%' , md:'50%'} , marginTop:{xs:'20px' , md:'0px'}}} data-aos="fade-down-left">
            <Box sx={{ width:{xs:'290px', md:'350px'} , height:{xs:'290px', md:'350px'}  , background:'#342831' , border:'solid 4px #e41db2',  margin:'0 auto'}}>
              
            </Box>
            
            <Box component="img" alt="" src={Image}  sx={{ width:{xs:'290px', md:'350px'}  , height:{xs:'290px', md:'350px'}  , margin:{xs:'-290px 30px 0 auto' , md:'-350px 30px 0 auto'} , objectFit:'cover'}}/>
           </Box>
        </Box>
    </Container>
  )
}
